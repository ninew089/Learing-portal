import React from "react";
import Course from ".";
import GroupCurriculum from "./Curriculum/GroupCurriculum";
import { Route, Switch } from "react-router-dom";
import GroupCourse from "./Course/GroupCourse";
import Page404 from "modules/404page/component/404";
import GroupAllCourse from "./Course/GroupAllCourse"

export default function Routes() {
  return (
    <>

      <Switch>


        <Route path={`/learning-portal/curriculum`}>
          <GroupCurriculum />
        </Route>
        <Route path="/learning-portal/courses">
          <GroupAllCourse />
        </Route>
        <Route path="/learning-portal/course">
          <GroupCourse />
        </Route>
        <Route exact path="/learning-portal">
          <Course />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
}
