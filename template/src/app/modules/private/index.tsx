import React, { lazy } from "react";
import { RouteComponentProps, Route } from "react-router";
import Header from "../shared/components/Header";

const Apontamentos = lazy(() => import("./Apontamentos"));

export default function Private({ match }: RouteComponentProps) {
  return (
    <>
      <Header />
      <Route
        exact
        path={`${match.path}/apontamentos`}
        component={Apontamentos}
      />
    </>
  );
}
