import React from "react";
import SignupRoutes from "modules/signup/page";

import LoginRoutes from "modules/login/page";
import ResetRoutes from "modules/reset/page";
import HistoryRoutes from "modules/history/page";
import ForgetRoutes from "modules/forgetPassword/page";
import Edit from "modules/editProfile/page";
import FAQ from "modules/F&A/page";
import Page404 from "modules/404page/page/404";
import { Redirect, Route, Switch } from "react-router-dom";
import Scroll from "./Scroll";
import PrivateRoute from "auth/PrivateRouter";
import PublicLoginRouter from "auth/PublicLoginRouter";
import { Toolbar } from "@material-ui/core";
import Course from "modules/course/page";
import GroupCurriculum from "modules/course/page/GroupCurriculum/GroupCurriculum";
import GroupCourse from "modules/course/page/GroupCourse/GroupCourse";

import GroupAllCourse from "modules/course/page/GroupAllCourse/GroupAllCourse";
import Search from "modules/course/page/Search";
export default function Router() {
  return (
    <React.Fragment>
      <Toolbar />
      <Scroll />
      <Switch>
        <Redirect
          exact
          from={`/learning-portal/community/plugins/comments`}
          to={`/learning-portal`}
        />
        <Route exact path={`/learning-portal/FAQ`} component={FAQ} />
        <PrivateRoute exact path={`/learning-portal/edit`} component={Edit} />
        <PrivateRoute
          exact
          path={`/learning-portal/history`}
          component={HistoryRoutes}
        />
        <PrivateRoute
          exact
          path={`/learning-portal/reset`}
          component={ResetRoutes}
        />
        <Route
          exact
          path={`/learning-portal/signup`}
          component={SignupRoutes}
        />
        <PublicLoginRouter
          exact
          path={`/learning-portal/login`}
          component={LoginRoutes}
        />
        <Route
          exact
          path={`/learning-portal/forget`}
          component={ForgetRoutes}
        />
        <Route exact path={`/learning-portal/search`} component={Search} />
        <Route
          exact
          path={`/learning-portal/curriculum`}
          component={GroupCurriculum}
        />
        <Route
          exact
          path={"/learning-portal/courses"}
          component={GroupAllCourse}
        />
        <Route exact path="/learning-portal/course" component={GroupCourse} />
        <Route exact path="/learning-portal" component={Course} />
        <Route exact path="*" component={Page404} />
      </Switch>
    </React.Fragment>
  );
}
