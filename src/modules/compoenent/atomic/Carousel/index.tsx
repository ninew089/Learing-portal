import React, { lazy, Suspense } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "assets/css/slide.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForward from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBack from "@material-ui/icons/ArrowBackIosRounded";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CourseCarouselProps } from "./typescript";
import { useSelector } from "react-redux";

const CourseDetail = lazy(
  () => import("modules/course/components/Course/CourseDetails")
);
const CurriculumDetail = lazy(
  () => import("modules/course/components/Curriculum/CurriculumDetail")
);

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
      outline: "none",
    },
    slide: {
      padding: theme.spacing(0, 0),
      outline: "none !important",
    },
    course: {
      width: "100%",
      padding: "0px",
      height: "100%",
    },
    buttonBack: {
      outline: "none",
      position: "absolute",
      top: "45%",
      left: "-30px",
      background: "none",
      border: "none",
      padding: theme.spacing(0, 0),
    },
    buttonNext: {
      outline: "none",
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
    return item.isShown === true;
  });
  const { selected_platform } = useSelector((state: any) => state.course);

  return (
    <>
      {data!.length === 0 ||
      data!.filter((item: any) =>
        selected_platform === "ทั้งหมด" || selected_platform === null
          ? item
          : item.platformName.toLowerCase().includes(selected_platform)
      ).length === 0 ? (
        <h3 style={{ color: "gray" }}>ไม่พบผลการค้นหา</h3>
      ) : (
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
              {data!
                .filter((item: any) =>
                  selected_platform === "ทั้งหมด" || selected_platform === null
                    ? item
                    : item.platformName
                        .toLowerCase()
                        .includes(selected_platform)
                )
                .map((item: any, index: number) => (
                  <Suspense key={index} fallback={<div></div>}>
                    <Slide index={index} className={classes.slide}>
                      <div className={classes.course}>
                        {isCurriculum ? (
                          <CurriculumDetail
                            id={item.id}
                            learningTopic={item.learningTopic}
                            learningObjective={item.learningObjective}
                            courseCategoryId={item.courseCategoryId}
                            thumbNail={item.thumbNail}
                            targetGroup={item.targetGroup}
                            assessment={item.assessment}
                            viewCount={item.viewCount}
                            point={
                              item.satisfactionSum / item.satisfactionCount
                            }
                            satisfactionCount={item.satisfactionCount}
                            link={item.link}
                            code={item.code}
                            name={item.name}
                            platformlogo={item.platformlogo}
                            platformName={item.platformName}
                          />
                        ) : (
                          <CourseDetail
                            id={item.id}
                            learningTopic={item.learningTopic}
                            learningObjective={item.learningObjective}
                            courseCategoryId={item.courseCategoryId}
                            thumbNail={item.thumbNail}
                            targetGroup={item.targetGroup}
                            assessment={item.assessment}
                            viewCount={item.viewCount}
                            point={
                              item.satisfactionSum / item.satisfactionCount
                            }
                            satisfactionCount={item.satisfactionCount}
                            link={item.link}
                            code={item.code}
                            name={item.name}
                            platformlogo={item.platformlogo}
                            platformName={item.platformName}
                            courseCategory={item.courseCategory}
                          />
                        )}
                      </div>
                    </Slide>
                  </Suspense>
                ))}
            </Slider>

            <ButtonBack className={classes.buttonBack}>
              <ArrowBack />
            </ButtonBack>
            <ButtonNext className={classes.buttonNext}>
              <ArrowForward />
            </ButtonNext>
          </div>
        </CarouselProvider>
      )}
    </>
  );
}
