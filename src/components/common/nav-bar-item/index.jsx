import React,{Component} from "react";

class NavBarItem extends Component{
    constructor(props){
        super(props);
    };
    
    render(){
        return(
            <>
            {this.props.children}
            </>
        )
    }
}

export default NavBarItem;