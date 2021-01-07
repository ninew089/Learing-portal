import React, { lazy, Suspense } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "assets/css/slide.css"
import "pure-react-carousel/dist/react-carousel.es.css";
import IconButton from "@material-ui/core/IconButton";
import ArrowForward from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBack from "@material-ui/icons/ArrowBackIosRounded";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//import CourseDetail from "modules/coursePortal/components/Course/CourseDetails";
//import CurriculumDetail from "modules/coursePortal/components/Curriculum/CurriculumDetail";
import { CourseCarouselProps } from "./typescript";

const CourseDetail = lazy(() => import('modules/coursePortal/components/Course/CourseDetails'));
const CurriculumDetail = lazy(() => import('modules/coursePortal/components/Curriculum/CurriculumDetail'));

const useStyles = makeStyles((theme: Theme) =>

  createStyles({

    carousel: {
      background: "none",
      border: "none",
      position: "relative",
      padding: theme.spacing(0, 0),
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "calc(100vw - 48px)",
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth: "calc(100vw - 36px)",
      },
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
      left: "-30px",
      background: "none",
      border: "none",
      padding: theme.spacing(0, 0),
    },
    buttonNext: {
      position: "absolute",
      top: "45%",
      right: "-30px",
      background: "none",
      border: "none",
      padding: theme.spacing(0, 0),
    },
    container: {
      width: "100%",
    },
  })
);

export default function CourseCarousel(props: CourseCarouselProps) {
  const classes = useStyles();
  const { isCurriculum, detail } = props;
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const data = detail?.filter((item: any) => {

    return item.isShown === true
  })

  return (

    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={135}
      isIntrinsicHeight
      totalSlides={data!.length}
      visibleSlides={isLgUp ? 4 : isMdUp ? 3 : isSmUp ? 2 : 1}
      step={isLgUp ? 4 : isMdUp ? 3 : isSmUp ? 2 : 1}
      className={classes.carousel}
    >
      <div>

        <Slider className={classes.slider}>
          {data!.map((item: any, index: number) => (
            <Suspense fallback={<div></div>}>
              < Slide key={index} index={index} className={classes.slide} >

                <div className={classes.course}>

                  {isCurriculum ? (
                    <CurriculumDetail
                      key={index}
                      id={item.id}
                      learningTopic={item.learningTopic}
                      learningObjective={item.learningObjective}
                      courseCategoryId={item.courseCategoryId}
                      thumbnail={item.thumbnail}
                      targetGroup={item.targetGroup}
                      assessment={item.assessment}
                      viewCount={item.viewCount}
                      point={(item.satisfactionSum) / item.satisfactionCount}
                      satisfactionCount={item.satisfactionCount}
                      link={item.link}
                      code={item.code}
                      name={item.name}
                      platformId={item.platformId}
                    />
                  ) : (
                      <CourseDetail
                        key={index}
                        id={item.id}
                        learningTopic={item.learningTopic}
                        learningObjective={item.learningObjective}
                        courseCategoryId={item.courseCategoryId}
                        thumbnail={item.thumbnail}
                        targetGroup={item.targetGroup}
                        assessment={item.assessment}
                        viewCount={item.viewCount}
                        point={(item.satisfactionSum) / item.satisfactionCount}
                        satisfactionCount={item.satisfactionCount}
                        link={item.link}
                        code={item.code}
                        name={item.name}
                        platformId={item.platformId}
                      />
                    )}
                </div>
              </Slide>
            </Suspense>
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
    </CarouselProvider >

  );
}