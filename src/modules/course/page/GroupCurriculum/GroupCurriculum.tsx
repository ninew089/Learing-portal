import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";
import { useLocation } from "react-router-dom";

import CourseCategoryTemplate from "../../template/CourseCategoryTemplate";

export default function SingleLineGridList(props: any) {
  const { search } = useLocation();

  const dispatch = useDispatch();
  const { curriculums, isLoadingCurriculums } = useSelector(
    (state: any) => state.course
  );
  const [postsToShow, setPostsToShow] = useState<any>([]);

  useEffect(() => {
    const action = actions.loadCurriculums("all");
    dispatch(action);
    setPostsToShow([]);

    // eslint-disable-next-line
  }, [search]);

  return (
    <CourseCategoryTemplate
      title={"หลักสูตร"}
      postsToShow={postsToShow}
      setPostsToShow={setPostsToShow}
      courseCategories={curriculums}
      isLoadingCourseCategories={isLoadingCurriculums}
      isCurriculum={true}
    />
  );
}
