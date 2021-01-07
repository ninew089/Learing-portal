import {
    LOAD_PUT_REQUEST,
    LOAD_PUT_SUCCESS,
    LOAD_PUT_FAILURE,
} from "./actions";
const initialState = {
    isLoading: false,
    status: [],
    message: [],
    data: [],
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case LOAD_PUT_REQUEST:
            return { ...state, isLoading: true, message: [], status: [], data: [], };
        case LOAD_PUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload.data,

            };
        case LOAD_PUT_FAILURE:
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
