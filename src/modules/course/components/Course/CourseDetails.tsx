import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Chip } from "@material-ui/core";
import numberFormat from "utils/numberFormat";
import banner from "assets/images/welearn_logo.webp";
import { CardProps } from "./tyscript";
import CardMedia from "@material-ui/core/CardMedia";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions";
import FiberManualRecordRounded from "@material-ui/icons/FiberManualRecordRounded";
import Rating from "../../share/Rating";

const useStyles = makeStyles((theme) => ({
  container: {},
  root: {
    borderRadius: "0.5rem",
    padding: 10,
    "&:hover": {
      background: "#cccccc8a",
    },
    height: "100%",
  },
  card: {
    width: "100%",

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
    marginTop: 4,
    overflow: "hidden",
    maxWidth: 270,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    //  WebkitLineClamp: 1,
    // WebkitBoxOrient: "vertical",
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#132740",

    marginRight: 8,
    marginBottom: 10,
  },
  subtitle: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#132740",
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
    maxWidth: 190,
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
    marginTop: 8,
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    fontSize: "12px",
    color: "#434a54",
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
  const dispatch = useDispatch();
  const onOpen = () => {
    const action = actions.setDialog(props, false);
    dispatch(action);
  };
  const { colorName } = useSelector((state: any) => state.course);

  return (
    <div className={classes.root}>
      <div
        className={classes.card}
        onClick={onOpen}
        style={{ display: "block" }}
      >
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

        <div className={classes.title}>{name}</div>
        <div className={classes.subtitle}>{code}</div>
        <Chip
          icon={
            <FiberManualRecordRounded
              style={{
                color: "white",
              }}
            />
          }
          label={courseCategory}
          style={{
            background:
              colorName[0][courseCategory !== undefined ? courseCategory : 0],
            maxWidth: 200,
            color: "white",
          }}
          size="small"
        />
        {learningObjective !== undefined && (
          <div
            className={classes.caption}
            dangerouslySetInnerHTML={{ __html: learningObjective }}
          />
        )}
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          direction="row"
          style={{ marginTop: 4 }}
        >
          <div
            className={classes.logo}
            style={{
              backgroundImage: `url('${platformlogo}`,
              backgroundSize: "cover",
              padding: "14px",
              backgroundPosition: " center center",
            }}
          />
          <Grid item xs={7}>
            <div className={classes.author}>{platformName}</div>
            <div className={classes.rating}>
              <Rating fontSize={14} vote={satisfactionCount} point={point} />
            </div>
          </Grid>
          {platformName === "สำนักงาน ก.พ." && (
            <img
              src={banner}
              alt="welearn"
              width="40px"
              height="16px"
              style={{ margin: 8 }}
            />
          )}
          <Typography
            variant="caption"
            align="left"
            component="span"
            color={"textSecondary"}
            style={{ marginLeft: 52 }}
          >
            การดู {numberFormat(viewCount)} ครั้ง
          </Typography>
        </Grid>
      </div>
    </div>
  );
}
