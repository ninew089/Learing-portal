import React from 'react'
import Law from './Main'
import Curriculum from './TableCurriculum/Curriculum'
import SubCurriculum from './TableSubCurriculum/SubCurriculum'
import Course from './TableCourse/Course'
import Progress from './TableProgress/Progress'
import Person from './Person'
import Reset from './Reset'
import { Route, Switch } from 'react-router-dom'
import CourseCertificate from './TableCertificate/CourseCertificate'
export default function componentName() {
  return (
    <Switch>
      <Route exact path="/learning-portal/admins/main/reset">
        <Reset></Reset>
      </Route>
      <Route exact path="/learning-portal/admins/main/person">
        <Person></Person>
      </Route>
      <Route exact path="/learning-portal/admins/main/progress">
        <Progress></Progress>
      </Route>
      <Route exact path="/learning-portal/admins/main/curriculm">
        <Curriculum></Curriculum>
      </Route>
      <Route exact path="/learning-portal/admins/main/subcurriculum">
        <SubCurriculum></SubCurriculum>
      </Route>
      <Route exact path="/learning-portal/admins/main/course">
        <Course></Course>
      </Route>
      <Route exact path="/learning-portal/admins/main">
        <Law />
      </Route>

      <Route exact path="/learning-portal/admins/main/coursecertificate">
        <CourseCertificate></CourseCertificate>
      </Route>
    </Switch>
  )
}
