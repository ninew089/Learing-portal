import React from 'react'
import SignupRoutes from 'modules/signupPortal/components/Signup'
import CourseRoutes from 'modules/coursePortal/components/Routes'
import LoginRoutes from 'modules/loginPortal/components/Login'
import ResetRoutes from 'modules/resetPortal/components/Reset'
import HistoryRoutes from 'modules/historyPortal/components/History'
import ForgetRoutes from 'modules/forgetPassword/components/Forget'
import Edit from 'modules/editProfile/components/editProfile'
import Page404 from 'modules/404page/component/404'
import { Route, Switch } from 'react-router-dom'
import Scroll from './Scroll'
import createHistory from 'history/createBrowserHistory'
//@ts-ignore

export const history = createHistory()

export default function componentName() {
  //check user cookie have return true
  const login = true
  return (
    <>
      <Scroll />
      <Switch>
        <Route path="/learning-portal/login">
          <LoginRoutes />
        </Route>
        <Route path="/learning-portal/course">
          <CourseRoutes></CourseRoutes>
        </Route>

        <Route
          render={() =>
            login ? (
              <div>
                <Switch>
                  <Route path="/learning-portal/edit">
                    <Edit />
                  </Route>
                  <Route path="/learning-portal/forget">
                    <ForgetRoutes />
                  </Route>
                  <Route path="/learning-portal/signup">
                    <SignupRoutes />
                  </Route>
                  <Route path="/learning-portal/history">
                    <HistoryRoutes />
                  </Route>
                  <Route path="/learning-portal/reset">
                    <ResetRoutes />
                  </Route>
                  <Route path="/learning-portal/login">
                    <LoginRoutes />
                  </Route>
                  <Route path="/learning-portal/course">
                    <CourseRoutes></CourseRoutes>
                  </Route>
                  <Route path="/learning-portal">
                    <CourseRoutes></CourseRoutes>
                  </Route>
                  <Route path="*">
                    <Page404 />
                  </Route>
                </Switch>
              </div>
            ) : (
              <div>
                <Switch>
                  <Route path="/learning-portal/edit">
                    <CourseRoutes></CourseRoutes>
                  </Route>
                  <Route path="/learning-portal/forget">
                    <CourseRoutes></CourseRoutes>
                  </Route>

                  <Route path="/learning-portal/signup">
                    <CourseRoutes></CourseRoutes>
                  </Route>
                  <Route path="/learning-portal/history">
                    <CourseRoutes></CourseRoutes>
                  </Route>
                  <Route path="/learning-portal/reset">
                    <CourseRoutes></CourseRoutes>
                  </Route>
                </Switch>
              </div>
            )
          }
        />
        <Route path="/learning-portal">
          <CourseRoutes></CourseRoutes>
        </Route>
      </Switch>
    </>
  )
}
