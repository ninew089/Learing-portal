import React, { useEffect, Suspense, lazy, useState } from "react";
import { Grid, Divider, Container, CircularProgress, Button } from "@material-ui/core";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../../actions"
import { makeStyles } from "@material-ui/core/styles";



const Header = lazy(() => import('../../share/Header'));
const SelectCategory = lazy(() => import('../../share/SelectCategory'));
const CourseDetail = lazy(() => import('./CourseDetails'));

const useStyles = makeStyles((theme) => ({
  content: {
    paddingRight: "8vw",
    paddingLeft: "8vw",
  },
  divider: {
    marginBottom: 20
  },
  circular: {
    marginTop: 20
  }, button: {
    background: theme.palette.primary.main,
    borderRadius: 40,
    padding: '15px 30px 15px 30px',
    margin: 10
  }

}));


export default function GroupCourse() {
  const { search } = useLocation();
  const { category, name } = queryString.parse(search);
  const dispatch = useDispatch();

  const { courseCategories, isLoadingCourseCategories } = useSelector((state: any) => state.course);
  const classes = useStyles()
  const postsPerPage = 8;
  const [postsToShow, setPostsToShow] = useState<any>([]);
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
  }

  const renderLoader = () =>
    <div></div>

  useEffect(() => {

    const action = actions.loadCourseCategories(category === undefined ? 1 : category)
    dispatch(action)
    setPostsToShow([])

    // eslint-disable-next-line
  }, [category])

  return (
    <Suspense fallback={renderLoader()}>
      <Header text={"รายวิชา"} />
      <div>
        <Grid container direction="row" alignItems="center">

          <Grid container className={classes.content} direction="row" alignItems="center" justify={"space-between"} >

            <h2>{name}</h2>
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
            {isLoadingCourseCategories && <CircularProgress color="secondary" className={classes.circular} />}

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
                  point={(item.satisfactionSum) / item.satisfactionCount}
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
          {!isLoadingCourseCategories && next < courseCategories.length &&
            <Grid
              container
              direction="row"
              alignItems="center"
              justify={"center"}
              spacing={3}
            >

              <Button onClick={handleShowMorePosts} color="secondary" className={classes.button}>ดูเพิ่มเติม</Button>
            </Grid>}
        </Container>
      </div>
    </Suspense>
  );
}
