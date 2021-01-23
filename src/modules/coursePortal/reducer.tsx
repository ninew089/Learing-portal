import {
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
  LOAD_CURRICULUM_REQUEST,
  LOAD_CURRICULUM_SUCCESS,
  LOAD_CURRICULUM_FAILURE,
  LOAD_CURRICULUMVIEW_REQUEST,
  LOAD_CURRICULUMVIEW_SUCCESS,
  LOAD_CURRICULUMVIEW_FAILURE,
  LOAD_CURRICULUMCOURSE_REQUEST,
  LOAD_CURRICULUMCOURSE_SUCCESS,
  LOAD_CURRICULUMCOURSE_FAILURE,
  LOAD_TOPRATE_REQUEST,
  LOAD_TOPRATE_SUCCESS,
  LOAD_TOPRATE_FAILURE,
  LOAD_RECOMMENDED_REQUEST,
  LOAD_RECOMMENDED_SUCCESS,
  LOAD_RECOMMENDED_FAILURE,
  LOAD_CURRICULUMS_REQUEST,
  LOAD_CURRICULUMS_SUCCESS,
  LOAD_CURRICULUMS_FAILURE,
  LOAD_PLATFORM_REQUEST,
  LOAD_PLATFORM_SUCCESS,
  LOAD_PLATFORM_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  isLoadingCourse: false,
  isLoadingCourses: false,
  isLoadingCurriculum: false,
  isLoadingCurriculums: false,
  isLoadingToprate: false,
  isLoadingRecommemded: false,
  isLoadingCourseCategories: false,
  isError: true,
  courseCategories: [],
  categories: [],
  course: [],
  courses: [],
  curriculums: [],
  curriculum: [],
  curriculumscourse: [],
  toprate: [],
  recommemded: [],
  isErrorCourse: [],
  colorName: [
    {
      "ความรู้เกี่ยวกับราชการไทยและการเป็นข้าราชการ": "#fd1515",
      "การพัฒนากรอบความคิด(Mindset)": "#fd156a",
      "ทักษะเชิงภาวะผู้นำ": "#e253e4",
      "ความรู้ด้านการบริหารงานและทรัพยากรบุคคล": "#5e53e4",
      "กฎหมายและระเบียบราชการ": "#15c7fd",
      "ทักษะด้านภาษา": "#46119a",
      "ทักษะเชิงยุทธศาสตร์": "#2ab311",
      "ทักษะการเขียนหนังสือราชการ": "#f9b122",
    }
  ],
  colorCategory: ["#fd1515", "#fd156a", "#e253e4", "#5e53e4", "#15c7fd", "#46119a", "#2ab311", "#fd8b15", "#f9b122"],
  categoryImg: [
    { title: "การบริหารงาน ก.พ.", img: "https://learn.ocsc.info/learning-portal/static/media/category/1.jpg" },
    { title: "การบริหารทรัพยากรบุคคล", img: "https://learn.ocsc.info/learning-portal/static/media/category/2.jpg" },
    { title: "กฎหมายและระเบียบราชการ", img: "https://learn.ocsc.info/learning-portal/static/media/category/3.jpg" },
    { title: "การเขียนหนังสือราชการ", img: "https://learn.ocsc.info/learning-portal/static/media/category/4.jpg" },
    { title: "สังคม (Soft Skill)", img: "https://learn.ocsc.info/learning-portal/static/media/category/5.jpg" },
    { title: "ดิจิทัล", img: "https://learn.ocsc.info/learning-portal/static/media/category/6.jpg" },
    { title: "ภาษา", img: "https://learn.ocsc.info/learning-portal/static/media/category/7.jpg" },
    { title: "ภาษา", img: "https://learn.ocsc.info/learning-portal/static/media/category/7.jpg" },
  ],
  platform: []
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case LOAD_PLATFORM_REQUEST:
      return { ...state, platform: [] };
    case LOAD_PLATFORM_SUCCESS:
      return {
        ...state,
        platform: action.payload.platform,
        isError: true,
      };
    case LOAD_PLATFORM_FAILURE:
      return { ...state, isError: false };

    case LOAD_RECOMMENDED_REQUEST:
      return { ...state, isLoadingRecommemded: true, recommemded: [] };
    case LOAD_RECOMMENDED_SUCCESS:
      return {
        ...state,
        isLoadingRecommemded: false,
        recommemded: action.payload.recommemded,
        isError: true,
      };
    case LOAD_RECOMMENDED_FAILURE:
      return { ...state, isLoadingRecommemded: false, isError: false, isErrorCourse: action.payload.isErrorCourse };

    case LOAD_TOPRATE_REQUEST:
      return { ...state, isLoadingToprate: true, toprate: [] };
    case LOAD_TOPRATE_SUCCESS:
      return {
        ...state,
        isLoadingToprate: false,
        toprate: action.payload.toprate,
        isError: true,
      };
    case LOAD_TOPRATE_FAILURE:
      return { ...state, isLoadingToprate: false, isError: false, isErrorCourse: action.payload.isErrorCourse };

    case LOAD_COURSESCATEGORY_REQUEST:
      return { ...state, isLoading: true, categories: [] };
    case LOAD_COURSESCATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload.categories,
        isError: true,
      };
    case LOAD_COURSESCATEGORY_FAILURE:
      return { ...state, isLoading: false, isError: false, isErrorCourse: action.payload.isErrorCourse };

    case LOAD_COURSESCATEGORIES_REQUEST:
      return {
        ...state,
        isLoadingCourseCategories: true,
        courseCategories: [],

      };
    case LOAD_COURSESCATEGORIES_SUCCESS:
      return {
        ...state,
        isLoadingCourseCategories: false,
        courseCategories: action.payload.courseCategories,
        isError: true,
      };

    case LOAD_COURSESCATEGORIES_FAILURE:
      return { ...state, isLoadingCourseCategories: false, isError: false, isErrorCourse: action.payload.isErrorCourse };

    case LOAD_COURSE_REQUEST:
      return { ...state, isLoadingCourse: true, course: [] };
    case LOAD_COURSE_SUCCESS:
      return {
        ...state,
        isLoadingCourse: false,
        course: action.payload.course,
        isError: true,
      };
    case LOAD_COURSE_FAILURE:
      return { ...state, isLoadingCourse: false, isError: false, isErrorCourse: action.payload.isErrorCourse };

    case LOAD_COURSES_REQUEST:
      return { ...state, isLoadingCourses: true, courses: [] };
    case LOAD_COURSES_SUCCESS:
      return {
        ...state,
        isLoadingCourses: false,
        courses: action.payload.courses,
        isError: true,
      };
    case LOAD_COURSES_FAILURE:
      return { ...state, isLoadingCourses: false, isError: false, isErrorCourse: action.payload.isErrorCourse };
    case LOAD_COURSEVIEW_REQUEST:
      return {
        ...state,
        isLoading: true,


      };
    case LOAD_COURSEVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOAD_COURSEVIEW_FAILURE:
      return { ...state, isLoading: false, isError: false, isErrorCourse: action.payload.isErrorCourse };

    case LOAD_CURRICULUM_REQUEST:
      return { ...state, isLoadingCurriculum: true, curriculum: [] };
    case LOAD_CURRICULUM_SUCCESS:
      return {
        ...state,
        isLoadingCurriculum: false,
        curriculum: action.payload.curriculum,
        isError: true,
      };
    case LOAD_CURRICULUM_FAILURE:
      return { ...state, isLoadingCurriculum: false, isError: false, isErrorCourse: action.payload.isErrorCourse };
    case LOAD_CURRICULUMS_REQUEST:
      return { ...state, isLoadingCurriculums: true, curriculums: [] };
    case LOAD_CURRICULUMS_SUCCESS:
      return {
        ...state,
        isLoadingCurriculums: false,
        curriculums: action.payload.curriculums,
        isError: true,
      };
    case LOAD_CURRICULUMS_FAILURE:
      return { ...state, isLoadingCurriculums: false, isError: false, isErrorCourse: action.payload.isErrorCourse };

    case LOAD_CURRICULUMCOURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
        curriculumscourse: [],

      };
    case LOAD_CURRICULUMCOURSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        curriculumscourse: action.payload.curriculumscourse,
        isError: true,
      };
    case LOAD_CURRICULUMCOURSE_FAILURE:
      return { ...state, isLoading: false, isError: false, isErrorCourse: action.payload.isErrorCourse };

    case LOAD_CURRICULUMVIEW_REQUEST:
      return {
        ...state,
        isLoading: true,


      };
    case LOAD_CURRICULUMVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOAD_CURRICULUMVIEW_FAILURE:
      return { ...state, isLoading: false, isError: false, isErrorCourse: action.payload.isErrorCourse };

    default:
      return state;
  }
}
