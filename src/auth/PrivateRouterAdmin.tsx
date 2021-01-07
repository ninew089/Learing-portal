import React from 'react';
import { Redirect } from "react-router-dom";
import { Route } from 'react-router-dom'
import { PrivateRouteProps } from './typescripts'
import { getCookie } from 'cookie/cookie'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { parseJwt } from "utils/getDataJWT"

export default function PrivateRoute({ component: Component, ...rest }: PrivateRouteProps) {


    const theme = createMuiTheme({
        typography: {
            fontFamily: ["Prompt", "sans-serif"].join(","),
        },
        palette: {
            primary: {
                main: "#142840",
                light: "#f5f5f5",
            },
            secondary: {
                main: "#f9b122",
            },
        },
        overrides: {
            MuiTab: {
                root: {
                    minWidth: 100,
                    "@media (min-width: 0px)": {
                        minWidth: 80,
                    },
                },
            },
        },
    });


    const token = getCookie('token');
    const authed = () => {
        if (token === null) {
            return false
        }
        if ((token !== "" || token !== undefined) && parseJwt(token).role === "platform") {
            return true
        }
        else {
            return false
        }
    }

    return (
        <Route
            {...rest}
            render={(props) => (authed() === true)
                ?
                <ThemeProvider theme={theme}>
                    <Component {...props} />
                </ThemeProvider>
                : <Redirect to={{ pathname: '/learning-portal/admin', state: { from: props.location } }} />}
        />
    )
}