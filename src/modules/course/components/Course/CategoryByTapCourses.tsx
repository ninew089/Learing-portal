import React, { useEffect, Suspense, lazy } from "react";
import {
  Grid,
  Divider,
  Box,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import queryString from "query-string";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";

const CourseCarousel = lazy(
  () => import("modules/compoenent/atomic/Carousel/Carousel")
);

export default function SingleLineGridList(props: { id: number }) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      line: {
        display: "inline-block",
        borderBottom: `3px solid ${theme.palette.secondary.main}`,
        paddingBottom: "2px",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "200px",
        },
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
  const { id } = props;

  const history = useHistory();
  const { path } = useRouteMatch();
  const { search } = useLocation();
  const parsed = queryString.parse(search);

  const filterCoursebyCategory = (title: number, name: any) => {
    history.push(`${path}/course?category=${title}&name=${name}`);
  };
  const Next = () => {
    setTimeout(
      () =>
        filterCoursebyCategory(
          id + 1,
          parsed.name !== undefined
            ? parsed.name
            : "ความรู้เกี่ยวกับราชการไทยและการเป็นข้าราชการ"
        ),
      1000
    );
  };

  const classes = useStyles();

  const dispatch = useDispatch();
  const { courseCategories, isLoadingCourseCategories } = useSelector(
    (state: any) => state.course
  );

  const renderLoader = () => <div></div>;

  useEffect(() => {
    const action = actions.loadCourseCategories(
      parsed.category === undefined ? 1 : parsed.category
    );
    dispatch(action);
    // eslint-disable-next-line
  }, [id]);

  return (
    <Box className={classes.box}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <h3 className={classes.line}>
          {parsed.name
            ? parsed.name
            : "ความรู้เกี่ยวกับราชการไทยและการเป็นข้าราชการ"}
        </h3>{" "}
        <Button onClick={Next} style={{ color: "#0f1626" }}>
          ดูเพิ่มเติม
        </Button>
      </Grid>
      <Divider style={{ marginBottom: 20 }} />
      <Grid container direction="row" alignItems="center" justify={"center"}>
        <Suspense fallback={renderLoader()}>
          {isLoadingCourseCategories ? (
            <CircularProgress color="secondary" style={{ margin: 20 }} />
          ) : (
            <CourseCarousel isCurriculum={false} detail={courseCategories} />
          )}
        </Suspense>
      </Grid>
    </Box>
  );
}
