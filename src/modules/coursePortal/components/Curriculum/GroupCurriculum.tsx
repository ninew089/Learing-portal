import React, { useEffect, Suspense, lazy } from "react";
import { Grid, Divider, Container, } from "@material-ui/core";
import queryString from "query-string";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../../actions"
import { useLocation } from "react-router-dom";
import Header from "../../share/Header"
import SelectCategory from "../../share/SelectCategory"
import { makeStyles } from "@material-ui/core/styles";


const CourseDetail = lazy(() => import('./CurriculumDetail'));

const useStyles = makeStyles((theme) => ({
  content: {
    paddingRight: "8vw",
    paddingLeft: "8vw",
  },
  divider: {
    marginBottom: 20
  },

}));

export default function SingleLineGridList(props: any) {
  const { search } = useLocation();
  const { category } = queryString.parse(search);
  const dispatch = useDispatch();
  const classes = useStyles()
  const { curriculums, isLoadingCurriculums } = useSelector((state: any) => state.course);


  useEffect(() => {
    const action = actions.loadCurriculums("all")
    dispatch(action)
    // eslint-disable-next-line
  }, [search])


  const renderLoader = () =>
    <div></div>


  return (
    < Suspense fallback={renderLoader()} >
      <Header text={"หลักสูตร"} />
      <div>
        <Grid container direction="row" alignItems="center">

          <Grid container className={classes.content} direction="row" alignItems="center" justify={"space-between"} >

            <h2>{category}</h2>
            <SelectCategory />

          </Grid>
        </Grid>
        <Divider style={{ marginBottom: 20 }} />

        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            alignItems="center"
            justify={isLoadingCurriculums ? "center" : "flex-start"}
            spacing={3}
          >
            {
              curriculums.map((item: any, index: number) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                  <CourseDetail
                    key={index}
                    id={item.id}
                    assessment={item.assessment}
                    targetGroup={item.targetGroup}
                    learningTopic={item.learningTopic}
                    learningObjective={item.learningObjective}
                    courseCategoryId={item.courseCategoryId}
                    thumbnail={item.thumbnail}
                    viewCount={item.viewCount}
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
    </ Suspense>
  );
}
