import React, { useEffect, useState } from "react";
import {
  Grid,
  Divider,
  Container,
  CircularProgress,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { useLocation } from "react-router-dom";
import { parse } from "query-string";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";
import searchNotfound from "assets/images/nodata.webp";
import Search from "./SearchPage";

import CourseDetail from "../../components/Course/CourseDetails";
import Header from "../../share/Header";
import SelectCategory from "../../share/SelectCategory";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "20px",
  },
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
export default function GroupCourse(props: any) {
  const dispatch = useDispatch();
  const { courses, isLoadingCourses } = useSelector(
    (state: any) => state.course
  );
  const classes = useStyles();
  const { search } = useLocation();
  const { q } = parse(search);
  const postsPerPage = 8;
  const [postsToShow, setPostsToShow] = useState<any>([]);
  const [next, setNext] = useState(8);
  const slicedPosts = courses.filter(
    (item: any) =>
      item.name.toLowerCase().includes(q) ||
      item.code.toLowerCase().includes(q) ||
      item.learningTopic.toLowerCase().includes(q) ||
      item.learningObjective.toLowerCase().includes(q) ||
      item.targetGroup.toLowerCase().includes(q) ||
      //@ts-ignore
      item.platformName.toLowerCase().includes(q)
  );
  const loopWithSlice = (start: any, end: any) => {
    const slicedPosts = courses
      .filter(
        (item: any) =>
          item.name.toLowerCase().includes(q) ||
          item.code.toLowerCase().includes(q) ||
          item.learningTopic.toLowerCase().includes(q) ||
          item.learningObjective.toLowerCase().includes(q) ||
          item.targetGroup.toLowerCase().includes(q) ||
          //@ts-ignore
          item.platformName.toLowerCase().includes(q)
      )
      .slice(start, end);
    setPostsToShow([...postsToShow, ...slicedPosts]);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
    // eslint-disable-next-line
  }, [isLoadingCourses]);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };
  useEffect(() => {
    setPostsToShow([]);
    const action = actions.loadCourses("all");
    dispatch(action);
    // eslint-disable-next-line
  }, [q]);

  return (
    <>
      <Header text={"ค้นหารายวิชา"} />

      <div className={classes.root}>
        <Search />

        <Grid
          container
          className={classes.content}
          direction="row"
          alignItems="center"
          justify={"space-between"}
        >
          <h2>ค้นหา {q}</h2>
          <SelectCategory />
        </Grid>
        <Divider className={classes.divider} />

        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            alignItems="center"
            justify={isLoadingCourses ? "center" : "flex-start"}
            spacing={3}
          >
            {isLoadingCourses && (
              <CircularProgress
                color="secondary"
                className={classes.circular}
              />
            )}
            {postsToShow.length === 0 && !isLoadingCourses && (
              <Grid
                container
                direction="row"
                alignItems="center"
                justify={"center"}
              >
                <h2>ขออภัยค่ะ หารายวิชาไม่พบ {q}</h2>

                <img src={searchNotfound} alt="" width="400px" height="400px" />
              </Grid>
            )}
            {postsToShow.map((item: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={item.name}>
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
              </Grid>
            ))}
          </Grid>
          {!isLoadingCourses && next < slicedPosts.length && (
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
