import React, { Component } from "react";
import NavBarItem from "../nav-bar-item";

class NavBar extends Component {
    render() {
        return (
            <>
                <NavBarItem>Home</NavBarItem>
                <NavBarItem>Cart</NavBarItem>
                <NavBarItem>Profile</NavBarItem>
            </>
        )
    }
}

export default NavBar;