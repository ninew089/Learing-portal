import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";
import { useRouteMatch, useHistory } from "react-router-dom";

import CourseContainerTemplate from "../../template/CourseContainerTemplate";
export default function GroupCourse() {
  const { path } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const { courses, isLoadingCourses } = useSelector(
    (state: any) => state.course
  );

  const handlerSeeAll = () => {
    history.push(`${path}/courses`);
  };

  useEffect(() => {
    const action = actions.loadCourses("shown");
    dispatch(action);
    // eslint-disable-next-line
  }, []);

  return (
    <CourseContainerTemplate
      name={"รายวิชาทั้งหมด"}
      Next={handlerSeeAll}
      isLoadingCourseCategories={isLoadingCourses}
      courseCategories={courses}
      isCurriculum={false}
    />
  );
}
