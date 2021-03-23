import axios from "axios";
import { push } from "connected-react-router";
import { getCookie, setCookie } from "cookie/cookie";
import { parseJwt } from "utils/getDataJWT";

const LOAD_CURRICULUMPLATFORM_REQUEST =
  "learning-portal/src/platform/LOAD_CURRICULUMPLATFORM_REQUEST";
const LOAD_CURRICULUMPLATFORM_SUCCESS =
  "learning-portal/src/platform/LOAD_CURRICULUMPLATFORM_SUCCESS";
const LOAD_CURRICULUMPLATFORM_FAILURE =
  "learning-portal/src/platform/LOAD_CURRICULUMPLATFORM_FAILURE";

const LOAD_COURSEPLATFORM_REQUEST =
  "learning-portal/src/platform/LOAD_COURSEPLATFORM_REQUEST";
const LOAD_COURSEPLATFORM_SUCCESS =
  "learning-portal/src/platform/LOAD_COURSEPLATFORM_SUCCESS";
const LOAD_COURSEPLATFORM_FAILURE =
  "learning-portal/src/platform/LOAD_COURSEPLATFORM_FAILURE";

const LOAD_PROFILE_REQUEST =
  "learning-portal/src/platform/LOAD_PROFILE_REQUEST";
const LOAD_PROFILE_SUCCESS =
  "learning-portal/src/platform/LOAD_PROFILE_SUCCESS";
const LOAD_PROFILE_FAILURE =
  "learning-portal/src/platform/LOAD_PROFILE_FAILURE";

const LOAD_LOGIN_REQUEST = "learning-portal/src/platform/LOAD_LOGIN_REQUEST";
const LOAD_LOGIN_SUCCESS = "learning-portal/src/platform/LOAD_LOGIN_SUCCESS";
const LOAD_LOGIN_FAILURE = "learning-portal/src/platform/LOAD_LOGIN_FAILURE";

const LOAD_PASSWORD_REQUEST =
  "learning-portal/src/platform/LOAD_PASSWORD_REQUEST";
const LOAD_PASSWORD_SUCCESS =
  "learning-portal/src/platform/LOAD_PASSWORD_SUCCESS";
const LOAD_PASSWORD_FAILURE =
  "learning-portal/src/platform/LOAD_PASSWORD_FAILURE";

const LOAD_COURSEEDIT_REQUEST =
  "learning-portal/src/platform/LOAD_COURSEEDIT_REQUEST";
const LOAD_COURSEEDIT_SUCCESS =
  "learning-portal/src/platform/LOAD_COURSEEDIT_SUCCESS";
const LOAD_COURSEEDIT_FAILURE =
  "learning-portal/src/platform/LOAD_COURSEEDIT_FAILURE";

const LOAD_COURSEADD_REQUEST =
  "learning-portal/src/platform/LOAD_COURSEADD_REQUEST";
const LOAD_COURSEADD_SUCCESS =
  "learning-portal/src/platform/LOAD_COURSEADD_SUCCESS";
const LOAD_COURSEADD_FAILURE =
  "learning-portal/src/platform/LOAD_COURSEADD_FAILURE";

const LOAD_CURRICULUMEDIT_REQUEST =
  "learning-portal/src/platform/LOAD_CURRICULUMEDIT_REQUEST";
const LOAD_CURRICULUMEDIT_SUCCESS =
  "learning-portal/src/platform/LOAD_CURRICULUMEDIT_SUCCESS";
const LOAD_CURRICULUMEDIT_FAILURE =
  "learning-portal/src/platform/LOAD_CURRICULUMEDIT_FAILURE";

const LOAD_CURRICULUMADD_REQUEST =
  "learning-portal/src/platform/LOAD_CURRICULUMADD_REQUEST";
const LOAD_CURRICULUMADD_SUCCESS =
  "learning-portal/src/platform/LOAD_CURRICULUMADD_SUCCESS";
const LOAD_CURRICULUMADD_FAILURE =
  "learning-portal/src/platform/LOAD_CURRICULUMADD_FAILURE";

const LOAD_SUBCURRICULUMEDIT_REQUEST =
  "learning-portal/src/platform/LOAD_SUBCURRICULUMEDIT_REQUEST";
const LOAD_SUBCURRICULUMEDIT_SUCCESS =
  "learning-portal/src/platform/LOAD_SUBCURRICULUMEDIT_SUCCESS";
