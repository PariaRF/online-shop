import React, { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import checkAuth from "../auth-mock/checkAuth";
import routes from "./utils/routes";

const token = checkAuth(true);

const RouterProvider =()=> {

    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() =>{
        setTimeout(() => {
            if (token) {
               setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }

        }, 100);
    },[])
   

    const handleRouteEnter = (route, props) => {
        if (isAuthenticated) {
            return <route.component routeProps={props} />;
        } else {
            return <Redirect to="/401" />;
        }

    }

        if (isAuthenticated === null) {
            return <p>Please Wait...</p>
        }
        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route path={route.path} exact={route.exact} key={index}>
                                {(props) => {
                                    return route.needAuth
                                        ?
                                        (handleRouteEnter(route , props))
                                        :
                                        (<route.component routeProps={props}/>)
                                }
                                }
                            </Route>
                        )
                    })}
                </Switch>
            </BrowserRouter>
        )
}

export default RouterProvider;