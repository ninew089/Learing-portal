import {
  LOAD_LOGIN_REQUEST,
  LOAD_LOGIN_SUCCESS,
  LOAD_LOGIN_FAILURE,
  LOGIN_CHECK,
  SET_LOGIN,
} from './actions'
const initialState = {
  isLoading: false,
  users: [],
  Login: false,
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case LOAD_LOGIN_REQUEST:
      return { ...state, isLoading: true, users: [], Login: false }
    case LOAD_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload.user,
        Login: true,
      }
    case LOAD_LOGIN_FAILURE:
      return { ...state, isLoading: false, Login: false }
    case LOGIN_CHECK:
      return { ...state, Login: true }
    case SET_LOGIN:
      return { ...state, Login: action.payload.login }
    default:
      return state
  }
}
