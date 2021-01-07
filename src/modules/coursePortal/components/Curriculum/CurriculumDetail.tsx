import React, { useState, lazy, Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box, Link } from "@material-ui/core";
import numberFormat from "utils/numberFormat";
import Rating from "../../share/Rating";
import { Theme } from "@material-ui/core/styles";
import platformFormat from 'utils/platformFormat'
import * as actions from "../../actions"
import { useDispatch } from 'react-redux'
import CardMedia from '@material-ui/core/CardMedia';


const Dialog = lazy(() => import('../../share/DialogCourse'));



const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: "0.5rem",
    padding: 10,
    "&:hover": {
      background: "#cccccc8a",
    },
  },
  card: {
    width: "100%",
    // background: '#fdfdfd',
    minHeight: "460px",
    //boxShadow: '4px 4px 4px 4px rgb(0 0 0 / 8%)',
    borderRadius: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      transition: "0.4s",
      "&:hover": {
        transform: "translateY(-4px)",
      },
    },
    marginBottom: 4
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
  },
  view: {
    marginRight: 10,
  },
  dot: {
    height: "10px",
    width: "10px",
    backgroundColor: theme.palette.secondary.main,
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
    maxWidth: '200px'

  },
  cardMedia: {
    paddingTop: "75%", // 4:3
    borderRadius: theme.shape.borderRadius,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },

}));

export default function CurriculumDetailCard(props: any) {
  const { platformId, learningTopic, viewCount, point, satisfactionCount, code, link, thumbnail, name, id } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const countView = () => {
    const action = actions.loadCurriculumsView(id)
    dispatch(action)
  }
  const [open, setOpen] = useState<boolean>(false)
  const onOpen = () => {
    setOpen(true)
  }
  const renderLoader = () =>
    <div></div>

  return (
    <Suspense fallback={renderLoader()}>
      <div className={classes.root}>
        <div className={classes.card}>
          <Grid
            container
            direction="column"
            justify="flex-start"

          >
            <div style={{ display: "block" }}>
              <div className={classes.boxshadow}>
                <CardMedia
                  style={{
                    background: `url('${thumbnail}')`,
                    backgroundSize: "cover",
                  }}
                  image={thumbnail}
                  className={classes.cardMedia}
                  title="Contemplative Reptile"
                  onClick={onOpen}
                />


              </div>
              <Link href={link} target="_blank" underline="none" rel="noopener" onClick={countView}>

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
                  <div className={classes.dot} />
                  <Box fontWeight={500}>หลักสูตร</Box>

                  <Grid item xs={12}>
                    <Box fontWeight={400} className={classes.caption}>
                      &nbsp;&nbsp;&nbsp;{learningTopic}
                    </Box>
                  </Grid>
                </Grid>
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


