import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import IconButton from "@material-ui/core/IconButton";
import ArrowForward from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBack from "@material-ui/icons/ArrowBackIosRounded";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CourseDetail from 'modules/coursePortal/components/Course/CourseDetails'
import CurriculumDetail from 'modules/coursePortal/components/Curriculum/CurriculumDetail'
import {data} from 'data/couredetail'
//import { CourseCarouselProps } from "../CourseCarousel/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carousel: {
      position:'relative',
      padding: theme.spacing(0, 1),
      maxWidth: "calc(vw)",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "calc(100vw - 48px)",
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth: "calc(100vw - 36px)"
      },
    },
    slider: {

      maxWidth:'1200px'
    },
    slide: {
      padding: theme.spacing(0, 0),
    },
    course: {
      width: "96%",
      padding: "4px",
      paddingBottom: 0,
      height: "100%",
     
    },
    buttonBack: {
      position: "absolute",
      top: "80%",
      left: "0px",
      background: "none",
      border: "none",
      padding: theme.spacing(0, 0),
    },
    buttonNext: {
      position: "absolute",
      top: "80%",
      right: "0px",
      background: "none",
      border: "none",
      padding: theme.spacing(0, 0),
    },
    container: {
    width:'100%'
  }
  
    
  })
);

export default function CourseCarousel(props: any) {
  const classes = useStyles();
  const {isCurriculum} =props
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(isCurriculum)
  return (

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={135}
        isIntrinsicHeight
        totalSlides={12}
        visibleSlides={isLgUp?4:isMdUp ? 3 : isSmUp ? 2 : 1}
        step={isLgUp?4:isMdUp ? 3 : isSmUp ? 2 : 1}
        className={classes.carousel}
      >
        <div className={classes.slider}>

          <Slider className={classes.slide}>

            {data.map((item, index) => (
              <Slide index={index}>
                <div className={classes.course}>
                  {isCurriculum ? <CurriculumDetail
                    key={index}
    data={item.title}
    logo={item.logo}
    int={item.int}
    view={item.view}
    point={item.point}
    vote={item.vote} /> :
   
                    
                    <CourseDetail
    key={index}
    data={item.title}
    logo={item.logo}
    int={item.int}
    view={item.view}
    point={item.point}
    vote={item.vote}
    />}
                  

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
      </CarouselProvider>

  );
}