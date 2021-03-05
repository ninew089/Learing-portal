import React, { useEffect } from "react";
import CourseContainerTemplate from "../../template/CourseContainerTemplate";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";

export default function SingleLineGridList(props: { title: string }) {
  const { title } = props;
  const history = useHistory();
  const { path } = useRouteMatch();
  const filterCoursebyCategory = (title: string) => {
    history.push(`${path}/curriculum?category=${title}`);
  };
  const Next = () => {
    setTimeout(() => filterCoursebyCategory("หลักสูตร"), 1000);
  };

  useEffect(() => {
    const actionCurriculums = actions.loadCurriculums("shown");
    dispatch(actionCurriculums);
    // eslint-disable-next-line
  }, []);

  const dispatch = useDispatch();
  const { curriculums, isLoadingCurriculums } = useSelector(
    (state: any) => state.course
  );

  return (
    <CourseContainerTemplate
      name={title}
      Next={Next}
      isLoadingCourseCategories={isLoadingCurriculums}
      courseCategories={curriculums}
      isCurriculum={true}
    />
  );
}
