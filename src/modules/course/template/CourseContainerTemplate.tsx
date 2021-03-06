import React from "react";
import { Grid, Divider, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CourseCarousel from "modules/compoenent/atomic/Carousel";
import Skeleton from "@material-ui/lab/Skeleton";
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
export default function SingleLineGridList({
  name,
  Next,
  isLoadingCourseCategories,
  courseCategories,
  isCurriculum,
}: {
  name: any;
  Next: any;
  isLoadingCourseCategories: any;
  courseCategories: any;
  isCurriculum: any;
}) {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <h3 className={classes.line}>{name}</h3>{" "}
        <Button onClick={Next} style={{ color: "#0f1626" }}>
          ดูเพิ่มเติม
        </Button>
      </Grid>
      <Divider style={{ marginBottom: 20 }} />
      <Grid
        container
        direction="row"
        alignItems="center"
        justify={"center"}
        style={{ paddingRight: 10, paddingLeft: 10 }}
      >
        {isLoadingCourseCategories ? (
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={3}>
              <Skeleton animation="wave" height={240} />
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </Grid>
            <Grid item xs={3}>
              <Skeleton animation="wave" height={240} />
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </Grid>
            <Grid item xs={3}>
              <Skeleton animation="wave" height={240} />
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </Grid>
          </Grid>
        ) : (
          <CourseCarousel
            isCurriculum={isCurriculum}
            detail={courseCategories}
          />
        )}
      </Grid>
    </>
  );
}
