import React from "react";
import Course from "../page";
import GroupCurriculum from "../page/GroupCurriculum/GroupCurriculum";
import { Route, Switch } from "react-router-dom";
import GroupCourse from "../page/GroupCourse/GroupCourse";
import Page404 from "modules/404page/page/404";
import GroupAllCourse from "../page/GroupAllCourse/GroupAllCourse";
import Search from "../page/Search";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path={`/learning-portal/search`}>
          <Search />
        </Route>
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
