import axios from "axios";

const LOAD_PRESSRELEASES_REQUEST =
  "learning-portal/src/ui/LOAD_PRESSRELEASES_REQUEST";
const LOAD_PRESSRELEASES_SUCCESS =
  "learning-portal/src/ui/LOAD_PRESSRELEASES_SUCCESS";
const LOAD_PRESSRELEASES_FAILURE =
  "learning-portal/src/ui/LOAD_PRESSRELEASES_REQUEST";

function loadPressReleases() {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_PRESSRELEASES_REQUEST });
    try {
      const { data } = await axios.get(`/PressReleases?max=5`);
      dispatch({
        type: LOAD_PRESSRELEASES_SUCCESS,
        payload: {
          pressReleases: data,
        },
      });
    } catch (err) {
      dispatch({ type: LOAD_PRESSRELEASES_FAILURE });
    }
  };
}

export {
  LOAD_PRESSRELEASES_REQUEST,
  LOAD_PRESSRELEASES_SUCCESS,
  LOAD_PRESSRELEASES_FAILURE,
  loadPressReleases,
};
