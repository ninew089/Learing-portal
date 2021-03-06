import React from "react";
import Law from "../components/Main/Main";
import Curriculum from "../components/TableCurriculum/page/index";
import SubCurriculum from "../components/TableSubCurriculum/page/index";
import Course from "../components/TableCourse/page/index";
import Progress from "../components/TableProgress/page/index";
import Person from "../components/Person/index";
import Reset from "../components/Reset/page/Reset";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CourseCertificate from "../components/TableCertificate/page";

export default function RouteAdmin() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/reset`} component={Reset} />
      <Route exact path={`${path}/person`} component={Person} />
      <Route path={`${path}/progress`} component={Progress} />
      <Route exact path={`${path}/curriculm`} component={Curriculum} />
      <Route exact path={`${path}/subcurriculum`} component={SubCurriculum} />
      <Route exact path={`${path}/course`} component={Course} />
      <Route path={`${path}/coursecertificate`} component={CourseCertificate} />
      <Route exact path={`${path}`} component={Law} />
    </Switch>
  );
}
