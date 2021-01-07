import React, { useEffect, Suspense, lazy } from "react";
import { Grid, Divider, Container } from "@material-ui/core";
import queryString from "query-string";
import categoryFormat from "utils/categoryFormat"
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

}));


export default function GroupCourse(props: any) {
  const { search } = useLocation();
  const { category } = queryString.parse(search);
  const dispatch = useDispatch();
  const parsed = queryString.parse(search)
  const { courseCategories, isLoadingCourseCategories } = useSelector((state: any) => state.course);
  const classes = useStyles()


  const renderLoader = () =>
    <div></div>

  useEffect(() => {
    const action = actions.loadCourseCategories(parsed.category === undefined ? 1 : parsed.category)
    dispatch(action)
    // eslint-disable-next-line
  }, [parsed.category])

  return (
    <Suspense fallback={renderLoader()}>
      <Header text={"รายวิชา"} />
      <div>
        <Grid container direction="row" alignItems="center">

          <Grid container className={classes.content} direction="row" alignItems="center" justify={"space-between"} >

            <h2>{categoryFormat(category)}</h2>
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
            {courseCategories.map((item: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CourseDetail
                  key={index}
                  id={item.id}
                  learningTopic={item.learningTopic}
                  learningObjective={item.learningObjective}
                  courseCategoryId={item.courseCategoryId}
                  thumbnail={item.thumbnail}
                  viewCount={item.viewCount}
                  assessment={item.assessment}
                  targetGroup={item.targetGroup}
                  point={(item.satisfactionSum) / item.satisfactionCount}
                  satisfactionCount={item.satisfactionCount}
                  link={item.link}
                  code={item.code}
                  name={item.name}
                  platformId={item.platformId}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </Suspense>
  );
}
