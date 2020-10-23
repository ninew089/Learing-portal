import React from 'react'
import Reset from './Reset'

import { Route, Switch, useRouteMatch } from 'react-router-dom'

export default function Routes() {
  const { path } = useRouteMatch()
  return (
    <>
      <Switch>
        <Route path={`${path}`}>
          <Reset />
        </Route>
      </Switch>
    </>
  )
}
