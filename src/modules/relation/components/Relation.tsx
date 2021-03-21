import React, { useEffect } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForward from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBack from "@material-ui/icons/ArrowBackIosRounded";
import { Link } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions";
import { amber, grey } from "@material-ui/core/colors";
import Skeleton from "@material-ui/lab/Skeleton";
import { CardMedia, useMediaQuery, Grid } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carousel: {
      background: "none",
      border: "none",
      position: "relative",
      padding: "30px",
      width: "100%",
    },
    slider: {
      //maxWidth: "1200px",
      outline: "none",
    },
    slide: {
      padding: theme.spacing(0, 0),
      outline: "none !important",
    },

    course: {
      width: "100%",
      padding: "0px",
      paddingBottom: 0,
      height: "100%",
    },
    buttonBack: {
      outline: "none",
      position: "absolute",
      top: "45%",
      left: "10px",
      background: "none",
      border: "none",
      padding: theme.spacing(0, 0),
    },
    buttonNext: {
      outline: "none",
      position: "absolute",
      top: "45%",
      right: "10px",
      background: "none",
      border: "none",
      padding: theme.spacing(0, 0),
    },
    container: {
      width: "100%",
    },
    dotGroup: {
      display: "flex",
      justifyContent: "center",
    },
    styledDot: {
      "& .carousel__dot": {
        backgroundColor: grey[300],
        height: "8px",
        width: "8px",
        padding: "4px",
        borderRadius: "50%",
        border: "none",
        margin: "0 4px",
      },
      "& .carousel__dot--selected": {
        backgroundColor: amber[500],
      },
    },
    cardMedia: {
      paddingTop: "75%", // 4:3
      borderRadius: theme.shape.borderRadius,
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
  })
);

export default function CourseCarousel() {
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const dispatch = useDispatch();
  useEffect(() => {
    const action = actions.loadPressReleases();
    dispatch(action);
    // eslint-disable-next-line
  }, []);
  const { pressReleases } = useSelector((state: any) => state.pressReleases);
  return (
    <>
      {pressReleases.length !== 0 ? (
        <CarouselProvider
          infinite
          interval={5000}
          isPlaying
          naturalSlideWidth={100}
          naturalSlideHeight={135}
          isIntrinsicHeight
          totalSlides={pressReleases!.length}
          visibleSlides={isLgUp ? 4 : isMdUp ? 3 : isSmUp ? 2 : 1}
          step={isLgUp ? 4 : isMdUp ? 3 : isSmUp ? 2 : 1}
          className={classes.carousel}
        >
          <div>
            <Slider className={classes.slider}>
              {pressReleases.map(
                (
                  {
                    id,
                    headline,
                    targetUrl,
                    imageUrl,
                  }: {
                    id: number;
                    headline: string;
                    targetUrl: string;
                    imageUrl: string;
                  },
                  index: number
                ) => (
                  <Slide key={index} index={index} className={classes.slide}>
                    <div className={classes.course}>
                      <Link href={targetUrl} underline="none" target="_blank">
                        <CardMedia
                          style={{
                            backgroundImage: `url('${imageUrl}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            position: "relative",
                            margin: 2,
                          }}
                          image={imageUrl}
                          className={classes.cardMedia}
                          title={imageUrl}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "70%",
                              transform: "translate(-50%, -50%)",
                              left: "50%",
                              marginRight: "-50%",
                              margin: 0,
                              textShadow: "0px 3px 3px rgba(0, 0, 0, 0.4)",
                              color: "white",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {headline}
                          </div>
                        </CardMedia>
                      </Link>
                    </div>
                  </Slide>
                )
              )}
            </Slider>

            <ButtonBack className={classes.buttonBack}>
              <ArrowBack />
            </ButtonBack>
            <ButtonNext className={classes.buttonNext}>
              <ArrowForward />
            </ButtonNext>
          </div>
          <div className={classes.dotGroup}>
            <DotGroup className={classes.styledDot} />
          </div>
        </CarouselProvider>
      ) : (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          style={{
            marginTop: 10,
          }}
        >
          <Grid item xs={12} sm={4} md={3}>
            <Skeleton animation="wave" variant="rect" height={190} />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Skeleton animation="wave" variant="rect" height={190} />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Skeleton animation="wave" variant="rect" height={190} />
          </Grid>
        </Grid>
      )}
    </>
  );
}
