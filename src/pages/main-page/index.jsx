import React, { Component } from "react";
import Cart from "../../components/common/cart";
import NavBar from '../../components/common/nav-bar';
import ProductList from '../../components/common/product-list';
import Header from '../../components/layout/header';
import styles from "./styles.module.css";


const navBarItem = {
  HOME: "home",
  CART: "cart",
  PROFILE: "profile",
};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedToCartList: [],
      showCart: false,
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
    }, console.log(this.state.addedToCartList))
  };

  handleRemoveProductFromCart = (productItem) => {
    window.confirm("Are You Sure Remove Item?")
    const newList = this.state.addedToCartList.filter((product) => {
      return product.id !== productItem.id;
    })
    this.setState({ addedToCartList: newList })
  }

  handleOnHomeClick = () => {
    alert("Click On Home");
  }

  handleOnCartClick = () => {
    this.setState((prevState) => {
      return {
        showCart: !prevState.showCart,
      }
    })
  }

  handleOnProfileClick = () => {
    alert("Click On profile");
  }

  handleOnNavItemClick = (itemName) => {
    if (itemName === navBarItem.HOME) {
      this.handleOnHomeClick();
    }
    if (itemName === navBarItem.CART) {
      this.handleOnCartClick();
    }
    if (itemName === navBarItem.PROFILE) {
      this.handleOnProfileClick();
    }
  }



  render() {
    const { addedToCartList, showCart } = this.state;
    return (
      <div>
        <Header>
          <NavBar
            onItemClick={(itemName) => this.handleOnNavItemClick(itemName)} 
            cartItemNumber={addedToCartList.length}/>
        </Header>
        <Cart
          list={addedToCartList}
          onItemRemove={this.handleRemoveProductFromCart}
          show={showCart} 
          />
        <div className={styles.mainPage}>
          <ProductList productSelected={this.handleOnProductSelect} />
        </div>
      </div>
    );
  }
}

export default MainPage;
