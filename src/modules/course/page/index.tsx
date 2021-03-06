import React, { useEffect, useState, useRef } from "react";
import { Grid, Box, Container, useMediaQuery } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useTheme } from "@material-ui/core/styles";

import Relation from "modules/relation/components/Relation";
import Portal from "modules/portal/components/LinkPortal";
import Facebook from "modules/facebook/components/FaceBook";

import TapsCourse from "../components/Course/TapsCourse";
import AllCourse from "../components/Course/AllCourse";
import SocialCardDemo from "../components/CardRecomment/CardRecomment";
import GroupSearch from "../components/Search";
import Curriculum from "../components/Curriculum/CategoryByCurriculum";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import SelectPlatform from "../share/SelectPlatform";

import animation from "assets/images/learn.webp";
import animation00 from "assets/images/welearn.webp";
import "assets/css/styles.css";

function FadeInSection(props: any) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<any>();
  // eslint-disable-next-line
  const [state, setState] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => {
      setState({}); // This worked for me
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function Course() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only("xs"));

  useEffect(() => {
    const actionTopRate = actions.loadTopRate();
    dispatch(actionTopRate);
    const actionRecommend = actions.loadRecommended();
    dispatch(actionRecommend);

    // eslint-disable-next-line
  }, []);

  const dispatch = useDispatch();
  const { toprate, recommemded } = useSelector((state: any) => state.course);

  return (
    <React.Fragment>
      <Relation />
      <Container maxWidth="lg">
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            padding: 10,
          }}
        >
          <GroupSearch />
        </div>

        <Portal />

        <Grid container direction="row" justify="center" alignItems="center">
          {toprate.length !== 0 && recommemded.length !== 0 ? (
            <React.Fragment>
              <Grid item xs={12} sm={6}>
                <SocialCardDemo title={"อันดับยอดฮิต"} data={toprate} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SocialCardDemo title={"รายการแนะนำ"} data={recommemded} />
              </Grid>
            </React.Fragment>
          ) : (
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12} sm={3}>
                <Skeleton animation="wave" variant="rect" height={190} />
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton animation="wave" variant="rect" height={190} />
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Skeleton animation="wave" variant="rect" height={190} />
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </Grid>
            </Grid>
          )}
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <FadeInSection key={"หมวด"}>
                <Box
                  fontWeight={600}
                  textAlign="center"
                  color={"#efab22"}
                  fontSize={matches ? 18 : 24}
                >
                  OCSC Learning Portal
                </Box>
                <Box
                  fontWeight={500}
                  textAlign="center"
                  fontSize={matches ? 12 : 16}
                >
                  โลกแห่งการเรียนรู้ ไม่มีวันสิ้นสุด ยิ่งเรียนรู้ อาหารทางสมอง
                  เพิ่มพลังทางปัญญา
                </Box>
              </FadeInSection>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <FadeInSection key={"img"}>
              <img src={animation} alt="" width="100%" height="100%" />
            </FadeInSection>
          </Grid>
        </Grid>

        <div
          style={{
            textAlign: "center",
            padding: 10,
          }}
        >
          <SelectPlatform />
        </div>

        <AllCourse />

        <TapsCourse title={"หมวดหมู่"} />
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={4}>
            <FadeInSection key={"image"}>
              <img src={animation00} alt="" width="100%" height="100%" />
            </FadeInSection>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <FadeInSection key={"หมวดหมู่"}>
                <Box
                  fontWeight={600}
                  textAlign="center"
                  fontSize={matches ? 18 : 24}
                >
                  หลักสูตรที่เราคัดสรรมาเพื่อคุณ
                </Box>
                <Box
                  fontWeight={500}
                  textAlign="center"
                  fontSize={matches ? 10 : 16}
                >
                  บทเรียนที่จะช่วยต่อยอดการเรียน การทำงาน เพิ่มความเข้าใจ
                  เพิ่มศักยภาพ
                </Box>
              </FadeInSection>
            </Grid>
          </Grid>
        </Grid>

        <Curriculum title={"หลักสูตร"} />

        <Facebook />
      </Container>
    </React.Fragment>
  );
}
