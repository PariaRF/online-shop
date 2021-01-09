import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import checkAuth from "../auth-mock/checkAuth";
import routes from "./utils/routes";

const token = checkAuth(true);

class RouterProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: null,
        }
    };

    componentDidMount() {
        setTimeout(() => {
            if (token) {
                this.setState({
                    isAuthenticated: true,
                })
            } else {
                this.setState({
                    isAuthenticated: false,
                })
            }

        }, 100);
    }

    handleRouteEnter =(route) =>{
        const {isAuthenticated} = this.state;
        if(isAuthenticated){
            return <route.component />;
        }else{
            return <Redirect to="/401" />;
        }

    }

    render() {

        const { isAuthenticated } = this.state;

        if (isAuthenticated === null) {
            return <p>Please Wait...</p>
        }
        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route path={route.path} exact={route.exact} key={index}>
                                { route.needAuth 
                                ? 
                                (this.handleRouteEnter(route)) 
                                : 
                                (<route.component />)}
                            </Route>
                        )
                    })}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterProvider;