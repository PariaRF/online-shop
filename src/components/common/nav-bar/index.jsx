import React from "react";
import { Link } from "react-router-dom";
import NavBarItem from "../nav-bar-item";
import "./index.css";

const navBarItem = {
    HOME: "home",
    CART: "cart",
    PROFILE: "profile",
};

const NavBar = ({ onItemClick, cartItemNumber }) => {

    const handleOnHomeClick = () => {
        alert("Click On Home");
    }

    const handleOnCartClick = (itemName) => {
        onItemClick(itemName);
    }

    const handleOnProfileClick = () => {
        alert("Click On profile");
    }

    const handleOnNavBarItemClick = (itemName) => {
        if (itemName === navBarItem.HOME) {
            handleOnHomeClick();
        }
        if (itemName === navBarItem.CART) {
            handleOnCartClick(itemName);
        }
        if (itemName === navBarItem.PROFILE) {
            handleOnProfileClick();
        }
    }

    return (
        <>
            <Link to="/" className="link">
                <NavBarItem onClick={() => handleOnNavBarItemClick(navBarItem.HOME)}>Home</NavBarItem>
            </Link>
            <NavBarItem onClick={() => handleOnNavBarItemClick(navBarItem.CART)}>Cart {cartItemNumber}</NavBarItem>
            <Link to="/profile" className="link">
                <NavBarItem onClick={() => handleOnNavBarItemClick(navBarItem.PROFILE)}>Profile</NavBarItem>
            </Link>
        </>
    )
}

export default NavBar;