import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PublicRoute({
  component: Component,
  isLogin,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        Boolean(localStorage.getItem('token')) === false ? (
          <Component {...props} {...rest}/>
        ) : (
          <Redirect to="/user/edit" />
        )
      }
    />
  );
}