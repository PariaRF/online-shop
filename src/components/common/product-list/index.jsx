import React, { Component } from "react";
import { getMockProducts } from "../../../server";
import Loading from "../loading";
import styles from "./styles.module.css";

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            isLoading: true,
        }
    }
    componentDidMount() {
        this.getDataFromApi();
    };

    getDataFromApi = async () => {
        const result = await getMockProducts;
        this.setState({
            productList: result,
            isLoading: false,
        });
    }

    addToCart = (product) => {
        this.props.productSelected(product);
    }

    renderProduct = () => {
        const { productList, isLoading } = this.state;
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
                                <div className={styles.name}>{`Name: ${product.name}`}</div>
                                <div>{`Price: ${product.price}`}</div>
                                <button className={styles.btnCart} onClick={() => this.addToCart(product)}>Add To Cart</button>
                            </div>
                        );
                    })
                }
            </div>
        )
    }


    render() {
        return (
            <>
                <h1 className={styles.title}>Product List</h1>
                <hr />
                {this.renderProduct()}
            </>
        )
    }
}

export default ProductList;