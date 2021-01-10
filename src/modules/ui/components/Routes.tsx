import React from "react";
import SignupRoutes from "modules/signupPortal/components/index";
import CourseRoutes from "modules/coursePortal/components/Routes";
import LoginRoutes from "modules/loginPortal/components/index";
import ResetRoutes from "modules/resetPortal/components/index";
import HistoryRoutes from "modules/historyPortal/components/index";
import ForgetRoutes from "modules/forgetPassword/components/index";
import Edit from "modules/editProfile/components/index";
import FAQ from "modules/Q&A/FAQ"
import Page404 from "modules/404page/component/404";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Scroll from "./Scroll";
import PrivateRoute from 'auth/PrivateRouter'
import { Toolbar } from '@material-ui/core'
export default function Router() {
  const { path } = useRouteMatch();

  return (
    <>
      <Scroll />
      <Switch>
        <Route path={`${path}/login`}>
          <Toolbar />
          <LoginRoutes />
        </Route>
        <Route path={`${path}/FAQ`}>
          <Toolbar />
          <FAQ />
        </Route>
        <PrivateRoute path={`${path}/edit`} component={Edit} />
        <PrivateRoute path={`${path}/history`} component={HistoryRoutes} />
        <PrivateRoute path={`${path}/reset`} component={ResetRoutes} />
        <Route path={`${path}/signup`}>
          <Toolbar />
          <SignupRoutes />
        </Route>
        <Route path={`${path}/login`}>
          <Toolbar />
          <LoginRoutes />
        </Route>
        <Route path={`${path}/forget`}>
          <Toolbar />
          <ForgetRoutes />
        </Route>
        <Route path={`${path}/course`}>
          <Toolbar />
          <CourseRoutes></CourseRoutes>
        </Route>
        <Route path={`${path}`}>
          <CourseRoutes></CourseRoutes>
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
}
