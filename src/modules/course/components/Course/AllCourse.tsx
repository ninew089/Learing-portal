import React, { useEffect } from "react";
import {
  Grid,
  Divider,
  Box,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";
import { useRouteMatch, useHistory } from "react-router-dom";
import Carousel from "modules/compoenent/atomic/Carousel";

export default function GroupCourse() {
  const { path } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const { courses, isLoadingCourses } = useSelector(
    (state: any) => state.course
  );

  const handlerSeeAll = () => {
    history.push(`${path}/courses`);
  };

  useEffect(() => {
    const action = actions.loadCourses("shown");
    dispatch(action);
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <h2>รายวิชาทั้งหมด</h2>
        <Button onClick={handlerSeeAll}>ดูทั้งหมด</Button>
      </Grid>
      <Divider style={{ marginBottom: 20 }} />

      <Grid container direction="row" alignItems="center" justify="center">
        {isLoadingCourses ? (
          <CircularProgress color="secondary" style={{ margin: 20 }} />
        ) : (
          <Carousel detail={courses} isCurriculum={false} />
        )}
      </Grid>
    </Box>
  );
}
