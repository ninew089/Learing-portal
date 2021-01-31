import {
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
  CLEAR_MESSAGE,
  LOAD_MESSAGE,
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
} from "./actions";
const initialState = {
  isLoading: false,
  users: [],
  status: [],
  Login: false,
  profile: [],
  passwordMessage: "",
  passwordStatus: [],
  courseEditMessage: "",
  courseEditStatus: [],
  courseAddMessage: "",
  courseAddStatus: [],
  certificateAddMessage: "",
  certificateAddStatus: [],
  certificateEditMessage: "",
  certificateEditStatus: [],
  curriculumcertificateAddMessage: "",
  curriculumcertificateAddStatus: [],
  curriculumcertificateEditMessage: "",
  curriculumcertificateEditStatus: [],

  progressAddMessage: "",
  progressAddStatus: [],
  progressEditMessage: "",
  progressEditStatus: [],
  curriculumprogressAddMessage: "",
  curriculumprogressAddStatus: [],
  curriculumprogressEditMessage: "",
  curriculumprogressEditStatus: [],

  curriculumAddMessage: "",
  curriculumAddStatus: [],
  curriculumEditMessage: "",
  curriculumEditStatus: [],
  subCurriculumAddMessage: "",
  subCurriculumAddStatus: [],
  subCurriculumEditMessage: "",
  subCurriculumEditStatus: [],
  course: [],
  curriculum: [],
  message: null,
  severity: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case LOAD_CURRICULUMPROGRESSEDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        curriculumprogressEditMessage: [],
        curriculumprogressditStatus: [],
      };
    case LOAD_CURRICULUMPROGRESSEDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        curriculumprogressEditMessage:
          action.payload.curriculumprogressEditMessage,
        curriculumprogressEditStatus:
          action.payload.curriculumprogressEditStatus,
      };
    case LOAD_CURRICULUMPROGRESSEDIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        curriculumprogressEditStatus:
          action.payload.curriculumprogressEditStatus,
      };

    case LOAD_CURRICULUMPROGRESSADD_REQUEST:
      return {
        ...state,
        isLoading: true,
        curriculumprogressAddMessage: [],
        curriculumprogressAddStatus: [],
      };
    case LOAD_CURRICULUMPROGRESSADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        curriculumprogressAddMessage:
          action.payload.curriculumprogressAddMessage,
        curriculumprogressAddStatus: action.payload.curriculumprogressAddStatus,
      };
    case LOAD_CURRICULUMPROGRESSADD_FAILURE:
      return {
        ...state,
        isLoading: false,
        curriculumprogressAddStatus: action.payload.curriculumprogressAddStatus,
      };

    /*------------------- */
    case LOAD_PROGRESSEDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        progressEditMessage: [],
        progressditStatus: [],
      };
    case LOAD_PROGRESSEDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        progressEditMessage: action.payload.progressEditMessage,
        progressEditStatus: action.payload.progressEditStatus,
      };
    case LOAD_PROGRESSEDIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        progressEditStatus: action.payload.progressEditStatus,
      };

    case LOAD_PROGRESSADD_REQUEST:
      return {
        ...state,
        isLoading: true,
        progressAddMessage: [],
        progressAddStatus: [],
      };
    case LOAD_PROGRESSADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        progressAddMessage: action.payload.progressAddMessage,
        progressAddStatus: action.payload.progressAddStatus,
      };
    case LOAD_PROGRESSADD_FAILURE:
      return {
        ...state,
        isLoading: false,
        progressAddStatus: action.payload.progressAddStatus,
      };

    /*-----------ประกาศนียบัตร-------- */
    case LOAD_CURRICULUMCERTIFICATEEDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        curriculumcertificateEditMessage: [],
        curriculumcertificatEditStatus: [],
      };
    case LOAD_CURRICULUMCERTIFICATEEDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        curriculumcertificateEditMessage:
          action.payload.curriculumcertificateEditMessage,
        curriculumcertificateEditStatus:
          action.payload.curriculumcertificateEditStatus,
      };
    case LOAD_CURRICULUMCERTIFICATEEDIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        curriculumcertificateEditStatus:
          action.payload.curriculumcertificateEditStatus,
      };

    case LOAD_CURRICULUMCERTIFICATEADD_REQUEST:
      return {
        ...state,
        isLoading: true,
        curriculumcertificateAddMessage: [],
        curriculumcertificateAddStatus: [],
      };
    case LOAD_CURRICULUMCERTIFICATEADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        curriculumcertificateAddMessage:
          action.payload.curriculumcertificateAddMessage,
        curriculumcertificateAddStatus:
          action.payload.curriculumcertificateAddStatus,
      };
    case LOAD_CURRICULUMCERTIFICATEADD_FAILURE:
      return {
        ...state,
        isLoading: false,
        curriculumcertificateAddStatus:
          action.payload.curriculumcertificateAddStatus,
      };

    /*------------------- */
    case LOAD_CERTIFICATEEDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        certificateEditMessage: [],
        certificatEditStatus: [],
      };
    case LOAD_CERTIFICATEEDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        certificateEditMessage: action.payload.certificateEditMessage,
        certificateEditStatus: action.payload.certificateEditStatus,
      };
    case LOAD_CERTIFICATEEDIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        certificateEditStatus: action.payload.certificateEditStatus,
      };

    case LOAD_CERTIFICATEADD_REQUEST:
      return {
        ...state,
        isLoading: true,
        certificateAddMessage: [],
        certificateAddStatus: [],
      };
    case LOAD_CERTIFICATEADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        certificateAddMessage: action.payload.certificateAddMessage,
        certificateAddStatus: action.payload.certificateAddStatus,
      };
    case LOAD_CERTIFICATEADD_FAILURE:
      return {
        ...state,
        isLoading: false,
        certificateAddStatus: action.payload.certificateAddStatus,
      };

    /*------------------- */
    case LOAD_COURSEPLATFORM_REQUEST:
      return { ...state, isLoading: true, course: [] };
    case LOAD_COURSEPLATFORM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        course: action.payload.course,
      };
    case LOAD_COURSEPLATFORM_FAILURE:
      return { ...state, isLoading: false, status: action.payload.status };

    case LOAD_CURRICULUMPLATFORM_REQUEST:
      return { ...state, isLoading: true, curriculum: [] };
    case LOAD_CURRICULUMPLATFORM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        curriculum: action.payload.curriculum,
      };
    case LOAD_CURRICULUMPLATFORM_FAILURE:
      return { ...state, isLoading: false, status: action.payload.status };

    case LOAD_PUTPERSON_REQUEST:
      return { ...state, isLoading: true };
    case LOAD_PUTPERSON_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case LOAD_PUTPERSON_FAILURE:
      return { ...state, isLoading: false };
    case LOAD_LOGIN_REQUEST:
      return { ...state, isLoading: true, users: [], Login: false };
    case LOAD_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload.user,
        status: action.payload.status,
        Login: true,
      };
    case LOAD_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        Login: false,
        status: action.payload.status,
      };
    case LOAD_PROFILE_REQUEST:
      return { ...state, isLoading: true, profile: [] };
    case LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: action.payload.profile,
      };
    case LOAD_PROFILE_FAILURE:
      return { ...state, isLoading: false, status: action.payload.status };

    case LOAD_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        passwordMessage: [],
        passwordStatus: [],
      };
    case LOAD_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        passwordMessage: action.payload.passwordMessage,
        passwordStatus: action.payload.passwordStatus,
      };
    case LOAD_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        passwordStatus: action.payload.passwordStatus,
      };

    case LOAD_COURSEEDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        courseEditMessage: [],
        courseEditStatus: [],
      };
    case LOAD_COURSEEDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        courseEditMessage: action.payload.courseEditMessage,
        courseEditStatus: action.payload.courseEditStatus,
      };
    case LOAD_COURSEEDIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        courseEditStatus: action.payload.courseEditStatus,
      };

    case LOAD_COURSEADD_REQUEST:
      return {
        ...state,
        isLoading: true,
        courseAddMessage: [],
        courseAddStatus: [],
      };
    case LOAD_COURSEADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        courseAddMessage: action.payload.courseAddMessage,
        courseAddStatus: action.payload.courseAddStatus,
      };
    case LOAD_COURSEADD_FAILURE:
      return {
        ...state,
        isLoading: false,
        courseAddStatus: action.payload.courseAddStatus,
      };

    case LOAD_CURRICULUMEDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        curriculumEditMessage: [],
        curriculumEditStatus: [],
      };
    case LOAD_CURRICULUMEDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        curriculumEditMessage: action.payload.curriculumEditMessage,
        curriculumEditStatus: action.payload.curriculumEditStatus,
      };
    case LOAD_CURRICULUMEDIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        curriculumEditStatus: action.payload.curriculumEditStatus,
      };

    case LOAD_CURRICULUMADD_REQUEST:
      return {
        ...state,
        isLoading: true,
        curriculumAddMessage: [],
        curriculumAddStatus: [],
      };
    case LOAD_CURRICULUMADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        curriculumAddMessage: action.payload.curriculumAddMessage,
        curriculumAddStatus: action.payload.curriculumAddStatus,
      };
    case LOAD_CURRICULUMADD_FAILURE:
      return {
        ...state,
        isLoading: false,
        curriculumAddStatus: action.payload.curriculumAddStatus,
      };

    //sub

    case LOAD_SUBCURRICULUMEDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        subCurriculumEditMessage: [],
        subCurriculumEditStatus: [],
      };
    case LOAD_SUBCURRICULUMEDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subCurriculumEditMessage: action.payload.subCurriculumEditMessage,
        subCurriculumEditStatus: action.payload.subCurriculumEditStatus,
      };
    case LOAD_SUBCURRICULUMEDIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        subCurriculumEditStatus: action.payload.subCurriculumEditStatus,
      };

    case LOAD_SUBCURRICULUMADD_REQUEST:
      return {
        ...state,
        isLoading: true,
        subCurriculumAddMessage: [],
        subCurriculumAddStatus: [],
      };
    case LOAD_SUBCURRICULUMADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subCurriculumAddMessage: action.payload.subCurriculumAddMessage,
        subCurriculumAddStatus: action.payload.subCurriculumAddStatus,
      };
    case LOAD_SUBCURRICULUMADD_FAILURE:
      return {
        ...state,
        isLoading: false,
        subCurriculumAddStatus: action.payload.subCurriculumAddStatus,
      };
    case CLEAR_MESSAGE:
      return { ...state, message: null };
    case LOAD_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    default:
      return state;
  }
}
