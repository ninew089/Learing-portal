import React from 'react'
import Course from './Course'

import { Route, Switch } from 'react-router-dom'
import Page404 from 'modules/404page/component/404'
import GroupCourse from './GroupCourse'

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path={`/learning-portal/course/:id`}>
          <GroupCourse />
        </Route>
        <Route path="/learning-portal/course">
          <Course />
        </Route>
        <Route exact path="/learning-portal">
          <Course />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  )
}
