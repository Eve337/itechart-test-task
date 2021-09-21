import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes, RouteNames } from "../router/routes";

export default function AppRouter() {
  const { auth } = useTypedSelector((state) => state.auth);
  return auth ? (
    <>
      <Switch>
        {privateRoutes.map((el) => (
          <Route path={el.path} exact={el.exact} component={el.component} key={el.path} />
        ))}
        <Redirect to={RouteNames.Booking} />
      </Switch>
    </>
  ) : (
    <>
      <Switch>
        {publicRoutes.map((el) => (
          <Route path={el.path} exact={el.exact} component={el.component} key={el.path} />
        ))}
        <Redirect to={RouteNames.Login} />
      </Switch>
    </>
  );
}
