import React, { useState, lazy, Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box } from "@material-ui/core";
import numberFormat from "utils/numberFormat";

import { CardProps } from "./tyscript";
import CardMedia from "@material-ui/core/CardMedia";
import { useSelector } from "react-redux";
const Dialog = lazy(() => import("../../share/DialogCourse"));
const Rating = lazy(() => import("../../share/Rating"));

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0.5rem",
    padding: 10,
    "&:hover": {
      background: "#cccccc8a",
    },
  },
  card: {
    width: "100%",
    minHeight: "460px",
    borderRadius: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      transition: "0.4s",
      "&:hover": {
        transform: "translateY(-4px)",
      },
    },
  },
  main: {
    overflow: "hidden",
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
    zIndex: 1,
  },

  avatar: {
    width: 48,
    height: 48,
  },
  tag: {
    display: "inline-block",
    fontFamily: "'Sen', sans-serif",
    backgroundColor: "#ff5dac",
    borderRadius: "0.5rem",
    padding: "2px 0.5rem",
    color: "#fff",
    marginBottom: "0.5rem",
  },
  title: {
    marginTop: 2,
    maxWidth: "220px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#132740",
    paddingLeft: 8,
    marginRight: 8,
    marginBottom: 10,
  },
  subtitle: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    fontSize: "1rem",
    fontWeight: 500,
    color: "#132740",
    paddingLeft: 8,
    marginRight: 8,
    marginBottom: 10,
  },
  author: {
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    fontSize: "14px",
    fontWeight: 700,
    color: "#132740",
    padding: 3,
    width: 190,
    marginLeft: 8,
    marginBottom: 2,
  },
  box: {
    padding: 8,
    marginLeft: 6,
  },
  view: {
    marginRight: 10,
  },
  dot: {
    height: "10px",
    width: "10px",
    backgroundColor: "#cfcde6",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: 8,
    marginRight: 4,
  },
  rating: {
    paddingLeft: 8,
  },
  logo: {
    margin: 8,
  },
  caption: {
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    fontSize: "12px",
    color: "#434a54",
    paddingLeft: 14,
    paddingRight: 14,
  },
  category: {
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    maxWidth: "200px",
  },
  detail: {
    marginBottom: 14,
  },
  submit: {
    padding: 0,
    float: "right",
    width: "100%",
    margin: 0,
  },
  boxshadow: {
    //Horizontal Lengthpx,Vertical Lengt,Blur Radiuspx,Spread //6px -65px 2px -35px  #999999
    backgroundPosition: "center center",
    boxShadow: "1px -24px 0px -14px #aaaaaa,4px -45px 1px -25px  #999999",
    marginTop: 30,
    borderRadius: "px",
  },
  cardMedia: {
    paddingTop: "75%", // 4:3
    borderRadius: theme.shape.borderRadius,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
}));

export default function IconBreadcrumbs(props: CardProps) {
  const {
    platformlogo,
    learningObjective,
    viewCount,
    point,
    platformName,
    satisfactionCount,
    code,
    thumbNail,
    name,
    courseCategory,
  } = props;
  const classes = useStyles();
  const renderLoader = () => <div></div>;
  const [open, setOpen] = useState<boolean>(false);
  const onOpen = () => {
    setOpen(true);
  };

  const { colorName } = useSelector((state: any) => state.course);

  return (
    <Suspense fallback={renderLoader()}>
      <div className={classes.root}>
        <div className={classes.card} onClick={onOpen}>
          <Grid container direction="column" justify="flex-start">
            <div style={{ display: "block" }}>
              <div
                style={{
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  borderRadius: "10px",
                }}
              />
              <CardMedia
                style={{
                  background: `url('${thumbNail}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
                image={thumbNail}
                className={classes.cardMedia}
                title={name}
              />
              <Typography variant={"h2"} className={classes.title}>
                {name}
              </Typography>
              <Typography variant={"h4"} className={classes.subtitle}>
                {code}
              </Typography>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.detail}
              >
                <div
                  className={classes.dot}
                  style={{
                    background:
                      colorName[0][
                        courseCategory !== undefined ? courseCategory : 0
                      ],
                  }}
                />
                <Box fontWeight={500} className={classes.category}>
                  {courseCategory}
                </Box>
                <Grid item xs={12}>
                  <div>
                    {learningObjective !== undefined && (
                      <div
                        className={classes.caption}
                        dangerouslySetInnerHTML={{ __html: learningObjective }}
                      />
                    )}
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <div className={classes.logo}>
                  <div
                    style={{
                      backgroundImage: `url('${platformlogo}`,
                      backgroundSize: "cover",
                      padding: "30px",
                      backgroundPosition: " center center",
                    }}
                  />
                </div>
                <Grid item>
                  <div className={classes.author}>{platformName}</div>
                  <div className={classes.rating}>
                    <Rating vote={satisfactionCount} point={point} />
                  </div>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    className={classes.box}
                  >
                    <Typography
                      variant="caption"
                      align="left"
                      component="span"
                      color={"textSecondary"}
                    >
                      การดู {numberFormat(viewCount)} ครั้ง
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
        <Dialog
          open={open}
          setOpen={setOpen}
          data={props}
          isCurriculum={false}
        />
      </div>
    </Suspense>
  );
}
