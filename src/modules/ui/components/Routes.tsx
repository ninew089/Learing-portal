import React from "react";
import SignupRoutes from "modules/signupPortal/components/index";
import CourseRoutes from "modules/coursePortal/components/Routes";
import LoginRoutes from "modules/loginPortal/components/index";
import ResetRoutes from "modules/resetPortal/components/index";
import HistoryRoutes from "modules/historyPortal/components/index";
import ForgetRoutes from "modules/forgetPassword/components/index";
import Edit from "modules/editProfile/components/index";
import Page404 from "modules/404page/component/404";
import { Route, Switch } from "react-router-dom";
import Scroll from "./Scroll";
import PrivateRoute from 'auth/PrivateRouter'
import { Toolbar } from '@material-ui/core'
export default function Router() {
  return (
    <>
      <Scroll />
      <Switch>
        <Route path="/learning-portal/login">
          <Toolbar />
          <LoginRoutes />
        </Route>

        <PrivateRoute path='/learning-portal/edit' component={Edit} />
        <PrivateRoute path='/learning-portal/history' component={HistoryRoutes} />
        <PrivateRoute path='/learning-portal/reset' component={ResetRoutes} />
        <Route path="/learning-portal/signup">
          <Toolbar />
          <SignupRoutes />
        </Route>
        <Route path="/learning-portal/login">
          <Toolbar />
          <LoginRoutes />
        </Route>
        <Route path="/learning-portal/forget">
          <Toolbar />
          <ForgetRoutes />
        </Route>
        <Route path="/learning-portal/course">
          <Toolbar />
          <CourseRoutes></CourseRoutes>
        </Route>
        <Route path="/learning-portal">
          <CourseRoutes></CourseRoutes>
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
}
