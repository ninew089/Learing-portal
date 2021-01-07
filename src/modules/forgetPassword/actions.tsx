import axios from "axios";
import * as infoactions from "modules/infomation/actions"

const LOAD_FORGOT_REQUEST = "learning-portal/src/ui/LOAD_FORGOT_REQUEST";
const LOAD_FORGOT_SUCCESS = "learning-portal/src/ui/LOAD_FORGOT_SUCCESS";
const LOAD_FORGOT_FAILURE = "learning-portal/src/ui/LOAD_FORGOT_REQUEST";

function loadFORGOT(updateInfo: any, id: string) {
    return async (dispatch: any) => {
        dispatch({ type: LOAD_FORGOT_REQUEST });
        try {
            const data = await axios.put(`/Users/${id}/ForgetPassword`, updateInfo, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const action = infoactions.loadMessage(`ได้ทำการส่งรหัสผ่านใหม่ทาง ${updateInfo.email} เรียบร้อยเเล้ว`, "success")
            dispatch(action)
            dispatch({
                type: LOAD_FORGOT_SUCCESS,
                payload: {
                    message: `ได้ทำการส่งรหัสผ่านใหม่ทาง ${updateInfo.email} เรียบร้อยเเล้ว`,
                    data: data.data,
                    status: data.status
                },
            });
        } catch (err) {
            dispatch({
                type: LOAD_FORGOT_FAILURE,
                payload: {
                    message: "เกิดข้อผิดพลาด",
                    staus: err.response.status
                },
            });
            if (err.response.status === 404) {
                const action = infoactions.loadMessage(`ไม่พบเลขบัตรประชาชน`, "error")
                dispatch(action)
            }
            else {
                const action = infoactions.loadMessage(`เกิดข้อผิดพลาด ${err.response.status} เรียบร้อยเเล้ว`, "error")
                dispatch(action)
            }

        }
    };
}

export {
    LOAD_FORGOT_REQUEST,
    LOAD_FORGOT_SUCCESS,
    LOAD_FORGOT_FAILURE,
    loadFORGOT,
};