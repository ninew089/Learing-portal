import {
  LOAD_SIGNUP_REQUEST,
  LOAD_SIGNUP_SUCCESS,
  LOAD_SIGNUP_FAILURE,
} from "./actions";
const initialState = {
  isLoading: false,
  status: [],
  message: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case LOAD_SIGNUP_REQUEST:
      return { ...state, isLoading: true, message: null, Login: false };
    case LOAD_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
        Login: true,
      };
    case LOAD_SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
        Login: false,
      };
    default:
      return state;
  }
}
