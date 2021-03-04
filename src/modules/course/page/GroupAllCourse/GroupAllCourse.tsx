import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";
import { CardProps } from "../../components/Course/tyscript";
import CourseCategoryTemplate from "../../template/CourseCategoryTemplate";

export default function GroupCourse() {
  const dispatch = useDispatch();
  const { courses, isLoadingCourses } = useSelector(
    (state: any) => state.course
  );
  const [postsToShow, setPostsToShow] = useState<CardProps[]>([]);
  useEffect(() => {
    const action = actions.loadCourses("all");
    dispatch(action);
    setPostsToShow([]);
    // eslint-disable-next-line
  }, []);

  return (
    <CourseCategoryTemplate
      title={"รายวิชาทั้งหมด"}
      postsToShow={postsToShow}
      setPostsToShow={setPostsToShow}
      courseCategories={courses}
      isLoadingCourseCategories={isLoadingCourses}
      isCurriculum={false}
    />
  );
}
