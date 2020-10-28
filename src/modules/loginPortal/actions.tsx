import axios from 'axios'

const LOAD_LOGIN_REQUEST = 'learning-portal/src/ui/LOAD_LOGIN_REQUEST'
const LOAD_LOGIN_SUCCESS = 'learning-portal/src/ui/LOAD_LOGIN_SUCCESS'
const LOAD_LOGIN_FAILURE = 'learning-portal/src/ui/LOAD_LOGIN_REQUEST'
const LOGIN_CHECK = 'learning-portal/src/ui/LOGIN_CHECK'
const SET_LOGIN = 'learning-portal/src/ui/SET_LOGIN'

function loadLogin(user: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_LOGIN_REQUEST })
    try {
      const { data } = await axios.post(`/login/${user.id}`)
      dispatch({
        type: LOAD_LOGIN_SUCCESS,
        payload: {
          user: data,
        },
      })
    } catch (err) {
      dispatch({ type: LOAD_LOGIN_FAILURE })
    }
  }
}

function toggleLogin(event: any) {
  return {
    type: LOGIN_CHECK,
  }
}

function setLogin(login: any) {
  return {
    type: SET_LOGIN,
    payload: {
      login,
    },
  }
}

export {
  LOAD_LOGIN_REQUEST,
  LOAD_LOGIN_SUCCESS,
  LOAD_LOGIN_FAILURE,
  LOGIN_CHECK,
  SET_LOGIN,
  loadLogin,
  toggleLogin,
  setLogin,
}
