import React from "react";
import { Grid, Box, Divider, CardMedia, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Rating from "../../share/Rating";
import banner from "assets/images/welearn.png";
import { useDispatch } from "react-redux";
import * as actions from "../../actions";
import FiberManualRecordRounded from "@material-ui/icons/FiberManualRecordRounded";
const useStyles = makeStyles((theme) => ({
  contianer: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    bottom: 0,
    right: 10,
  },
  card: {
    marginTop: "10px",
    width: "95%",
    borderRadius: 16,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  header: {
    fontFamily: "Barlow, san-serif",
  },
  headline: {
    color: theme.palette.primary.dark,
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  link: {
    color: "#2281bb",
    padding: "0 0.25rem",
    fontSize: "0.875rem",
  },
  actions: {
    color: "#BDC9D7",
  },
  divider: {
    backgroundColor: "#d9e2ee",
    margin: "0 20px",
  },
  caption: {
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    color: "#59626f",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  category: {
    color: " #59636f",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  name: {
    color: theme.palette.primary.dark,
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  items: {
    marginBottom: 4,
    transition: "transform 0.7s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  image: {
    borderRadius: 10,
    boxShadow: "0 4px 4px 0 #BDC9D7",
  },
  cardMedia: {
    paddingTop: "75%", // 4:3
    borderRadius: theme.shape.borderRadius,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  dot: {
    height: "10px",
    width: "10px",
    backgroundColor: "#cfcde6",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: 2,
    marginRight: 4,
    [theme.breakpoints.only("xs")]: {
      height: "6px",
      width: "6px",
    },
  },
  author: {
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    fontSize: "10px",
    fontWeight: 500,
    color: "#132740",
    padding: 3,
    maxWidth: 128,
    minWidth: 128,
    marginLeft: 8,
    marginBottom: 2,
  },
  rating: {
    paddingLeft: 8,
  },
  box: {
    padding: 8,
    marginLeft: 6,
  },
  logo: {
    marginBottom: 4,
    marginTop: 4,
    marginLeft: 4,
    marginRight: 0,
  },
  view: {
    fontSize: "8px",
  },
}));

export default function SocialCard(props: any) {
  const { data } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { colorName } = useSelector((state: any) => state.course);
  const onSelected = () => {
    const action = actions.setDialog(data, false);
    dispatch(action);
  };
  return (
    <>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        spacing={2}
        className={classes.items}
        onClick={onSelected}
      >
        <Grid item xs={5}>
          <div className={classes.contianer}>
            <CardMedia
              style={{
                background: `url('${data.thumbNail}')`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              image={data.thumbNail}
              className={classes.cardMedia}
              title={data.name}
            >
              {data.platformName === "สำนักงาน ก.พ." && (
                <div className={classes.icon}>
                  <img src={banner} alt="welearn" width="28" />
                </div>
              )}
            </CardMedia>
          </div>
        </Grid>

        <Grid item xs={7}>
          <Box fontSize={14} fontWeight={600} className={classes.name}>
            {data.name}
          </Box>

          <Box fontSize={12} fontWeight={400} className={classes.name}>
            {data.code}
          </Box>
          <Box fontSize={12} fontWeight={400} className={classes.category}>
            <Grid container justify="flex-start" direction="row">
              <Grid item xs={6}>
                <Chip
                  icon={
                    <FiberManualRecordRounded
                      fontSize="small"
                      style={{
                        color: "white",
                        fontSize: 10,
                      }}
                    />
                  }
                  label={data.courseCategory}
                  style={{
                    fontSize: 10,
                    background:
                      colorName[0][
                        data.courseCategory !== undefined
                          ? data.courseCategory
                          : 0
                      ],
                    maxWidth: 140,
                    color: "white",
                  }}
                  //color="secondary"
                  size="small"
                  // variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>
          <Grid
            container
            justify="flex-start"
            alignItems="flex-start"
            direction="row"
            style={{ marginTop: 4 }}
          >
            <Grid item>
              <div className={classes.logo}>
                <div
                  style={{
                    backgroundImage: `url('${data.platformlogo}`,
                    backgroundSize: "cover",
                    padding: "14px",
                    backgroundPosition: " center center",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={7}>
              <div className={classes.author}>{data.platformName} </div>
              <div className={classes.rating}>
                <Rating
                  fontSize={14}
                  vote={data.satisfactionCount}
                  point={data.satisfactionSum / data.satisfactionCount}
                />
              </div>
            </Grid>
          </Grid>

          <Divider style={{ marginTop: 10 }} />
        </Grid>
      </Grid>
    </>
  );
}
