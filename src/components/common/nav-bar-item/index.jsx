import React, { Component } from "react";
import styles from "./styles.module.css";

class NavBarItem extends Component {

    handleClick = () => {
        const {onClick} = this.props;
        onClick && onClick();
    };

    render() {
        return (
            <div className={styles.navbarItem} onClick={this.handleClick}>
                {this.props.children}
            </div>
        )
    }
}

export default NavBarItem;