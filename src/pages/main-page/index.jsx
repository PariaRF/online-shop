import React, { useState } from "react";
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

const MainPage = () => {

  const [addedToCartList, setAddedToCartList] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleOnProductSelect = (productItem) => {

    setAddedToCartList((addedToCartListPrevState) => {
      if (!addedToCartListPrevState.includes(productItem)) {
        return [...addedToCartListPrevState, productItem];
      }
      return [...addedToCartListPrevState]
    });
  };

  const handleRemoveProductFromCart = (productItem) => {
    window.confirm("Are You Sure Remove Item?")
    const newList = addedToCartList.filter((product) => {
      return product.id !== productItem.id;
    })
    setAddedToCartList(newList);
  }

  const handleOnHomeClick = () => {
    alert("Click On Home");
  }

  const handleOnCartClick = () => {
    setShowCart((showCartPrevState) => !showCartPrevState);
  }

  const handleOnProfileClick = () => {
    alert("Click On profile");
  }

  const handleOnNavItemClick = (itemName) => {
    if (itemName === navBarItem.HOME) {
      handleOnHomeClick();
    }
    if (itemName === navBarItem.CART) {
      handleOnCartClick();
    }
    if (itemName === navBarItem.PROFILE) {
      handleOnProfileClick();
    }
  }


  return (
    <div>
      <Header>
        <NavBar
          onItemClick={(itemName) => handleOnNavItemClick(itemName)}
          cartItemNumber={addedToCartList.length} />
      </Header>
      <Cart
        list={addedToCartList}
        onItemRemove={handleRemoveProductFromCart}
        show={showCart}
      />
      <div className={styles.mainPage}>
        <ProductList productSelected={handleOnProductSelect} />
      </div>
    </div>
  );
}

export default MainPage;
