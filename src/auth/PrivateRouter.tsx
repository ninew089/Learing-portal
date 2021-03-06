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
  const token = getCookie("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        parseJwt(token).role === "user" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/learning-portal",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
