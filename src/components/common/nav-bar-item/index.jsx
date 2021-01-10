import React from "react";
import styles from "./styles.module.css";

const NavBarItem = ({ onClick, children }) => {

    const handleClick = () => {
        onClick && onClick();
    };

    return (
        <div className={styles.navbarItem} onClick={handleClick}>
            {children}
        </div>
    )
}

export default NavBarItem;