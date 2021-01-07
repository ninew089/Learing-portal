import {
    LOAD_EDIT_REQUEST,
    LOAD_EDIT_SUCCESS,
    LOAD_EDIT_FAILURE,
    LOAD_PROFILE_REQUEST,
    LOAD_PROFILE_SUCCESS,
    LOAD_PROFILE_FAILURE,
} from "./actions";
const initialState = {
    isLoading: false,
    status: [],
    message: [],
    data: [],
    edit: []
};

export default function (state = initialState, action: any) {
    switch (action.type) {

        case LOAD_PROFILE_REQUEST:
            return { ...state, isLoading: true, message: [], data: [] };
        case LOAD_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload.data,

            };
        case LOAD_PROFILE_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,

            };

        case LOAD_EDIT_REQUEST:
            return { ...state, isLoading: true, message: [], edit: [] };
        case LOAD_EDIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,
                edit: action.payload.edit,

            };
        case LOAD_EDIT_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,

            };
        default:
            return state;
    }
}
