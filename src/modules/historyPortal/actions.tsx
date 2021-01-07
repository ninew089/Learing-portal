import axios from "axios";
import { getCookie } from "cookie/cookie"
const LOAD_COURSECERTIFICATE_REQUEST = "learning-portal/src/ui/LOAD_COURSECERTIFICATE_REQUEST";
const LOAD_COURSECERTIFICATE_SUCCESS = "learning-portal/src/ui/LOAD_COURSECERTIFICATE_SUCCESS";
const LOAD_COURSECERTIFICATE_FAILURE = "learning-portal/src/ui/LOAD_COURSECERTIFICATE_REQUEST";

const LOAD_CURRICULUMCERTIFICATES_REQUEST = "learning-portal/src/ui/LOAD_CURRICULUMCERTIFICATES_REQUEST";
const LOAD_CURRICULUMCERTIFICATES_SUCCESS = "learning-portal/src/ui/LOAD_CURRICULUMCERTIFICATES_SUCCESS";
const LOAD_CURRICULUMCERTIFICATES_FAILURE = "learning-portal/src/ui/LOAD_CURRICULUMCERTIFICATES_REQUEST";

const LOAD_SUBCOURSECERTIFICATE_REQUEST = "learning-portal/src/ui/LOAD_SUBCOURSECERTIFICATE_REQUEST";
const LOAD_SUBCOURSECERTIFICATE_SUCCESS = "learning-portal/src/ui/LOAD_SUBCOURSECERTIFICATE_SUCCESS";
const LOAD_SUBCOURSECERTIFICATE_FAILURE = "learning-portal/src/ui/LOAD_SUBCOURSECERTIFICATE_REQUEST";

const LOAD_SUBCURRICULUMCERTIFICATES_REQUEST = "learning-portal/src/ui/LOAD_SUBCURRICULUMCERTIFICATES_REQUEST";
const LOAD_SUBCURRICULUMCERTIFICATES_SUCCESS = "learning-portal/src/ui/LOAD_SUBCURRICULUMCERTIFICATES_SUCCESS";
const LOAD_SUBCURRICULUMCERTIFICATES_FAILURE = "learning-portal/src/ui/LOAD_SUBCURRICULUMCERTIFICATES_REQUEST";
function loadSubCurriculumCertificates(cid: number) {
    return async (dispatch: any) => {

        dispatch({ type: LOAD_SUBCURRICULUMCERTIFICATES_REQUEST });
        try {
            const id = getCookie('id')
            const data = await axios.get(`/Users/${id}/CurriculumCertificates/${cid}`)
            dispatch({
                type: LOAD_SUBCURRICULUMCERTIFICATES_SUCCESS,
                payload: {
                    message: "ท่านสมัครเรียบร้อยเเล้ว",
                    subcurriculumcertificate: data.data,
                    status: data.status
                },
            });
        } catch (err) {
            dispatch({
                type: LOAD_SUBCURRICULUMCERTIFICATES_FAILURE,
                payload: {
                    message: "เกิดข้อผิดพลาด",
                    staus: err.response.status
                },
            });
        }
    };
}

function loadSubCourseCertificates(cid: number) {
    return async (dispatch: any) => {

        dispatch({ type: LOAD_SUBCOURSECERTIFICATE_REQUEST });
        try {
            const id = getCookie('id')
            const data = await axios.get(`/Users/${id}/CourseCertificates/${cid}`);
            dispatch({
                type: LOAD_SUBCOURSECERTIFICATE_SUCCESS,
                payload: {
                    message: "สำเร็จ",
                    subcoursecertificate: data.data,
                    status: data.status
                },
            });
        } catch (err) {
            dispatch({
                type: LOAD_SUBCOURSECERTIFICATE_FAILURE,
                payload: {
                    message: "เกิดข้อผิดพลาด",
                    staus: err.response.status
                },
            });
        }
    };
}
function loadCurriculumCertificates() {
    return async (dispatch: any) => {

        dispatch({ type: LOAD_CURRICULUMCERTIFICATES_REQUEST });
        try {
            const id = getCookie('id')
            const data = await axios.get(`/Users/${id}/CurriculumCertificates`)
            dispatch({
                type: LOAD_CURRICULUMCERTIFICATES_SUCCESS,
                payload: {
                    message: "ท่านสมัครเรียบร้อยเเล้ว",
                    curriculumcertificate: data.data,
                    status: data.status
                },
            });
        } catch (err) {
            dispatch({
                type: LOAD_CURRICULUMCERTIFICATES_FAILURE,
                payload: {
                    message: "เกิดข้อผิดพลาด",
                    staus: err.response.status
                },
            });
        }
    };
}

function loadCourseCertificates() {
    return async (dispatch: any) => {

        dispatch({ type: LOAD_COURSECERTIFICATE_REQUEST });
        try {
            const id = getCookie('id')
            const data = await axios.get(`/Users/${id}/CourseCertificates`);
            dispatch({
                type: LOAD_COURSECERTIFICATE_SUCCESS,
                payload: {
                    message: "สำเร็จ",
                    coursecertificate: data.data,
                    status: data.status
                },
            });
        } catch (err) {
            dispatch({
                type: LOAD_COURSECERTIFICATE_FAILURE,
                payload: {
                    message: "เกิดข้อผิดพลาด",
                    staus: err.response.status
                },
            });
        }
    };
}

export {
    LOAD_COURSECERTIFICATE_REQUEST,
    LOAD_COURSECERTIFICATE_SUCCESS,
    LOAD_COURSECERTIFICATE_FAILURE,
    LOAD_CURRICULUMCERTIFICATES_REQUEST,
    LOAD_CURRICULUMCERTIFICATES_SUCCESS,
    LOAD_CURRICULUMCERTIFICATES_FAILURE,
    LOAD_SUBCOURSECERTIFICATE_REQUEST,
    LOAD_SUBCOURSECERTIFICATE_SUCCESS,
    LOAD_SUBCOURSECERTIFICATE_FAILURE,
    LOAD_SUBCURRICULUMCERTIFICATES_REQUEST,
    LOAD_SUBCURRICULUMCERTIFICATES_SUCCESS,
    LOAD_SUBCURRICULUMCERTIFICATES_FAILURE,
    loadCourseCertificates,
    loadCurriculumCertificates,
    loadSubCourseCertificates,
    loadSubCurriculumCertificates,
};