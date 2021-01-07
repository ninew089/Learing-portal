import axios from "axios";
import { getCookie } from 'cookie/cookie'
import * as infoactions from "modules/infomation/actions"

const LOAD_PUT_REQUEST = "learning-portal/src/ui/LOAD_PUT_REQUEST";
const LOAD_PUT_SUCCESS = "learning-portal/src/ui/LOAD_PUT_SUCCESS";
const LOAD_PUT_FAILURE = "learning-portal/src/ui/LOAD_PUT_REQUEST";

function loadPUT(updateInfo: any) {
    return async (dispatch: any) => {
        dispatch({ type: LOAD_PUT_REQUEST });
        try {
            const id = getCookie('id')
            const token = getCookie('token')
            const data = await axios.put(`/Users/${id}/Password`, updateInfo, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch({
                type: LOAD_PUT_SUCCESS,
                payload: {
                    message: "แก้ไขรหัสผ่านเรียบร้อยเเล้ว",
                    data: data.data,
                    status: data.status
                },
            });
            const action = infoactions.loadMessage("แก้ไขรหัสผ่านเรียบร้อยเเล้ว", "success")
            dispatch(action)
        } catch (err) {
            dispatch({
                type: LOAD_PUT_FAILURE,
                payload: {
                    message: "เกิดข้อผิดพลาด",
                    staus: err.response.status
                },
            });
            if (err.response.status === 401) {
                const action = infoactions.loadMessage("รหัสผ่านเดิมไม่ถูกต้อง", "error")
                dispatch(action)
            }
            else {

                const action = infoactions.loadMessage(`เกิดข้อผิดพลาดในการแก้ไขรหัสผ่าน ${err.response.status}`, "error")
                dispatch(action)

            }


        }
    };
}

export {
    LOAD_PUT_REQUEST,
    LOAD_PUT_SUCCESS,
    LOAD_PUT_FAILURE,
    loadPUT,
};
