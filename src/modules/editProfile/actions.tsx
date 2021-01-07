import axios from "axios";
import { getCookie } from 'cookie/cookie'
import * as infoactions from "modules/infomation/actions"

const LOAD_EDIT_REQUEST = "learning-portal/src/ui/LOAD_EDIT_REQUEST";
const LOAD_EDIT_SUCCESS = "learning-portal/src/ui/LOAD_EDIT_SUCCESS";
const LOAD_EDIT_FAILURE = "learning-portal/src/ui/LOAD_EDIT_FAILURE";
const LOAD_PROFILE_REQUEST = "learning-portal/src/ui/LOAD_PROFILE_REQUEST";
const LOAD_PROFILE_SUCCESS = "learning-portal/src/ui/LOAD_PROFILE_SUCCESS";
const LOAD_PROFILE_FAILURE = "learning-portal/src/ui/LOAD_EDIT_FAILURE";
function loadGetProfile() {
    return async (dispatch: any) => {
        dispatch({ type: LOAD_PROFILE_REQUEST });
        try {
            const id = getCookie('id')
            const token = getCookie('token')
            const data = await axios.get(`/Users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch({
                type: LOAD_PROFILE_SUCCESS,
                payload: {
                    message: "ท่านสมัครเรียบร้อยเเล้ว",
                    data: data.data,
                    status: data.status
                },
            });
        } catch (err) {

            dispatch({
                type: LOAD_PROFILE_FAILURE,
                payload: {
                    message: "เกิดข้อผิดพลาด",
                    staus: err
                },
            });
        }
    };
}

function loadEdit(updateInfo: any) {
    return async (dispatch: any) => {
        dispatch({ type: LOAD_EDIT_REQUEST });
        try {
            const id = getCookie('id')
            const token = getCookie('token')
            const data = await axios.put(`/Users/${id}`, updateInfo, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const action = infoactions.loadMessage("แก้ไขข้อมูลเรียบร้อยเเล้ว", "success")
            dispatch(action)
            dispatch({
                type: LOAD_EDIT_SUCCESS,
                payload: {
                    message: "ท่านสมัครเรียบร้อยเเล้ว",
                    edit: data.data,
                    status: data.status
                },
            });
        } catch (err) {
            dispatch({
                type: LOAD_EDIT_FAILURE,
                payload: {
                    message: "เกิดข้อผิดพลาด",
                    staus: err.response.status
                },
            });
            const action = infoactions.loadMessage("เกิดข้อผิดพลาดในการแก้ไขข้อมูล", "error")
            dispatch(action)
        }
    };
}

export {
    LOAD_EDIT_REQUEST,
    LOAD_EDIT_SUCCESS,
    LOAD_EDIT_FAILURE,
    LOAD_PROFILE_REQUEST,
    LOAD_PROFILE_SUCCESS,
    LOAD_PROFILE_FAILURE,
    loadEdit,
    loadGetProfile
};
