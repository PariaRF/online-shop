import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./utils/routes";

class RouterProvider extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route path={route.path} exact={route.exact} key={index}>
                                {<route.component />}
                            </Route>
                        )
                    })}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterProvider;