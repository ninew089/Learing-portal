import axios from "axios";
import { push } from 'connected-react-router'
import { setCookie } from 'cookie/cookie'
const LOAD_LOGIN_REQUEST = "learning-portal/src/login/LOAD_LOGIN_REQUEST";
const LOAD_LOGIN_SUCCESS = "learning-portal/src/login/LOAD_LOGIN_SUCCESS";
const LOAD_LOGIN_FAILURE = "learning-portal/src/login/LOAD_LOGIN_FAILURE";
const CLEAR_MESSAGE_LOGIN = "learning-portal/src/login/CLEAR_MESSAGE_LOGIN";



function clearMessageLogin() {
  return {
    type: CLEAR_MESSAGE_LOGIN,
  }
}
function loadLogin(userInfo: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_LOGIN_REQUEST });
    try {
      const result = await axios.post(`/Tokens`, userInfo);
      dispatch({
        type: LOAD_LOGIN_SUCCESS,
        payload: {
          user: result.data,
          status: result.status,
          messageLogin: null
        },
      });


      setCookie('token', result.data.token, 3)

      dispatch(push('/learning-portal'))


    } catch (err) {
      if (err.response.status === 401) {
        dispatch({
          type: LOAD_LOGIN_FAILURE,
          payload: {
            status: err.response.status,
            messageLogin: `รหัสผ่านไม่ถูกต้อง`
          },
        });

      }
      if (err.response.status === 404) {
        dispatch({
          type: LOAD_LOGIN_FAILURE,
          payload: {
            status: err.response.status,
            messageLogin: `รหัสผู้ใช้ผิด`
          },
        });

      }
      if (err.response.status === 500) {
        dispatch({
          type: LOAD_LOGIN_FAILURE,
          payload: {
            status: err.response.status,
            messageLogin: `เกิดปัญหาทาง server ${err.response.status}`
          },
        });

      }

    }
  };
}



export {
  LOAD_LOGIN_REQUEST,
  LOAD_LOGIN_SUCCESS,
  LOAD_LOGIN_FAILURE,
  CLEAR_MESSAGE_LOGIN,
  loadLogin,
  clearMessageLogin

};
