import React, { lazy } from "react";
import { RouteComponentProps, Route, Redirect } from "react-router";

const Login = lazy(() => import("./Login"));

export default function Public({ match }: RouteComponentProps) {
  return (
    <>
      <Redirect from={`${match.path}`} to={`${match.path}/login`} />
      <Route exact path={`${match.path}/login`} component={Login} />
    </>
  );
}
