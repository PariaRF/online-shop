import React, { useEffect, useState } from "react";
import Loading from "../../components/common/loading";
import { getProductById } from "../../server";
import "./index.css";

const ProductPage =({routeProps})=> {

const [data, setData] = useState(null);
const [isLoading , setIsLoadung] = useState(true);

useEffect(() =>{
    getProductData();
},[]);
    
    const getProductData = async () => {
        // const { routeProps } = this.props;
        // const { match } = routeProps;
        // const { params } = match;
        try {
            const data = await getProductById(Number(routeProps.match.params.id));
            setData(data);
            setIsLoadung(false);
        } catch (e) {
            alert("Product By This Id Nout Found");
        } finally {
            setIsLoadung(false);
        }
    }

    const handleDataByID = (isLoading, data) => {
        if (isLoading) {
            return <div className="loading-wrapper"><Loading /></div>
        }
        return (
            <>
                <h1>Product ID: {data && data.id}</h1>
                <hr />
                <div className="container">
                    <div className="text">
                        {data && `Name: ${data.name}`}
                        <p>{data && `Price: ${data.price}`}</p>
                        {data && data.hanOff && <p>Sale!</p>}
                    </div>
                </div>
            </>
        )
    }

        return (
            <>

                <div className="product-wrapper">
                    {handleDataByID(isLoading, data)}
                </div>
            </>
        )
}

export default ProductPage;