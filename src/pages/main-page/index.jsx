import React, { Component } from "react";
import Cart from "../../components/common/cart";
import NavBar from '../../components/common/nav-bar';
import ProductList from '../../components/common/product-list';
import Header from '../../components/layout/header';
import styles from "./styles.module.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedToCartList: [],
    }
  }

  handleOnProductSelect = (productItem) => {
    this.setState((prevState) => {
      if (!prevState.addedToCartList.includes(productItem)) {
        return {
          addedToCartList: [...prevState.addedToCartList, productItem]
        };
      }
      return {
        ...prevState
      }
    })
  };

  handleRemoveProductFromCart = (productItem) => {
    window.confirm("Are You Sure Remove Item?")
    const newList = this.state.addedToCartList.filter((product) => {
      return product.id !== productItem.id;
    })
    this.setState({addedToCartList: newList})
  }

  render() {

    return (
      <div>
        <Header>
          <NavBar />
        </Header>
        <Cart list={this.state.addedToCartList} onItemRemove={this.handleRemoveProductFromCart} />
        <div className={styles.mainPage}>
          <ProductList productSelected={this.handleOnProductSelect} />
        </div>
      </div>
    );
  }
}

export default MainPage;
