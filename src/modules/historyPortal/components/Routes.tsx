import React from 'react'
import History from './index'

import { Route, Switch, useRouteMatch } from 'react-router-dom'

export default function Routes() {
  const { path } = useRouteMatch()
  return (
    <>
      <Switch>
        <Route path={`${path}`}>
          <History />
        </Route>
      </Switch>
    </>
  )
}
