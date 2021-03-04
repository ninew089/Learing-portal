import React, { useEffect, useState } from "react";
import {
  Grid,
  Divider,
  Container,
  CircularProgress,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Header from "modules/course/share/Header";
import SelectCategory from "modules/course/share/SelectCategory";
import CourseDetail from "modules/course/components/Course/CourseDetails";
import CurriculumDetail from "modules/course/components/Curriculum/CurriculumDetail";
const useStyles = makeStyles((theme) => ({
  content: {
    paddingRight: "8vw",
    paddingLeft: "8vw",
  },
  divider: {
    marginBottom: 20,
  },
  circular: {
    marginTop: 20,
  },
  button: {
    background: theme.palette.primary.dark,
    borderRadius: 40,
    padding: "15px 30px 15px 30px",
    margin: 10,
  },
}));

export default function CourseCategoryTemplate({
  title,
  courseCategories,
  isLoadingCourseCategories,
  postsToShow,
  setPostsToShow,
  isCurriculum,
}: {
  title: any;
  courseCategories: any;
  isLoadingCourseCategories: any;

  postsToShow: any;
  setPostsToShow: any;
  isCurriculum: boolean;
}) {
  const classes = useStyles();
  const postsPerPage = 8;
  const [next, setNext] = useState(8);
  const loopWithSlice = (start: any, end: any) => {
    const slicedPosts = courseCategories.slice(start, end);

    setPostsToShow([...postsToShow, ...slicedPosts]);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
    // eslint-disable-next-line
  }, [isLoadingCourseCategories]);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  return (
    <>
      <Header text={"รายวิชา"} />
      <div>
        <Grid container direction="row" alignItems="center">
          <Grid
            container
            className={classes.content}
            direction="row"
            alignItems="center"
            justify={"space-between"}
          >
            <h2>{title}</h2>
            <SelectCategory />
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: 20 }} />

        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            alignItems="center"
            justify={isLoadingCourseCategories ? "center" : "flex-start"}
            spacing={3}
          >
            {isLoadingCourseCategories && (
              <CircularProgress
                color="secondary"
                className={classes.circular}
              />
            )}

            {postsToShow.map((item: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={item.name}>
                {isCurriculum ? (
                  <CurriculumDetail
                    key={index}
                    id={item.id}
                    learningTopic={item.learningTopic}
                    learningObjective={item.learningObjective}
                    courseCategoryId={item.courseCategoryId}
                    thumbNail={item.thumbNail}
                    viewCount={item.viewCount}
                    assessment={item.assessment}
                    targetGroup={item.targetGroup}
                    point={item.satisfactionSum / item.satisfactionCount}
                    satisfactionCount={item.satisfactionCount}
                    link={item.link}
                    code={item.code}
                    name={item.name}
                    platformlogo={item.platformlogo}
                    platformName={item.platformName}
                  />
                ) : (
                  <CourseDetail
                    key={index}
                    id={item.id}
                    learningTopic={item.learningTopic}
                    learningObjective={item.learningObjective}
                    courseCategoryId={item.courseCategoryId}
                    thumbNail={item.thumbNail}
                    viewCount={item.viewCount}
                    assessment={item.assessment}
                    targetGroup={item.targetGroup}
                    point={item.satisfactionSum / item.satisfactionCount}
                    satisfactionCount={item.satisfactionCount}
                    link={item.link}
                    code={item.code}
                    name={item.name}
                    platformlogo={item.platformlogo}
                    platformName={item.platformName}
                    courseCategory={item.courseCategory}
                  />
                )}
              </Grid>
            ))}
          </Grid>
          {!isLoadingCourseCategories && next < courseCategories.length && (
            <Grid
              container
              direction="row"
              alignItems="center"
              justify={"center"}
              spacing={3}
            >
              <Button
                onClick={handleShowMorePosts}
                color="secondary"
                className={classes.button}
              >
                ดูเพิ่มเติม
              </Button>
            </Grid>
          )}
        </Container>
      </div>
    </>
  );
}
