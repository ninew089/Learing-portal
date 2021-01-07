import {
    LOAD_FORGOT_REQUEST,
    LOAD_FORGOT_SUCCESS,
    LOAD_FORGOT_FAILURE,
} from "./actions";
const initialState = {
    isLoading: false,
    status: [],
    message: [],
    data: [],
    isUpdate: []
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case LOAD_FORGOT_REQUEST:
            return { ...state, isLoading: true, message: [], isUpdate: [] };
        case LOAD_FORGOT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload.data,
                isUpdate: true

            };
        case LOAD_FORGOT_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,
                isUpdate: false

            };
        default:
            return state;
    }
}
