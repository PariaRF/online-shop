import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBarItem from "../nav-bar-item";
import "./index.css";

const navBarItem = {
    HOME: "home",
    CART: "cart",
    PROFILE: "profile",
};

class NavBar extends Component {

    handleOnHomeClick = () => {
        alert("Click On Home");
    }

    handleOnCartClick = (itemName) => {
        const { onItemClick } = this.props;
        onItemClick(itemName);
    }

    handleOnProfileClick = () => {
        alert("Click On profile");
    }

    handleOnNavBarItemClick = (itemName) => {
        if (itemName === navBarItem.HOME) {
            this.handleOnHomeClick();
        }
        if (itemName === navBarItem.CART) {
            this.handleOnCartClick(itemName);
        }
        if (itemName === navBarItem.PROFILE) {
            this.handleOnProfileClick();
        }
    }

    render() {
        const { cartItemNumber } = this.props;
        return (
            <>
                <Link to="/" className="link">
                    <NavBarItem onClick={() => this.handleOnNavBarItemClick(navBarItem.HOME)}>Home</NavBarItem>
                </Link>
                <NavBarItem onClick={() => this.handleOnNavBarItemClick(navBarItem.CART)}>Cart {cartItemNumber}</NavBarItem>
                <Link to="/profile" className="link">
                    <NavBarItem onClick={() => this.handleOnNavBarItemClick(navBarItem.PROFILE)}>Profile</NavBarItem>
                </Link>
            </>
        )
    }
}

export default NavBar;