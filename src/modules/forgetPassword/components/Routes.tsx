import React from 'react'
import Forget from './Forget'

import { Route, Switch, useRouteMatch } from 'react-router-dom'

export default function Routes() {
  const { path } = useRouteMatch()
  return (
    <>
      <Switch>
        <Route path={`${path}`}>
          <Forget />
        </Route>
      </Switch>
    </>
  )
}
