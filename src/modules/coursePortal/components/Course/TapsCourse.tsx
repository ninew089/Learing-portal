import React, { useEffect, Suspense, lazy } from "react";
import { Box, Grid, IconButton, useMediaQuery } from "@material-ui/core";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { category } from "data/category";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../../actions"
import { parse } from "query-string"

const Courses = lazy(() => import('./CategoryByTapCourses'));


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        width: 80,
      },
      [theme.breakpoints.only("xs")]: {
        width: `100%`,
      },
      [theme.breakpoints.only("sm")]: {
        width: `100%`,
      },
    },
    menus: {
      width: "100%",
      borderRadius: "0 0 10px 10px",
      background: "#ffffff",
      [theme.breakpoints.only("xs")]: {
        justify: "center",
        placeContent: "center",
      },
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      [theme.breakpoints.only("xs")]: {
        width: theme.spacing(6),
        height: theme.spacing(6),
      },
    },
    text: {
      overflow: "hidden",
      display: "-webkit-box",
      textOverflow: "ellipsis",
      fontSize: 10,
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
    },
    textCategory: {
      overflow: "hidden",
      display: "-webkit-box",
      textOverflow: "ellipsis",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
    },
    line: {
      display: "inline-block",
      borderBottom: `3px solid ${theme.palette.secondary.main}`,
      paddingBottom: "2px",
    },
    button: {
      float: "right",
    },
    box: { color: "rgb(19 39 64)" },
  })
);

export default function PointNavigationMenu({ title }: { title: string }) {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const history = useHistory();
  const { search } = useLocation()
  const categoryIndex = parse(search)



  const { path } = useRouteMatch();
  const filterCoursebyCategory = (title: string) => {
    history.push(`${path}?category=${title}`);
  };
  const handleClick = (i: any) => (e: React.SyntheticEvent) => {
    filterCoursebyCategory(i + 1);
    setIndex(i);
  };

  const Select = (number: number) => {
    if (number === index) {
      return "#f9b122";
    }
  };
  const SelectWeight = (number: number) => {
    if (number === index) {
      return "bold";
    }
  };
  const renderLoader = () =>
    <div></div>
  const dispatch = useDispatch();
  const { categories } = useSelector((state: any) => state.course);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("lg"))
  useEffect(() => {
    const action = actions.loadCourseCategory()
    dispatch(action)
    console.log(categoryIndex.category)
    if (categoryIndex.category !== null) {
      setIndex(parseInt(`${categoryIndex.category}`) - 1)
    } if (categoryIndex.category === undefined) {
      setIndex(0)
    }



    // eslint-disable-next-line
  }, [])


  return (
    <>
      <Box className={classes.box} fontWeight={700} fontSize="h4.fontSize">
        {title}
      </Box>


      <Grid container direction="row" justify={sm ? "center" : "flex-start"} alignItems="center">
        {categories.map((item: any, i: number) => (
          <Grid item xs={3} sm={2} lg={1}>
            <IconButton
              onClick={handleClick(i)}
              className={classes.root}
              disableRipple
            >
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
              >
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                >

                  < div style={{
                    background: `url('${category[i].img}')`,
                    backgroundSize: "cover",

                    padding: "30px"
                  }} />
                </Grid>
                <Grid
                  className={classes.text}
                  style={{
                    color: Select(i),
                    fontWeight: SelectWeight(i),
                  }}
                >
                  {item.name}
                </Grid>
              </Grid>
            </IconButton>
          </Grid>
        ))}
      </Grid>
      <Suspense fallback={renderLoader()}>
        <Courses id={index} />


      </Suspense>
    </>
  );
}
