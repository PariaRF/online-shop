import React,{Component} from "react";
import {getMockProducts} from "../../../server";

class ProductList extends Component{
    componentDidMount(){
        this.getDataFromApi();
    };

     getDataFromApi = async() =>{
        const result = await getMockProducts;
        console.log(result);
    }
    render(){
        return(
            <>
            <h1>Product List</h1>
            </>
        )
    }
}

export default ProductList;