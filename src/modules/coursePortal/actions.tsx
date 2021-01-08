import axios from "axios";

const LOAD_COURSESCATEGORY_REQUEST =
  "learning-portal/src/ui/LOAD_COURSESCATEGORY_REQUEST";
const LOAD_COURSESCATEGORY_SUCCESS =
  "learning-portal/src/ui/LOAD_COURSESCATEGORY_SUCCESS";
const LOAD_COURSESCATEGORY_FAILURE =
  "learning-portal/src/ui/LOAD_COURSESCATEGORY_FAILURE";

const LOAD_COURSESCATEGORIES_REQUEST =
  "learning-portal/src/ui/LOAD_COURSESCATEGORIES_REQUEST";
const LOAD_COURSESCATEGORIES_SUCCESS =
  "learning-portal/src/ui/LOAD_COURSESCATEGORIES_SUCCESS";
const LOAD_COURSESCATEGORIES_FAILURE =
  "learning-portal/src/ui/LOAD_COURSESCATEGORIES_FAILURE";

const LOAD_COURSES_REQUEST = "learning-portal/src/ui/LOAD_COURSES_REQUEST";
const LOAD_COURSES_SUCCESS = "learning-portal/src/ui/LOAD_COURSES_SUCCESS";
const LOAD_COURSES_FAILURE = "learning-portal/src/ui/LOAD_COURSES_FAILURE";

const LOAD_COURSE_REQUEST = "learning-portal/src/ui/LOAD_COURSE_REQUEST";
const LOAD_COURSE_SUCCESS = "learning-portal/src/ui/LOAD_COURSE_SUCCESS";
const LOAD_COURSE_FAILURE = "learning-portal/src/ui/LOAD_COURSE_FAILURE";

const LOAD_COURSEVIEW_REQUEST =
  "learning-portal/src/ui/LOAD_COURSEVIEW_REQUEST";
const LOAD_COURSEVIEW_SUCCESS =
  "learning-portal/src/ui/LOAD_COURSEVIEW_SUCCESS";
const LOAD_COURSEVIEW_FAILURE =
  "learning-portal/src/ui/LOAD_COURSEVIEW_FAILURE";

const LOAD_CURRICULUM_REQUEST =
  "learning-portal/src/ui/LOAD_CURRICULUM_REQUEST";
const LOAD_CURRICULUM_SUCCESS =
  "learning-portal/src/ui/LOAD_CURRICULUM_SUCCESS";
const LOAD_CURRICULUM_FAILURE =
  "learning-portal/src/ui/LOAD_CURRICULUM_FAILURE";

const LOAD_CURRICULUMS_REQUEST =
  "learning-portal/src/ui/LOAD_CURRICULUMS_REQUEST";
const LOAD_CURRICULUMS_SUCCESS =
  "learning-portal/src/ui/LOAD_CURRICULUMS_SUCCESS";
const LOAD_CURRICULUMS_FAILURE =
  "learning-portal/src/ui/LOAD_CURRICULUMS_FAILURE";

const LOAD_CURRICULUMCOURSE_REQUEST =
  "learning-portal/src/ui/LOAD_CURRICULUMCOURSE_REQUEST";
const LOAD_CURRICULUMCOURSE_SUCCESS =
  "learning-portal/src/ui/LOAD_CURRICULUMCOURSE_SUCCESS";
const LOAD_CURRICULUMCOURSE_FAILURE =
  "learning-portal/src/ui/LOAD_CURRICULUMCOURSE_FAILURE";

const LOAD_CURRICULUMVIEW_REQUEST =
  "learning-portal/src/ui/LOAD_CURRICULUMVIEW_REQUEST";
const LOAD_CURRICULUMVIEW_SUCCESS =
  "learning-portal/src/ui/LOAD_CURRICULUMVIEW_SUCCESS";
const LOAD_CURRICULUMVIEW_FAILURE =
  "learning-portal/src/ui/LOAD_CURRICULUMVIEW_FAILURE";

const LOAD_TOPRATE_REQUEST = "learning-portal/src/ui/LOAD_TOPRATE_REQUEST";
const LOAD_TOPRATE_SUCCESS = "learning-portal/src/ui/LOAD_TOPRATE_SUCCESS";
const LOAD_TOPRATE_FAILURE = "learning-portal/src/ui/LOAD_TOPRATE_FAILURE";

const LOAD_RECOMMENDED_REQUEST =
  "learning-portal/src/ui/LOAD_RECOMMENDED_REQUEST";
const LOAD_RECOMMENDED_SUCCESS =
  "learning-portal/src/ui/LOAD_RECOMMENDED_SUCCESS";
const LOAD_RECOMMENDED_FAILURE =
  "learning-portal/src/ui/LOAD_RECOMMENDED_FAILURE";

function loadRecommended() {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_RECOMMENDED_REQUEST });
    try {
      const { data } = await axios.get(`/Courses/Recommended?max=5`);
      dispatch({
        type: LOAD_RECOMMENDED_SUCCESS,
        payload: {
          recommemded: data,
        },
      });
    } catch (err) {
      dispatch({ type: LOAD_RECOMMENDED_FAILURE });
    }
  };
}
function loadTopRate() {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_TOPRATE_REQUEST });
    try {
      const { data } = await axios.get(`/Courses/TopRated?max=5`);
      dispatch({
        type: LOAD_TOPRATE_SUCCESS,
        payload: {
          toprate: data,
        },
      });
    } catch (err) {
      dispatch({ type: LOAD_TOPRATE_FAILURE });
    }
  };
}
function loadCurriculumsView(id: number) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_CURRICULUMVIEW_REQUEST });
    try {
      await axios.put(`/Curriculums/${id}/ViewCount`);
      dispatch({
        type: LOAD_CURRICULUMVIEW_SUCCESS,
      });
    } catch (err) {
      dispatch({ type: LOAD_CURRICULUMVIEW_FAILURE });
    }
  };
}

