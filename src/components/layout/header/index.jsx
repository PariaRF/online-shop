import React,{Component} from "react";
import NavBar from "../../common/nav-bar";
import styles from  "./styles.module.css";

class Header extends Component{
    render(){
        return(
            <>
                <div className={styles.container}>
                   {this.props.children}
                </div>
            </>
        )
    }
}

export default Header;