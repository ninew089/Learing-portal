import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Chip } from "@material-ui/core";
import numberFormat from "utils/numberFormat";
import Rating from "../../share/Rating";
import { Theme } from "@material-ui/core/styles";

import banner from "assets/images/welearn_logo.webp";
import CardMedia from "@material-ui/core/CardMedia";
import { CardProps } from "./tyscript";
import { useDispatch } from "react-redux";
import * as actions from "../../actions";
import FiberManualRecordRounded from "@material-ui/icons/FiberManualRecordRounded";

const useStyles = makeStyles((theme: Theme) => ({
  gridPlatform: {
    marginTop: 8,
    marginBottom: 8,
  },
  root: {
    borderRadius: "0.5rem",
    padding: 10,
    "&:hover": {
      background: "#cccccc8a",
    },
  },

  card: {
    width: "100%",
    minHeight: "420px",
    borderRadius: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      transition: "0.4s",
      "&:hover": {
        transform: "translateY(-4px)",
      },
    },
    marginBottom: 4,
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
    marginTop: 4,
    maxWidth: "280px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#132740",
    paddingLeft: 8,
    marginRight: 8,
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
    maxWidth: 190,
    marginLeft: 8,
    marginBottom: 2,
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
  box: {
    padding: 8,
    marginLeft: 6,
  },
  view: {
    marginRight: 10,
  },
  dot: {
    color: theme.palette.secondary.main,
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
  detail: {
    marginBottom: 18,
  },
  submit: {
    padding: 0,
    float: "right",
    width: "100%",
    margin: 0,
  },
  boxshadow: {
    boxShadow: "1px -24px 1px -14px #58585861,4px -46px 3px -25px  #67676757",
    marginTop: 30,
    borderRadius: 10,
  },
  category: {
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    maxWidth: "200px",
  },
  cardMedia: {
    paddingTop: "75%", // 4:3
    borderRadius: theme.shape.borderRadius,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
}));

export default function CurriculumDetailCard(props: CardProps) {
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
  } = props;
  const classes = useStyles();

  const dispatch = useDispatch();
  const onOpen = () => {
    const action = actions.setDialog(props, true);
    dispatch(action);
  };
  const renderLoader = () => <div></div>;

  return (
    <Suspense fallback={renderLoader()}>
      <div className={classes.root}>
        <div className={classes.card}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            onClick={onOpen}
          >
            <div style={{ display: "block" }}>
              <div className={classes.boxshadow}>
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
              </div>
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
                  style={{
                    marginBottom: 10,
                    display: "inline-flex",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Chip
                      icon={
                        <FiberManualRecordRounded
                          style={{
                            color: "white",
                          }}
                        />
                      }
                      label={"หลักสูตร"}
                      style={{
                        maxWidth: 200,
                        color: "white",
                      }}
                      color="secondary"
                      size="small"
                      // variant="outlined"
                    />
                  </Grid>
                </div>
                <Grid item xs={12}>
                  {learningObjective !== undefined && (
                    <div
                      className={classes.caption}
                      dangerouslySetInnerHTML={{ __html: learningObjective }}
                    />
                  )}
                </Grid>
                <Grid item xs={12} className={classes.gridPlatform}>
                  <Grid
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                  >
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
                      <div>
                        <div className={classes.author}>{platformName} </div>
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
                      </div>
                      {platformName === "สำนักงาน ก.พ." && (
                        <img
                          src={banner}
                          alt="welearn"
                          width="40"
                          style={{ margin: 8 }}
                        />
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
    </Suspense>
  );
}
