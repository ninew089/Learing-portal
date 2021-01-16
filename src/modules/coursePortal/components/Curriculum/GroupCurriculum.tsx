import React, { useEffect, Suspense, lazy, useState } from "react";
import { Grid, Divider, Container, CircularProgress, Button } from "@material-ui/core";
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
  }, circular: {
    marginTop: 20
  }, button: {
    background: theme.palette.primary.main,
    borderRadius: 40,
    padding: '15px 30px 15px 30px',
    margin: 10
  }

}));

export default function SingleLineGridList(props: any) {
  const { search } = useLocation();
  const { category } = queryString.parse(search);
  const dispatch = useDispatch();
  const classes = useStyles()
  const { curriculums, isLoadingCurriculums } = useSelector((state: any) => state.course);

  const postsPerPage = 8;
  const [postsToShow, setPostsToShow] = useState<any>([]);
  const [next, setNext] = useState(8);
  const loopWithSlice = (start: any, end: any) => {
    const slicedPosts = curriculums.slice(start, end);
    setPostsToShow([...postsToShow, ...slicedPosts]);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
    // eslint-disable-next-line
  }, [isLoadingCurriculums]);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };
  useEffect(() => {
    setPostsToShow([])
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
            {isLoadingCurriculums && <CircularProgress color="secondary" className={classes.circular} />}

            {
              postsToShow.map((item: any, index: number) => (
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
          {!isLoadingCurriculums && next < curriculums.length &&
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
    </ Suspense>
  );
}
