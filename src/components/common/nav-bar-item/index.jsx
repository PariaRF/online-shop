import React, { Component } from "react";
import styles from "./styles.module.css";

class NavBarItem extends Component {


    render() {
        return (
            <div className={styles.navbarItem}>
                {this.props.children}
            </div>
        )
    }
}

export default NavBarItem;