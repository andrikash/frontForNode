import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({
  component: Component,
  isLogin,
  payload,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        Boolean(localStorage.getItem('token')) === true ? (
          <Component {...props} {...rest} payload={payload}/>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}