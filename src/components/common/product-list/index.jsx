import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMockProducts } from "../../../server";
import Loading from "../loading";
import styles from "./styles.module.css";

const ProductList = ({ productSelected }) => {

    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDataFromApi();
    }, []);

    const getDataFromApi = async () => {
        const result = await getMockProducts;
        setProductList(result);
        setIsLoading(false);
    }

    const addToCart = (product) => {
        productSelected(product);
    }

    const renderProduct = () => {
        if (isLoading) {
            return (
                <div className={styles.loadingWrapper}>
                    <Loading />
                </div>
            )
        }
        return (
            <div className={styles.wrapper}>
                {
                    productList.map((product, index) => {
                        return (
                            <div className={styles.productItem} key={index}>
                                <Link to={`/product/${product.id}`} className={styles.link}>
                                    <div className={styles.name}>{`Name: ${product.name}`}</div>
                                    <div className={styles.price}>{`Price: ${product.price}`}</div>
                                </Link>
                                <button className={styles.btnCart} onClick={() => addToCart(product)}>Add To Cart</button>
                            </div>
                        );
                    })
                }
            </div>
        )
    }


    return (
        <>
            <h1 className={styles.title}>Product List</h1>
            <hr />
            {renderProduct()}
        </>
    )
}

export default ProductList;