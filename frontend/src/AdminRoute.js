import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function AdminRoute({ component: Component, ...rest }) {
 
  const adminSignin = useSelector((state) => state.adminSignin);
  const { auth } = adminSignin;
  return (
    <Route
    {...rest}
    render={(props) =>
      auth && auth.isAdmin === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={"/" }
        />
      )
    }
  />
);
};