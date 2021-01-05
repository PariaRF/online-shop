import React,{Component} from "react";
import styles from  "./styles.module.css";

class Header extends Component{
    render(){
        return(
            <>
                <div className={styles.container}>
                    <p>Header</p>
                </div>
            </>
        )
    }
}

export default Header;