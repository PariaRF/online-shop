import React,{Component} from "react";

class NavBarItem extends Component{

    
    render(){
        return(
            <>
            {this.props.children}
            </>
        )
    }
}

export default NavBarItem;