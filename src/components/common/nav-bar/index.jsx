import React, { Component } from "react";
import NavBarItem from "../nav-bar-item";

const navBarItem = {
    HOME : "home",
    CART: "cart",
    PROFILE: "profile",
};

class NavBar extends Component {

    handleOnHomeClick = () =>{
        alert("Click On Home");
    }

    handleOnCartClick = (itemName) =>{
        const {onItemClick} = this.props;
        onItemClick(itemName);
    }

    handleOnProfileClick = () =>{
        alert("Click On profile");
    }

    handleOnNavBarItemClick = (itemName) =>{
        if( itemName === navBarItem.HOME){
            this.handleOnHomeClick();
        }
        if(itemName === navBarItem.CART){
            this.handleOnCartClick(itemName);
        }
        if(itemName === navBarItem.PROFILE){
            this.handleOnProfileClick();
        }
    }

    render() {
        const {cartItemNumber} = this.props;
        return (
            <>
                <NavBarItem onClick={() => this.handleOnNavBarItemClick(navBarItem.HOME)}>Home</NavBarItem>
                <NavBarItem onClick={() => this.handleOnNavBarItemClick(navBarItem.CART)}>Cart {cartItemNumber}</NavBarItem>
                <NavBarItem onClick={() => this.handleOnNavBarItemClick(navBarItem.PROFILE)}>Profile</NavBarItem>
            </>
        )
    }
}

export default NavBar;