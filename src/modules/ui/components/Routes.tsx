import React from "react";
import SignupRoutes from "modules/signup/page";
import CourseRoutes from "modules/course/components/Routes";
import LoginRoutes from "modules/login/page";
import ResetRoutes from "modules/reset/page";
import HistoryRoutes from "modules/history/page";
import ForgetRoutes from "modules/forgetPassword/page";
import Edit from "modules/editProfile/page";
import FAQ from "modules/F&A/page";
import Page404 from "modules/404page/page/404";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Scroll from "./Scroll";
import PrivateRoute from "auth/PrivateRouter";
import PublicLoginRouter from "auth/PublicLoginRouter";

import { Toolbar } from "@material-ui/core";
import { useSelector } from "react-redux";

import Page500 from "modules/404page/page/500";
export default function Router() {
  const { path } = useRouteMatch();
  const { isErrorCourse } = useSelector((state: any) => state.course);

  const { isErrorProfile } = useSelector((state: any) => state.edit);

  return (
    <>
      <Scroll />
      <Switch>
        <Route path={`${path}/community/plugins/comments`}>
          <Redirect to={`${path}`} />
        </Route>
        <Route path={`${path}/500`}>
          <Page500 />
        </Route>
        {(isErrorProfile > 404 || isErrorCourse > 404) && (
          <Redirect to={`${path}/500`} />
        )}
        <Route path={`${path}/FAQ`}>
          <Toolbar />
          <FAQ />
        </Route>
        <Route path={`${path}/signup`}>
          <Toolbar />
          <SignupRoutes />
        </Route>

        <PrivateRoute path={`${path}/edit`} component={Edit} />
        <PrivateRoute path={`${path}/history`} component={HistoryRoutes} />
        <PrivateRoute path={`${path}/reset`} component={ResetRoutes} />
        <Route path={`${path}/signup`}>
          <Toolbar />
          <SignupRoutes />
        </Route>
        <PublicLoginRouter path={`${path}/login`} component={LoginRoutes} />

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
