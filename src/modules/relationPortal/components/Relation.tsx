import React, { Suspense, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,

} from "pure-react-carousel";
import "assets/css/slide.css"
import "pure-react-carousel/dist/react-carousel.es.css";
import IconButton from "@material-ui/core/IconButton";
import ArrowForward from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBack from "@material-ui/icons/ArrowBackIosRounded";
import { Link } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux'
import * as actions from "../actions"
import { amber, grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>

  createStyles({

    carousel: {
      background: "none",
      border: "none",
      position: "relative",
      padding: theme.spacing(0, 0),
      width: "100%",

    },
    slider: {
      //maxWidth: "1200px",
      outline: "none"
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
      position: "absolute",
      top: "45%",
      left: "10px",
      background: "none",
      border: "none",
      padding: theme.spacing(0, 0),
    },
    buttonNext: {
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
    }, styledDot: {
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
  })
);

export default function CourseCarousel() {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    const action = actions.loadPressReleases()
    dispatch(action)
    // eslint-disable-next-line
  }, [])
  const { pressReleases } = useSelector((state: any) => state.pressReleases);
  return (
    <Suspense fallback={<div></div>}>
      <CarouselProvider
        infinite
        interval={5000}
        naturalSlideWidth={1000}
        naturalSlideHeight={135}
        isIntrinsicHeight
        isPlaying
        totalSlides={pressReleases!.length}
        visibleSlides={1}
        step={1}
        className={classes.carousel}
      >
        <div>
          <Slider className={classes.slider}>
            {pressReleases.map(({ id, headline, targetUrl, imageUrl }: { id: number, headline: string, targetUrl: string, imageUrl: string }, index: number) => (

              < Slide key={index} index={index} className={classes.slide} >

                <div className={classes.course}>



                  <Link href={targetUrl} underline="none" target="_blank">
                    <div style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                      <div style={{ position: "relative", width: "100vw", minHeight: "400px" }}>
                        <div style={{ position: "absolute", top: "70%", transform: "translate(-50%, -50%)", left: "50%", marginRight: "-50%", margin: 0, textShadow: "0px 3px 3px rgba(0, 0, 0, 0.4)", color: "white", fontSize: "24px", textAlign: "center" }}>
                          {headline}
                        </div>

                      </div>

                    </div>
                  </Link>



                </div>
              </Slide>

            ))}
          </Slider>

          <ButtonBack className={classes.buttonBack}>
            <IconButton edge="end">
              <ArrowBack />
            </IconButton>
          </ButtonBack>
          <ButtonNext className={classes.buttonNext}>
            <IconButton edge="start">
              <ArrowForward />
            </IconButton>
          </ButtonNext>
        </div>
        <div className={classes.dotGroup}>
          <DotGroup className={classes.styledDot} />
        </div>
      </CarouselProvider >
    </Suspense>
  );
}
