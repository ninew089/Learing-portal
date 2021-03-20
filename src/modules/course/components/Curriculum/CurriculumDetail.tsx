import React from "react";
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
    fontWeight: 600,
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
    marginTop: 8,
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    fontSize: "12px",
    color: "#434a54",
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
  contianer: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    bottom: 10,
    right: 15,
    zIndex: 9999999,
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
  const RatingProps = React.memo(Rating);
  return (
    <div className={classes.root}>
      <div className={classes.card} onClick={onOpen}>
        <div className={classes.boxshadow}>
          <div className={classes.contianer}>
            <CardMedia
              style={{
                backgroundImage: `url('${thumbNail}')`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              image={thumbNail}
              className={classes.cardMedia}
              title={name}
            >
              {platformName === "สำนักงาน ก.พ." && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    height: 60,
                    width: "100%",
                    borderRadius: "0px 0px 4px 4px",
                    background:
                      " linear-gradient(0deg, rgba(0,0,0,0.520045518207283) 0%, rgba(0,0,0,0.4164040616246498) 4%, rgba(0,0,0,0.27914915966386555) 35%, rgba(255,255,255,0) 100%)",
                  }}
                >
                  <div className={classes.icon}>
                    <img
                      src={banner}
                      alt="welearn"
                      width="28px"
                      height="15px"
                    />
                  </div>
                </div>
              )}
            </CardMedia>
          </div>
        </div>
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
          label={"หลักสูตร"}
          style={{
            maxWidth: 200,
            color: "white",
          }}
          color="secondary"
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
              <RatingProps
                fontSize={14}
                vote={satisfactionCount}
                point={point}
              />
            </div>
          </Grid>

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