const LOAD_SUBCURRICULUMEDIT_FAILURE =
  "learning-portal/src/platform/LOAD_SUBCURRICULUMEDIT_FAILURE";

const LOAD_SUBCURRICULUMADD_REQUEST =
  "learning-portal/src/platform/LOAD_SUBCURRICULUMADD_REQUEST";
const LOAD_SUBCURRICULUMADD_SUCCESS =
  "learning-portal/src/platform/LOAD_SUBCURRICULUMADD_SUCCESS";
const LOAD_SUBCURRICULUMADD_FAILURE =
  "learning-portal/src/platform/LOAD_SUBCURRICULUMADD_FAILURE";

const LOAD_CERTIFICATEADD_REQUEST =
  "learning-portal/src/platform/LOAD_CERTIFICATEADD_REQUEST";
const LOAD_CERTIFICATEADD_SUCCESS =
  "learning-portal/src/platform/LOAD_CERTIFICATEADD_SUCCESS";
const LOAD_CERTIFICATEADD_FAILURE =
  "learning-portal/src/platform/LOAD_CERTIFICATEADD_FAILURE";

const LOAD_CERTIFICATEEDIT_REQUEST =
  "learning-portal/src/platform/LOAD_CERTIFICATEEDIT_REQUEST";
const LOAD_CERTIFICATEEDIT_SUCCESS =
  "learning-portal/src/platform/LOAD_CERTIFICATEEDIT_SUCCESS";
const LOAD_CERTIFICATEEDIT_FAILURE =
  "learning-portal/src/platform/LOAD_CERTIFICATEEDIT_FAILURE";

const LOAD_CURRICULUMCERTIFICATEADD_REQUEST =
  "learning-portal/src/platform/LOAD_CURRICULUMCERTIFICATEADD_REQUEST";
const LOAD_CURRICULUMCERTIFICATEADD_SUCCESS =
  "learning-portal/src/platform/LOAD_CURRICULUMCERTIFICATEADD_SUCCESS";
const LOAD_CURRICULUMCERTIFICATEADD_FAILURE =
  "learning-portal/src/platform/LOAD_CURRICULUMCERTIFICATEADD_FAILURE";

const LOAD_CURRICULUMCERTIFICATEEDIT_REQUEST =
  "learning-portal/src/platform/LOAD_CURRICULUMCERTIFICATEEDIT_REQUEST";
const LOAD_CURRICULUMCERTIFICATEEDIT_SUCCESS =
  "learning-portal/src/platform/LOAD_CURRICULUMCERTIFICATEEDIT_SUCCESS";
const LOAD_CURRICULUMCERTIFICATEEDIT_FAILURE =
  "learning-portal/src/platform/LOAD_CURRICULUMCERTIFICATEEDIT_FAILURE";

const LOAD_PUTPERSON_REQUEST =
  "learning-portal/src/platform/LOAD_PUTPERSON_REQUEST";
const LOAD_PUTPERSON_SUCCESS =
  "learning-portal/src/platform/LOAD_PUTPERSON_SUCCESS";
const LOAD_PUTPERSON_FAILURE =
  "learning-portal/src/platform/LOAD_PUTPERSON_FAILURE";

const CLEAR_MESSAGE = "learning-portal/src/platform/CLEAR_MESSAGE";
const LOAD_MESSAGE = "learning-portal/src/platform/LOAD_MESSAGE";

const LOAD_PROGRESSADD_REQUEST =
  "learning-portal/src/platform/LOAD_PROGRESSADD_REQUEST";
const LOAD_PROGRESSADD_SUCCESS =
  "learning-portal/src/platform/LOAD_PROGRESSADD_SUCCESS";
const LOAD_PROGRESSADD_FAILURE =
  "learning-portal/src/platform/LOAD_PROGRESSADD_FAILURE";

const LOAD_PROGRESSEDIT_REQUEST =
  "learning-portal/src/platform/LOAD_PROGRESSEDIT_REQUEST";
const LOAD_PROGRESSEDIT_SUCCESS =
  "learning-portal/src/platform/LOAD_PROGRESSEDIT_SUCCESS";
const LOAD_PROGRESSEDIT_FAILURE =
  "learning-portal/src/platform/LOAD_PROGRESSEDIT_FAILURE";

const LOAD_CURRICULUMPROGRESSADD_REQUEST =
  "learning-portal/src/platform/LOAD_CURRICULUMPROGRESSADD_REQUEST";
const LOAD_CURRICULUMPROGRESSADD_SUCCESS =
  "learning-portal/src/platform/LOAD_CURRICULUMPROGRESSADD_SUCCESS";
