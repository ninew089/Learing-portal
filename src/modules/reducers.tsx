import { combineReducers } from 'redux'
import ui from 'modules/ui/reducer'
import course from 'modules/coursePortal/reducer'
import login from 'modules/loginPortal/reducer'

export default combineReducers({
  ui,
  course,
  login,
})
