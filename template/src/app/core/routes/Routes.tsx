import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LoadingComponent from "../../modules/shared/components/LoadingComponent";

const Public = lazy(() => import("../../modules/public"));
const Private = lazy(() => import("../../modules/private"));

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<LoadingComponent />}>
        <Switch>
          <Redirect exact from="/" to="/public" />
          <Route path="/public" component={Public} />
          <Route path="/private" component={Private} />
        </Switch>
      </Suspense>
    </Router>
  );
}
