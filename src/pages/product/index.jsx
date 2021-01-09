import React, { Component } from "react";
import Loading from "../../components/common/loading";
import { getProductById } from "../../server";
import "./index.css";

class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: true,
        }
    }

    componentDidMount() {
        this.getProductData();
    }

    getProductData = async () => {
        const { routeProps } = this.props;
        const { match } = routeProps;
        const { params } = match;
        try {
            const data = await getProductById(Number(params.id));
            this.setState({
                data,
                isLoading: false
            })
        } catch (e) {
            alert("Product By This Id Nout Found");
        } finally {
            this.setState({
                isLoading: false,
            })
        }
    }

    handleDataByID = (isLoading, data) => {
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

    render() {
        const { isLoading, data } = this.state;
        return (
            <>

                <div className="product-wrapper">
                    {this.handleDataByID(isLoading, data)}
                </div>
            </>
        )
    }
}

export default ProductPage;