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
    CLEAR_MESSAGE,
    LOAD_MESSAGE
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
    curriculumAddMessage: "",
    curriculumAddStatus: [],
    curriculumEditMessage: "",
    curriculumEditStatus: [],
    subCurriculumAddMessage: "",
    subCurriculumAddStatus: [],
    subCurriculumEditMessage: "",
    subCurriculumEditStatus: [],
    message: null,
    severity: null
};

export default function (state = initialState, action: any) {
    switch (action.type) {
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
            return { ...state, isLoading: false, Login: false, status: action.payload.status };
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
            return { ...state, isLoading: true, passwordMessage: [], passwordStatus: [] };
        case LOAD_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                passwordMessage: action.payload.passwordMessage,
                passwordStatus: action.payload.passwordStatus,

            };
        case LOAD_PASSWORD_FAILURE:
            return { ...state, isLoading: false, passwordStatus: action.payload.passwordStatus };

        case LOAD_COURSEEDIT_REQUEST:
            return { ...state, isLoading: true, courseEditMessage: [], courseEditStatus: [] };
        case LOAD_COURSEEDIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                courseEditMessage: action.payload.courseEditMessage,
                courseEditStatus: action.payload.courseEditStatus,

            };
        case LOAD_COURSEEDIT_FAILURE:
            return { ...state, isLoading: false, courseEditStatus: action.payload.courseEditStatus };

        case LOAD_COURSEADD_REQUEST:
            return { ...state, isLoading: true, courseAddMessage: [], courseAddStatus: [] };
        case LOAD_COURSEADD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                courseAddMessage: action.payload.courseAddMessage,
                courseAddStatus: action.payload.courseAddStatus,

            };
        case LOAD_COURSEADD_FAILURE:
            return { ...state, isLoading: false, courseAddStatus: action.payload.courseAddStatus };




        case LOAD_CURRICULUMEDIT_REQUEST:
            return { ...state, isLoading: true, curriculumEditMessage: [], curriculumEditStatus: [] };
        case LOAD_CURRICULUMEDIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                curriculumEditMessage: action.payload.curriculumEditMessage,
                curriculumEditStatus: action.payload.curriculumEditStatus,

            };
        case LOAD_CURRICULUMEDIT_FAILURE:
            return { ...state, isLoading: false, curriculumEditStatus: action.payload.curriculumEditStatus };




        case LOAD_CURRICULUMADD_REQUEST:
            return { ...state, isLoading: true, curriculumAddMessage: [], curriculumAddStatus: [] };
        case LOAD_CURRICULUMADD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                curriculumAddMessage: action.payload.curriculumAddMessage,
                curriculumAddStatus: action.payload.curriculumAddStatus,

            };
        case LOAD_CURRICULUMADD_FAILURE:
            return { ...state, isLoading: false, curriculumAddStatus: action.payload.curriculumAddStatus };

        //sub

        case LOAD_SUBCURRICULUMEDIT_REQUEST:
            return { ...state, isLoading: true, subCurriculumEditMessage: [], subCurriculumEditStatus: [] };
        case LOAD_SUBCURRICULUMEDIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                subCurriculumEditMessage: action.payload.subCurriculumEditMessage,
                subCurriculumEditStatus: action.payload.subCurriculumEditStatus,

            };
        case LOAD_SUBCURRICULUMEDIT_FAILURE:
            return { ...state, isLoading: false, subCurriculumEditStatus: action.payload.subCurriculumEditStatus };




        case LOAD_SUBCURRICULUMADD_REQUEST:
            return { ...state, isLoading: true, subCurriculumAddMessage: [], subCurriculumAddStatus: [] };
        case LOAD_SUBCURRICULUMADD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                subCurriculumAddMessage: action.payload.subCurriculumAddMessage,
                subCurriculumAddStatus: action.payload.subCurriculumAddStatus,

            };
        case LOAD_SUBCURRICULUMADD_FAILURE:
            return { ...state, isLoading: false, subCurriculumAddStatus: action.payload.subCurriculumAddStatus };
        case CLEAR_MESSAGE:
            return { ...state, message: null };
        case LOAD_MESSAGE:
            return {
                ...state, message: action.payload.message, severity: action.payload.severity,
            };
        default:
            return state;
    }
}
