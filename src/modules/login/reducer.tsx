import {
  LOAD_LOGIN_REQUEST,
  LOAD_LOGIN_SUCCESS,
  LOAD_LOGIN_FAILURE,
  CLEAR_MESSAGE_LOGIN,
} from "./actions";
const initialState = {
  isLoading: false,
  users: [],
  status: [],
  login: false,
  messageLogin: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case LOAD_LOGIN_REQUEST:
      return { ...state, isLoading: true, users: [], messageLogin: null };
    case LOAD_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload.user,
        status: action.payload.status,
        messageLogin: null,
        login: true,
      };
    case LOAD_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        status: action.payload.status,
        messageLogin: action.payload.messageLogin,
        login: false,
      };
    case CLEAR_MESSAGE_LOGIN:
      return { ...state, messageLogin: null };
    default:
      return state;
  }
}
