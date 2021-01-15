import React from 'react';
import { Redirect } from "react-router-dom";
import { Route } from 'react-router-dom'
import { PrivateRouteProps } from './typescripts'
import { getCookie } from 'cookie/cookie'
import { parseJwt } from "utils/getDataJWT"
export default function PrivateRoute({ component: Component, ...rest }: PrivateRouteProps) {

    const token = getCookie('token');

    const authed = () => {
        if (token === null) {
            return false
        }
        if ((token !== "" || token !== undefined) && parseJwt(token).role === "user") {
            return true
        }
        else {
            return false
        }
    }
    console.log(authed())
    return (
        <Route
            {...rest}

            render={(props) => (authed() === true)
                ? <Redirect to={{ pathname: '/learning-portal' }} />
                : <Component {...props} />
            }
        />
    )
}