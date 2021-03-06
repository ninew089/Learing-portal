import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { PrivateRouteProps } from "./typescripts";
import { getCookie } from "cookie/cookie";
import { parseJwt } from "utils/getDataJWT";
export default function PrivateRoute({
  component: Component,
  ...rest
}: PrivateRouteProps) {
  return (
    <Route
      {...rest}
      render={(props) =>
        parseJwt(getCookie("token")).role === "user" ? (
          <Redirect to={{ pathname: "/learning-portal" }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
