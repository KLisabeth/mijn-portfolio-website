import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function AdminRoute({ component: Component, ...rest }) {
  const adminSignin = useSelector((state) => state.adminSignin);
  const { auth } = adminSignin;
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Component {...props}></Component>
        ) : (
          <Redirect  to="/" />
        )
      }
    ></Route>
  );
}