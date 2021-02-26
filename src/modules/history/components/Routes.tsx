import React from "react";
import Certificate from "../page";

import { Route, Switch, useRouteMatch } from "react-router-dom";

export default function Routes() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}`}>
          <Certificate />
        </Route>
      </Switch>
    </>
  );
}
