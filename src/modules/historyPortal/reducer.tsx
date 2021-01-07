import {
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
} from "./actions";

const initialState = {
    status: [],
    message: [],
    coursecertificate: [],
    curriculumcertificate: [],
    subcoursecertificate: [],
    subcurriculumcertificate: []
};

export default function (state = initialState, action: any) {
    switch (action.type) {

        case LOAD_SUBCOURSECERTIFICATE_REQUEST:
            return { ...state, isLoading: true, message: [], subcoursecertificate: [] };
        case LOAD_SUBCOURSECERTIFICATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,
                subcoursecertificate: action.payload.subcoursecertificate,

            };
        case LOAD_SUBCOURSECERTIFICATE_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,

            };
        case LOAD_SUBCURRICULUMCERTIFICATES_REQUEST:
            return { ...state, isLoading: true, message: [], subcurriculumcertificate: [] };
        case LOAD_SUBCURRICULUMCERTIFICATES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,
                subcurriculumcertificate: action.payload.subcurriculumcertificate,

            };
        case LOAD_SUBCURRICULUMCERTIFICATES_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,

            };




        case LOAD_COURSECERTIFICATE_REQUEST:
            return { ...state, isLoading: true, message: [], coursecertificate: [], Login: false };
        case LOAD_COURSECERTIFICATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,
                coursecertificate: action.payload.coursecertificate,
                Login: true,
            };
        case LOAD_COURSECERTIFICATE_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,
                Login: false,
            };
        case LOAD_CURRICULUMCERTIFICATES_REQUEST:
            return { ...state, isLoading: true, message: [], curriculumcertificate: [] };
        case LOAD_CURRICULUMCERTIFICATES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,
                curriculumcertificate: action.payload.curriculumcertificate,
                Login: true,
            };
        case LOAD_CURRICULUMCERTIFICATES_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,
                Login: false,
            };
        default:
            return state;
    }
}
