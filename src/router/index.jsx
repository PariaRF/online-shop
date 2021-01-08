import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./utils/routes";

class RouterProvider extends Component {
    render() {
        return (
            <BrowserRouter>
                {routes.map((route) => {
                    return (
                        <Route
                            path={routes.path}
                            component={routes.component}
                            exact={routes.exact}
                        />
                    )
                })}
            </BrowserRouter>
        )
    }
}

export default RouterProvider;