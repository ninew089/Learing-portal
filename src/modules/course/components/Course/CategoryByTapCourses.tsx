import React, { useEffect } from "react";

import { useHistory, useRouteMatch, useLocation } from "react-router-dom";

import queryString from "query-string";
import CourseContainerTemplate from "../../template/CourseContainerTemplate";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";

export default function SingleLineGridList(props: { id: number }) {
  const { id } = props;

  const history = useHistory();
  const { path } = useRouteMatch();
  const { search } = useLocation();
  const parsed = queryString.parse(search);

  const filterCoursebyCategory = (title: number, name: any) => {
    history.push(`${path}/course?category=${title}&name=${name}`);
  };
  const Next = () => {
    setTimeout(
      () =>
        filterCoursebyCategory(
          id + 1,
          parsed.name !== undefined ? parsed.name : "การพัฒนาองค์ความรู้"
        ),
      1000
    );
  };

  const dispatch = useDispatch();
  const { courseCategories, isLoadingCourseCategories } = useSelector(
    (state: any) => state.course
  );

  useEffect(() => {
    const action = actions.loadCourseCategories(
      parsed.category === undefined ? 1 : parsed.category
    );
    dispatch(action);
    // eslint-disable-next-line
  }, [id]);

  return (
    <CourseContainerTemplate
      name={parsed.name ? parsed.name : "การพัฒนาองค์ความรู้"}
      Next={Next}
      isLoadingCourseCategories={isLoadingCourseCategories}
      courseCategories={courseCategories}
      isCurriculum={false}
    />
  );
}
