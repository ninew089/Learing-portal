import React from 'react'
import Signup from './Signup'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
export default function Routes() {
  const { path } = useRouteMatch()
  return (
    <>
      <Switch>
        <Route path={`${path}`}>
          <Signup />
        </Route>
      </Switch>
    </>
  )
}
