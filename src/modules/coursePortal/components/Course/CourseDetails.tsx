import React, { useState, lazy, Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box, Link } from "@material-ui/core";
import numberFormat from "utils/numberFormat";
import * as actions from "../../actions"
import { useDispatch } from 'react-redux'
import categoryFormat from "utils/categoryFormat"
import platformFormat from 'utils/platformFormat'
import { CardProps } from "./tyscript"
import CardMedia from '@material-ui/core/CardMedia';
import colorCategory from "utils/categoryColorCode"

const Dialog = lazy(() => import('../../share/DialogCourse'));
const Rating = lazy(() => import('../../share/Rating'));

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
    }


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
  }, subtitle: {
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
    padding: 8,
  },
  box: {
    padding: 8,
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
    marginLeft: 10,
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
    maxWidth: '200px'

  },
  detail: {
    marginBottom: 30,
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

  const { platformId, learningTopic, viewCount, point, satisfactionCount, code, link, thumbnail, courseCategoryId, name, id } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const renderLoader = () => <div></div>
  const countView = () => {
    const action = actions.loadCourseView(id)
    dispatch(action)
  }
  const [open, setOpen] = useState<boolean>(false)
  const onOpen = () => {
    setOpen(true)
  }

  return (

    <Suspense fallback={renderLoader()}>
      <div className={classes.root} >
        <div className={classes.card}>
          <Grid
            container
            direction="column"
            justify="flex-start"

          >
            <div style={{ display: "block" }}>
              <div style={{ width: "100%", backgroundSize: "cover", backgroundPosition: "center center", borderRadius: "10px" }} />
              <CardMedia
                style={{
                  background: `url('${thumbnail}')`,
                  backgroundSize: "cover",
                }}
                image={thumbnail}
                className={classes.cardMedia}
                title={name}
                onClick={onOpen}
              />




              <Link href={link} target="_blank" rel="noopener" underline="none" onClick={countView}  >
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

                  <div className={classes.dot} style={{ background: colorCategory(courseCategoryId) }} />
                  <Box fontWeight={500} className={classes.category}>{categoryFormat(courseCategoryId)}</Box>


                  <Grid item xs={12}>
                    <div>



                      <Box fontWeight={400} className={classes.caption}>
                        {learningTopic}
                      </Box>
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
                    < div style={{
                      background: `url('${platformFormat(platformId).logo}`,
                      backgroundSize: "cover",

                      padding: "30px"
                    }} />
                  </div>
                  <div>
                    <div className={classes.author}>{platformFormat(platformId).name}</div>
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
                        component="p"
                        color={"textSecondary"}
                      >
                        การดู {numberFormat(viewCount)} ครั้ง
                  </Typography>
                    </Grid>
                  </div>
                </Grid>
              </Link>
            </div>
          </Grid>


        </div>
        <Dialog open={open} setOpen={setOpen} data={props} />
      </div>

    </Suspense>
  );
}
