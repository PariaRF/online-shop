import React,{Component} from "react";
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