function loadCurriculums(text: string) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_CURRICULUMS_REQUEST });
    try {
      const { data } = await axios.get(`/Curriculums?filter=${text}`);
      dispatch({
        type: LOAD_CURRICULUMS_SUCCESS,
        payload: {
          curriculums: data,
        },
      });
    } catch (err) {
      dispatch({ type: LOAD_CURRICULUMS_FAILURE });
    }
  };
}

function loadCurriculum(id: number) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_CURRICULUM_REQUEST });
    try {
      const { data } = await axios.get(`/Curriculums/${id}`);
      dispatch({
        type: LOAD_CURRICULUM_SUCCESS,
        payload: {
          curriculum: data,
        },
      });
    } catch (err) {
      dispatch({ type: LOAD_CURRICULUM_FAILURE });
    }
  };
}
function loadCurriculumsCourse(id: number) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_CURRICULUMCOURSE_REQUEST });
    try {
      const { data } = await axios.get(`/Curriculums/${id}/Courses`);
      dispatch({
        type: LOAD_CURRICULUMCOURSE_SUCCESS,
        payload: {
          curriculumscourse: data,
        },
      });
    } catch (err) {
      dispatch({ type: LOAD_CURRICULUMCOURSE_FAILURE });
    }
  };
}
function loadCourseView(id?: number) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_COURSEVIEW_REQUEST });
    try {
      await axios.put(`/Courses/${id}/ViewCount`);
      dispatch({
        type: LOAD_COURSEVIEW_SUCCESS,
      });
    } catch (err) {
      dispatch({ type: LOAD_COURSEVIEW_FAILURE });
    }
  };
}

function loadCourses(text: string) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_COURSES_REQUEST });
    try {
      const { data } = await axios.get(`/Courses?filter=${text}`);
      dispatch({
        type: LOAD_COURSES_SUCCESS,
        payload: {
          courses: data,
        },
      });
    } catch (err) {
      dispatch({ type: LOAD_COURSES_FAILURE });
    }
  };
}
function loadCourse(id: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_COURSE_REQUEST });
    try {
      const { data } = await axios.get(`/Courses/${id}`);
      dispatch({
        type: LOAD_COURSE_SUCCESS,
        payload: {
          course: data,
        },
      });
    } catch (err) {
      dispatch({ type: LOAD_COURSE_FAILURE });
    }
  };
}



function loadCourseCategory() {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_COURSESCATEGORY_REQUEST });
    try {
      const { data } = await axios.get(`/CourseCategories`);
      dispatch({
        type: LOAD_COURSESCATEGORY_SUCCESS,
        payload: {
          categories: data,
        },
      });
    } catch (err) {
      dispatch({ type: LOAD_COURSESCATEGORY_FAILURE });
    }
  };
}
function loadCourseCategories(id: any) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_COURSESCATEGORIES_REQUEST });
    try {
      const { data } = await axios.get(`/CourseCategories/${id}/Courses`);
      dispatch({
        type: LOAD_COURSESCATEGORIES_SUCCESS,
        payload: {
          courseCategories: data,
        },
      });
    } catch (err) {
      dispatch({ type: LOAD_COURSESCATEGORIES_FAILURE });
    }
  };
}

export {
  LOAD_COURSESCATEGORY_REQUEST,
  LOAD_COURSESCATEGORY_SUCCESS,
  LOAD_COURSESCATEGORY_FAILURE,
  LOAD_COURSESCATEGORIES_REQUEST,
  LOAD_COURSESCATEGORIES_SUCCESS,
  LOAD_COURSESCATEGORIES_FAILURE,
  LOAD_COURSE_REQUEST,
  LOAD_COURSE_SUCCESS,
  LOAD_COURSE_FAILURE,
  LOAD_COURSES_REQUEST,
  LOAD_COURSES_SUCCESS,
  LOAD_COURSES_FAILURE,
  LOAD_COURSEVIEW_REQUEST,
  LOAD_COURSEVIEW_SUCCESS,
  LOAD_COURSEVIEW_FAILURE,
  LOAD_CURRICULUMS_REQUEST,
  LOAD_CURRICULUMS_SUCCESS,
  LOAD_CURRICULUMS_FAILURE,
  LOAD_CURRICULUM_REQUEST,
  LOAD_CURRICULUM_SUCCESS,
  LOAD_CURRICULUM_FAILURE,
  LOAD_CURRICULUMCOURSE_REQUEST,
  LOAD_CURRICULUMCOURSE_SUCCESS,
  LOAD_CURRICULUMCOURSE_FAILURE,
  LOAD_CURRICULUMVIEW_REQUEST,
  LOAD_CURRICULUMVIEW_SUCCESS,
  LOAD_CURRICULUMVIEW_FAILURE,
  LOAD_TOPRATE_REQUEST,
  LOAD_TOPRATE_SUCCESS,
  LOAD_TOPRATE_FAILURE,
  LOAD_RECOMMENDED_REQUEST,
  LOAD_RECOMMENDED_SUCCESS,
  LOAD_RECOMMENDED_FAILURE,
  loadCurriculumsCourse,
  loadCourseCategory,
  loadCourseCategories,
  loadCourse,
  loadCourseView,
  loadCurriculumsView,
  loadCurriculums,
  loadTopRate,
  loadRecommended,
  loadCourses,
  loadCurriculum,

};
