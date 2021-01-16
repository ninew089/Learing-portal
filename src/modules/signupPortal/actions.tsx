import axios from "axios";
import * as infoactions from "modules/infomation/actions"
const LOAD_SIGNUP_REQUEST = "learning-portal/src/ui/LOAD_SIGNUP_REQUEST";
const LOAD_SIGNUP_SUCCESS = "learning-portal/src/ui/LOAD_SIGNUP_SUCCESS";
const LOAD_SIGNUP_FAILURE = "learning-portal/src/ui/LOAD_SIGNUP_FAILURE";

function loadSignUp(signUpInfo: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_SIGNUP_REQUEST });
    try {
      const data = await axios.post(`/Users`, signUpInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const action = infoactions.loadMessage("ท่านสมัครเรียบร้อยเเล้ว", "success")
      dispatch(action)

      dispatch({
        type: LOAD_SIGNUP_SUCCESS,
        payload: {
          message: "ท่านสมัครเรียบร้อยเเล้ว",
          data: data.data
        },
      });
    } catch (err) {

      const action = infoactions.loadMessage(`เกิดข้อผิดพลาดในการสมัคร ${err.response.status}`, "error")
      dispatch(action)
      dispatch({
        type: LOAD_SIGNUP_FAILURE,
        payload: {
          message: "เกิดข้อผิดพลาด",
          data: err
        },
      });
    }
  };
}

export {
  LOAD_SIGNUP_REQUEST,
  LOAD_SIGNUP_SUCCESS,
  LOAD_SIGNUP_FAILURE,
  loadSignUp,
};
