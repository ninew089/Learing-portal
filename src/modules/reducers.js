import { combineReducers } from 'redux'

import course from 'modules/coursePortal/reducer'

export default () =>
  combineReducers({
    course,
  })
