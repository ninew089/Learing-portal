import React, { useEffect } from "react";
import { Box, Grid, IconButton, useMediaQuery } from "@material-ui/core";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";
import { parse } from "query-string";
import Courses from "./CategoryByTapCourses";

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
  const { search } = useLocation();
  const categoryIndex = parse(search);

  const { path } = useRouteMatch();
  const filterCoursebyCategory = (title: string, name: string) => {
    history.push(`${path}?category=${title}&name=${name}`);
  };
  const handleClick = (i: any, name: any) => (e: React.SyntheticEvent) => {
    filterCoursebyCategory(i + 1, name);
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

  const dispatch = useDispatch();
  const { categories } = useSelector((state: any) => state.course);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("lg"));
  useEffect(() => {
    const action = actions.loadCourseCategory();
    dispatch(action);
    if (categoryIndex.category !== null) {
      setIndex(parseInt(`${categoryIndex.category}`) - 1);
    }
    if (categoryIndex.category === undefined) {
      setIndex(0);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Grid
        container
        direction="row"
        justify={"flex-start"}
        alignItems="center"
      >
        <Box className={classes.box} fontWeight={600} fontSize="h4.fontSize">
          {title}
        </Box>
      </Grid>

      <Grid
        container
        direction="row"
        justify={sm ? "center" : "flex-start"}
        alignItems="center"
      >
        {categories.map((item: any, i: number) => (
          <Grid item xs={3} sm={2} lg={1} key={i}>
            <IconButton
              onClick={handleClick(i, item.name)}
              className={classes.root}
              disableRipple
              key={i}
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
                  <div
                    style={{
                      background: `url('${item.thumbnail}')`,
                      backgroundSize: "cover",

                      padding: "30px",
                    }}
                  />
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
      <Courses id={index} />
    </>
  );
}
