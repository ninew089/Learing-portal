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
import { Redirect, Route, Switch } from "react-router-dom";
import Scroll from "./Scroll";
import PrivateRoute from "auth/PrivateRouter";
import PublicLoginRouter from "auth/PublicLoginRouter";
import { Toolbar } from "@material-ui/core";
import { useSelector } from "react-redux";
import Page500 from "modules/404page/page/500";
export default function Router() {
  const { isErrorCourse } = useSelector((state: any) => state.course);
  const { isErrorProfile } = useSelector((state: any) => state.edit);

  return (
    <React.Fragment>
      <Scroll />
      <Switch>
        <Route path={`/learning-portal/community/plugins/comments`}>
          <Redirect to={`/learning-portal`} />
        </Route>
        <Route path={`/learning-portal/500`}>
          <Page500 />
        </Route>
        {(isErrorProfile > 404 || isErrorCourse > 404) && (
          <Redirect to={`/learning-portal/500`} />
        )}
        <Route path={`/learning-portal/FAQ`}>
          <Toolbar />
          <FAQ />
        </Route>
        <Route path={`/learning-portal/signup`}>
          <Toolbar />
          <SignupRoutes />
        </Route>

        <PrivateRoute path={`/learning-portal/edit`} component={Edit} />
        <PrivateRoute
          path={`/learning-portal/history`}
          component={HistoryRoutes}
        />
        <PrivateRoute path={`/learning-portal/reset`} component={ResetRoutes} />
        <Route path={`/learning-portal/signup`}>
          <Toolbar />
          <SignupRoutes />
        </Route>
        <PublicLoginRouter
          path={`/learning-portal/login`}
          component={LoginRoutes}
        />

        <Route path={`/learning-portal/forget`}>
          <Toolbar />
          <ForgetRoutes />
        </Route>
        <Route path={`/learning-portal/course`}>
          <Toolbar />
          <CourseRoutes></CourseRoutes>
        </Route>
        <Route path={`/learning-portal`}>
          <Toolbar />
          <CourseRoutes />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
