import React from "react";
import SignupRoutes from "modules/signupPortal/components/index";
import CourseRoutes from "modules/coursePortal/components/Routes";
import LoginRoutes from "modules/loginPortal/components/index";
import ResetRoutes from "modules/resetPortal/components/index";
import HistoryRoutes from "modules/historyPortal/components/index";
import ForgetRoutes from "modules/forgetPassword/components/index";
import Edit from "modules/editProfile/components/index";
import FAQ from "modules/F&A/FAQ"
import Page404 from "modules/404page/component/404";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Scroll from "./Scroll";
import PrivateRoute from 'auth/PrivateRouter'
import PublicLoginRouter from 'auth/PublicLoginRouter'

import { Toolbar } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Page500 from "modules/404page/component/500";
export default function Router() {
  const { path } = useRouteMatch();
  const { isError, isErrorCourse } = useSelector((state: any) => state.course);

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
        {(!isError || isErrorProfile > 404 || isErrorCourse > 404) && <Redirect to={`${path}/500`} />}
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
