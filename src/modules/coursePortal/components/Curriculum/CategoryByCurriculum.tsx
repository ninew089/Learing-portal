import React, { useEffect, lazy, Suspense } from "react";
import { Grid, Divider, Box, Button } from "@material-ui/core";

import { useHistory, useRouteMatch } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../../actions";


const CurriculumCarousel = lazy(() => import('shared/Carousel/Carousel'));

export default function SingleLineGridList(props: any) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      line: {
        display: "inline-block",
        borderBottom: `3px solid ${theme.palette.secondary.main}`,
        paddingBottom: "2px",
      },
      button: {
        float: "right",
      },
      box: {
        borderRadius: "0 0 10px 10px",
        paddingRight: 8,
        marginBottom: 10,
        paddingBottom: 10,
        width: "100%",
        marginTop: 10,
      },
    })
  );


  const { title } = props;
  const history = useHistory();
  const { path } = useRouteMatch();
  const filterCoursebyCategory = (title: string) => {
    history.push(`${path}/curriculum?category=${title}`);
  };
  const Next = () => {
    setTimeout(() => filterCoursebyCategory("หลักสูตร"), 1000);
  };
  const classes = useStyles();

  useEffect(() => {
    const actionCurriculums = actions.loadCurriculums("shown")
    dispatch(actionCurriculums)
    // eslint-disable-next-line
  }, [])

  const dispatch = useDispatch();
  const { curriculums } = useSelector((state: any) => state.course);


  const renderLoader = () =>
    <div></div>

  return (

    <Suspense fallback={renderLoader()}>
      <Box className={classes.box}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"

        >
          <Box
            p={2}
            fontWeight={700}
            style={{ color: "rgb(19 39 64)" }}
            fontSize="h4.fontSize"
          >
            {title}
          </Box>
          <Button onClick={Next} style={{ color: "#0f1626" }}>

            ดูเพิ่มเติม
        </Button>
        </Grid>
        <Divider style={{ marginBottom: 20 }} />

        <Grid container direction="row" alignItems="center" justify={"center"}>
          <CurriculumCarousel isCurriculum={true} detail={curriculums} />

        </Grid>
      </Box>
    </Suspense>
  );
}
