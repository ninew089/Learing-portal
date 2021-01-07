import {
  LOAD_PRESSRELEASES_REQUEST,
  LOAD_PRESSRELEASES_SUCCESS,
  LOAD_PRESSRELEASES_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  pressReleases: [],
  isError: [],
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case LOAD_PRESSRELEASES_REQUEST:
      return { ...state, isLoading: true, pressReleases: [], isError: false };
    case LOAD_PRESSRELEASES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pressReleases: action.payload.pressReleases,
        isError: true,
      };
    case LOAD_PRESSRELEASES_FAILURE:
      return { ...state, isLoading: false, isError: false };

    default:
      return state;
  }
}