const LOAD_CURRICULUMPROGRESSADD_FAILURE =
  "learning-portal/src/platform/LOAD_CURRICULUMPROGRESSADD_FAILURE";

const LOAD_CURRICULUMPROGRESSEDIT_REQUEST =
  "learning-portal/src/platform/LOAD_CURRICULUMPROGRESSEDIT_REQUEST";
const LOAD_CURRICULUMPROGRESSEDIT_SUCCESS =
  "learning-portal/src/platform/LOAD_CURRICULUMPROGRESSEDIT_SUCCESS";
const LOAD_CURRICULUMPROGRESSEDIT_FAILURE =
  "learning-portal/src/platform/LOAD_CURRICULUMPROGRESSEDIT_FAILURE";

/*

          post  /Platforms/${platformid}/CourseProgresses
                put    `/Platforms/${platformid}/CourseProgresses/${newData.id}`,
*/
function loadEditCurriculumProgress(CourseProgresses: any, id: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_CURRICULUMPROGRESSEDIT_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.put(
        `/Platforms/${platformid}/CurriculumProgresses/${id}`,
        CourseProgresses,
        { headers }
      );
      dispatch({
        type: LOAD_CURRICULUMPROGRESSEDIT_SUCCESS,
        payload: {
          curriculumprogressEditMessage: "แก้ไขความก้าวหน้าหลักสูตรสำเร็จ",
          curriculumprogressEditStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `แก้ไขความก้าวหน้าหลักสูตรสำเร็จ`,
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_CURRICULUMPROGRESSEDIT_FAILURE,
        payload: {
          curriculumprogressEditStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}
function loadAddCurriculumProgress(CourseProgresses: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_CURRICULUMPROGRESSADD_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.post(
        `/Platforms/${platformid}/CurriculumProgresses`,
        CourseProgresses,
        { headers }
      );
      dispatch({
        type: LOAD_CURRICULUMPROGRESSADD_SUCCESS,
        payload: {
          progressAddMessage: "เพิ่มความก้าวหน้าหลักสูตรสำเร็จ",
          progressAddStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เพิ่มความก้าวหน้าหลักสูตรสำเร็จ`,
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_CURRICULUMPROGRESSADD_FAILURE,
        payload: {
          progressAddStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}

/*------*/

function loadEditProgress(CourseProgresses: any, id: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_PROGRESSEDIT_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.put(
        `/Platforms/${platformid}/CourseProgresses/${id}`,
        CourseProgresses,
        { headers }
      );
      dispatch({
        type: LOAD_PROGRESSEDIT_SUCCESS,
        payload: {
          progressEditMessage: "แก้ไขความก้าวหน้ารายวิชาสำเร็จ",
          progressEditStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `แก้ไขความก้าวหน้ารายวิชาสำเร็จ`,
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_PROGRESSEDIT_FAILURE,
        payload: {
          progressEditStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}
function loadAddProgress(CourseProgresses: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_PROGRESSADD_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.post(
        `/Platforms/${platformid}/CourseProgresses`,
        CourseProgresses,
        { headers }
      );
      dispatch({
        type: LOAD_PROGRESSADD_SUCCESS,
        payload: {
          progressAddMessage: "เพิ่มความก้าวหน้ารายวิชาสำเร็จ",
          progressAddStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เพิ่มความก้าวหน้ารายวิชาสำเร็จ`,
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_PROGRESSADD_FAILURE,
        payload: {
          progressAddStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}
/*--ประกาศนียบัตร--*/
function loadEditCurriculumCertificate(certificate: any, id: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_CURRICULUMCERTIFICATEEDIT_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.put(
        `/Platforms/${platformid}/CurriculumCertificates/${id}`,
        certificate,
        { headers }
      );
      dispatch({
        type: LOAD_CURRICULUMCERTIFICATEEDIT_SUCCESS,
        payload: {
          curriculumcertificateEditMessage: "แก้ไขประกาศนียบัตรสำเร็จ",
          curriculumcertificateEditStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `แก้ไขประกาศนียบัตรสำเร็จ`,
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_CURRICULUMCERTIFICATEEDIT_FAILURE,
        payload: {
          curriculumcertificateEditStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}
function loadAddCurriculumCertificate(certificate: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_CURRICULUMCERTIFICATEADD_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.post(
        `/Platforms/${platformid}/CurriculumCertificates`,
        certificate,
        { headers }
      );
      dispatch({
        type: LOAD_CURRICULUMCERTIFICATEADD_SUCCESS,
        payload: {
          certificateAddMessage: "เพิ่มประกาศนียบัตรสำเร็จ",
          certificateAddStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เพิ่มประกาศนียบัตรสำเร็จ`,
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_CURRICULUMCERTIFICATEADD_FAILURE,
        payload: {
          certificateAddStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}

/*------*/

function loadEditCertificate(certificate: any, id: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_CERTIFICATEEDIT_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.put(
        `/Platforms/${platformid}/CourseCertificates/${id}`,
        certificate,
        { headers }
      );
      dispatch({
        type: LOAD_CERTIFICATEEDIT_SUCCESS,
        payload: {
          certificateEditMessage: "แก้ไขประกาศนียบัตรสำเร็จ",
          certificateEditStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `แก้ไขประกาศนียบัตรสำเร็จ`,
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_CERTIFICATEEDIT_FAILURE,
        payload: {
          certificateEditStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}
function loadAddCertificate(info: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_CERTIFICATEADD_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.post(
        `/Platforms/${platformid}/CourseCertificates`,
        info,
        { headers }
      );
      dispatch({
        type: LOAD_CERTIFICATEADD_SUCCESS,
        payload: {
          certificateAddMessage: "เพิ่มประกาศนียบัตรสำเร็จ",
          certificateAddStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เพิ่มประกาศนียบัตรสำเร็จ`,
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_CERTIFICATEADD_FAILURE,
        payload: {
          certificateAddStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}

function putPerson(info: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_PUTPERSON_REQUEST });
    try {
      const token = getCookie("token");

      const platformid = parseJwt(token).unique_name;

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.put(`/Platforms/${platformid}`, info, { headers });
      dispatch({
        type: LOAD_PUTPERSON_SUCCESS,
      });

      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: "แก้ไขข้อมูลสำเร็จ",
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_PUTPERSON_FAILURE,
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
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
        },
      });
      setCookie("token", result.data.token, 3);

      dispatch(push("/learning-portal/admin/main"));
    } catch (err) {
      dispatch({
        type: LOAD_LOGIN_FAILURE,
        payload: {
          status: err,
        },
      });
      if (err.response.status === 404) {
        dispatch({
          type: LOAD_MESSAGE,
          payload: {
            message: "ไม่พบรหัสผู้ใข้",
            severity: "error",
          },
        });
      }
      if (err.response.status === 401) {
        dispatch({
          type: LOAD_MESSAGE,
          payload: {
            message: "รหัสผ่านผิด",
            severity: "error",
          },
        });
      } else {
        dispatch({
          type: LOAD_MESSAGE,
          payload: {
            message: `เกิดข้อผิดพลาด ${err.response.status}`,
            severity: "error",
          },
        });
      }
    }
  };
}
function loadPassword(passwordInfo: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_PASSWORD_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.put(
        `/Platforms/${platformid}/Password`,
        passwordInfo,
        { headers }
      );
      dispatch({
        type: LOAD_PASSWORD_SUCCESS,
        payload: {
          passwordMessage: "เปลี่ยนรหัสผ่านสำเร็จ",
          passwordStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: "เปลี่ยนรหัสผ่านสำเร็จ",
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_PASSWORD_FAILURE,
        payload: {
          passwordStatus: err,
        },
      });
      if (err.response.status === 403) {
        dispatch({
          type: LOAD_MESSAGE,
          payload: {
            message: `รหัสผ่านเดิมไม่ถูกต้อง`,
            severity: "error",
          },
        });
      } else {
        dispatch({
          type: LOAD_MESSAGE,
          payload: {
            message: `เกิดข้อผิดพลาก ${err.response.status}`,
            severity: "error",
          },
        });
      }
    }
  };
}
function loadEditCourse(Course: any, id: number) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_COURSEEDIT_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.put(
        `/Platforms/${platformid}/Courses/${id}`,
        Course,
        { headers }
      );
      dispatch({
        type: LOAD_COURSEEDIT_SUCCESS,
        payload: {
          courseEditMessage: "แก้ไขสำเร็จ",
          courseEditStatus: result.status,
        },
      });

      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: "แก้ไขข้อมูลสำเร็จ",
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_COURSEEDIT_FAILURE,
        payload: {
          courseEditStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}
function loadAddCourse(Course: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_COURSEADD_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.post(
        `/Platforms/${platformid}/Courses`,
        Course,
        { headers }
      );
      dispatch({
        type: LOAD_COURSEADD_SUCCESS,
        payload: {
          courseAddMessage: "เพิ่มรายวิชาสำเร็จ",
          courseAddStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เพิ่มรายวิชาสำเร็จ`,
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_COURSEADD_FAILURE,
        payload: {
          courseAddStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}
function loadEditCurriculum(Curriculums: any, id: number) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_CURRICULUMEDIT_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.put(
        `/Platforms/${platformid}/Curriculums/${id}`,
        Curriculums,
        { headers }
      );
      dispatch({
        type: LOAD_CURRICULUMEDIT_SUCCESS,
        payload: {
          curriculumEditMessage: "แก้ไขสำเร็จ",
          curriculumEditStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: "แก้ไขข้อมูลสำเร็จ",
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_CURRICULUMEDIT_FAILURE,
        payload: {
          curriculumEditStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}
function loadAddCurriculums(Curriculums: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_CURRICULUMADD_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.post(
        `/Platforms/${platformid}/Curriculums`,
        Curriculums,
        { headers }
      );
      dispatch({
        type: LOAD_CURRICULUMADD_SUCCESS,
        payload: {
          curriculumAddMessage: "เพิ่มข้อมูลสำเร็จ",
          curriculumAddStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: "เพิ่มข้อมูลสำเร็จ",
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_CURRICULUMADD_FAILURE,
        payload: {
          curriculumAddStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}
function loadGetProfile() {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_PROFILE_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const { data } = await axios.get(`/Platforms/${platformid}`);

      dispatch({
        type: LOAD_PROFILE_SUCCESS,
        payload: {
          profile: data,
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_PROFILE_FAILURE,
        payload: {
          status: err.response.status,
        },
      });
    }
  };
}
function loadEditSubCurriculum(Curriculums: any, id: any, courseid: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_SUBCURRICULUMEDIT_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.put(
        `/Platforms/${platformid}/Curriculums/${Curriculums}/Courses/${id}`,
        { no: courseid },
        { headers }
      );
      dispatch({
        type: LOAD_SUBCURRICULUMEDIT_SUCCESS,
        payload: {
          subCurriculumEditMessage: "แก้ไขสำเร็จ",
          subCurriculumEditStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: "แก้ไขข้อมูลสำเร็จ",
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_SUBCURRICULUMEDIT_FAILURE,
        payload: {
          subCurriculumEditStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}
function loadAddSubCurriculums(valueCurriculun: any, id: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_SUBCURRICULUMADD_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const result = await axios.post(
        `/Platforms/${platformid}/Curriculums/${valueCurriculun}/Courses/${id}`,
        null,
        { headers }
      );
      dispatch({
        type: LOAD_SUBCURRICULUMADD_SUCCESS,
        payload: {
          subCurriculumAddMessage: "แก้ไขสำเร็จ",
          subCurriculumAddStatus: result.status,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: "เพิ่มข้อมูลสำเร็จ",
          severity: "success",
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_SUBCURRICULUMADD_FAILURE,
        payload: {
          subCurriculumAddStatus: err,
        },
      });
      dispatch({
        type: LOAD_MESSAGE,
        payload: {
          message: `เกิดข้อผิดพลาด ${err.response.status}`,
          severity: "error",
        },
      });
    }
  };
}
function getCourse() {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_COURSEPLATFORM_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const { data } = await axios.get(`/Platforms/${platformid}/Courses`);
      dispatch({
        type: LOAD_COURSEPLATFORM_SUCCESS,
        payload: {
          course: data,
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_COURSEPLATFORM_FAILURE,
        payload: {
          status: err.response.status,
        },
      });
    }
  };
}
function getCurriculum() {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_CURRICULUMPLATFORM_REQUEST });
    try {
      const token = getCookie("token");
      const platformid = parseJwt(token).unique_name;
      const { data } = await axios.get(`/Platforms/${platformid}/Curriculums`);
      dispatch({
        type: LOAD_CURRICULUMPLATFORM_SUCCESS,
        payload: {
          curriculum: data,
        },
      });
    } catch (err) {
      dispatch({
        type: LOAD_CURRICULUMPLATFORM_FAILURE,
        payload: {
          status: err.response.status,
        },
      });
    }
  };
}

function clearMessage() {
  return {
    type: CLEAR_MESSAGE,
  };
}
function loadMessage(message: string, severity: string) {
  return {
    type: LOAD_MESSAGE,
    payload: {
      message,
      severity,
    },
  };
}

export {
  CLEAR_MESSAGE,
  LOAD_MESSAGE,
  LOAD_PROFILE_REQUEST,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAILURE,
  LOAD_LOGIN_REQUEST,
  LOAD_LOGIN_SUCCESS,
  LOAD_LOGIN_FAILURE,
  LOAD_PASSWORD_REQUEST,
  LOAD_PASSWORD_SUCCESS,
  LOAD_PASSWORD_FAILURE,
  LOAD_COURSEEDIT_REQUEST,
  LOAD_COURSEEDIT_SUCCESS,
  LOAD_COURSEEDIT_FAILURE,
  LOAD_COURSEADD_REQUEST,
  LOAD_COURSEADD_SUCCESS,
  LOAD_COURSEADD_FAILURE,
  LOAD_CURRICULUMEDIT_REQUEST,
  LOAD_CURRICULUMEDIT_SUCCESS,
  LOAD_CURRICULUMEDIT_FAILURE,
  LOAD_CURRICULUMADD_REQUEST,
  LOAD_CURRICULUMADD_SUCCESS,
  LOAD_CURRICULUMADD_FAILURE,
  LOAD_SUBCURRICULUMEDIT_REQUEST,
  LOAD_SUBCURRICULUMEDIT_SUCCESS,
  LOAD_SUBCURRICULUMEDIT_FAILURE,
  LOAD_SUBCURRICULUMADD_REQUEST,
  LOAD_SUBCURRICULUMADD_SUCCESS,
  LOAD_SUBCURRICULUMADD_FAILURE,
  LOAD_PUTPERSON_REQUEST,
  LOAD_PUTPERSON_SUCCESS,
  LOAD_PUTPERSON_FAILURE,
  LOAD_COURSEPLATFORM_REQUEST,
  LOAD_COURSEPLATFORM_SUCCESS,
  LOAD_COURSEPLATFORM_FAILURE,
  LOAD_CERTIFICATEADD_REQUEST,
  LOAD_CERTIFICATEADD_SUCCESS,
  LOAD_CERTIFICATEADD_FAILURE,
  LOAD_CERTIFICATEEDIT_REQUEST,
  LOAD_CERTIFICATEEDIT_SUCCESS,
  LOAD_CERTIFICATEEDIT_FAILURE,
  LOAD_CURRICULUMCERTIFICATEEDIT_REQUEST,
  LOAD_CURRICULUMCERTIFICATEEDIT_SUCCESS,
  LOAD_CURRICULUMCERTIFICATEEDIT_FAILURE,
  LOAD_CURRICULUMCERTIFICATEADD_REQUEST,
  LOAD_CURRICULUMCERTIFICATEADD_SUCCESS,
  LOAD_CURRICULUMCERTIFICATEADD_FAILURE,
  LOAD_PROGRESSADD_REQUEST,
  LOAD_PROGRESSADD_SUCCESS,
  LOAD_PROGRESSADD_FAILURE,
  LOAD_PROGRESSEDIT_REQUEST,
  LOAD_PROGRESSEDIT_SUCCESS,
  LOAD_PROGRESSEDIT_FAILURE,
  LOAD_CURRICULUMPROGRESSADD_REQUEST,
  LOAD_CURRICULUMPROGRESSADD_SUCCESS,
  LOAD_CURRICULUMPROGRESSADD_FAILURE,
  LOAD_CURRICULUMPROGRESSEDIT_REQUEST,
  LOAD_CURRICULUMPROGRESSEDIT_SUCCESS,
  LOAD_CURRICULUMPROGRESSEDIT_FAILURE,
  LOAD_CURRICULUMPLATFORM_REQUEST,
  LOAD_CURRICULUMPLATFORM_SUCCESS,
  LOAD_CURRICULUMPLATFORM_FAILURE,
  getCurriculum,
  loadEditCurriculum,
  loadAddCurriculums,
  loadLogin,
  loadPassword,
  loadEditCourse,
  loadAddCourse,
  loadAddSubCurriculums,
  loadEditSubCurriculum,
  loadMessage,
  clearMessage,
  loadGetProfile,
  loadAddCertificate,
  getCourse,
  putPerson,
  loadEditCertificate,
  loadEditCurriculumCertificate,
  loadAddCurriculumCertificate,
  loadEditCurriculumProgress,
  loadAddCurriculumProgress,
  loadEditProgress,
  loadAddProgress,
};
