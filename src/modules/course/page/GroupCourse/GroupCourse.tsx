import React, { useEffect, useState } from "react";

import queryString from "query-string";
import { useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";

import CourseCategoryTemplate from "../../template/CourseCategoryTemplate";

export default function GroupCourse() {
  const { search } = useLocation();
  const { category, name } = queryString.parse(search);
  const dispatch = useDispatch();

  const { courseCategories, isLoadingCourseCategories } = useSelector(
    (state: any) => state.course
  );

  const [postsToShow, setPostsToShow] = useState<any>([]);

  useEffect(() => {
    const action = actions.loadCourseCategories(
      category === undefined ? 1 : category
    );
    const actionCourseAll = actions.loadCourses("shown");
    dispatch(actionCourseAll);
    dispatch(action);
    setPostsToShow([]);

    // eslint-disable-next-line
  }, [category]);

  return (
    <CourseCategoryTemplate
      title={name}
      postsToShow={postsToShow}
      setPostsToShow={setPostsToShow}
      courseCategories={courseCategories}
      isLoadingCourseCategories={isLoadingCourseCategories}
      isCurriculum={false}
    />
  );
}
