import React, { useEffect, useState, useRef } from "react";
import {
  Grid,
  Box,
  CircularProgress,
  Container,
  useMediaQuery,
} from "@material-ui/core";
import Relation from "modules/relation/components/Relation";
import { useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import SelectPlatform from "../share/SelectPlatform";
import animation from "assets/images/learn.webp";
import animation00 from "assets/images/welearn.webp";
import "assets/css/styles.css";
import Portal from "modules/portal/components/LinkPortal";
import TapsCourse from "../components/Course/TapsCourse";
import AllCourse from "../components/Course/AllCourse";
import SocialCardDemo from "../components/CardRecomment/CardRecomment";
import GroupSearch from "../components/Search";
import Curriculum from "../components/Curriculum/CategoryByCurriculum";
import Facebook from "modules/facebook/components/FaceBook";

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
            position: "sticky",
            top: 56,
            bottom: 20,
            paddingTop: "8px",
            paddingLeft: 4,
            width: "100%",
            zIndex: 5,
          }}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 10 }}
          >
            <GroupSearch />
          </Grid>
        </div>

        <Portal />

        <Grid container direction="row" justify="center" alignItems="center">
          {toprate.length !== 0 && recommemded.length !== 0 ? (
            <>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <SocialCardDemo title={"อันดับยอดฮิต"} data={toprate} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <SocialCardDemo title={"รายการแนะนำ"} data={recommemded} />
              </Grid>
            </>
          ) : (
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <CircularProgress color="primary" />
            </Grid>
          )}
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
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
                  fontWeight={400}
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

        <Grid container direction="row" justify="center" alignItems="center">
          <SelectPlatform />
        </Grid>
        <AllCourse />
        <div id="หมวดหมู่" />
        <TapsCourse title={"หมวดหมู่"} />
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <FadeInSection key={"image"}>
              <img src={animation00} alt="" width="100%" height="100%" />
            </FadeInSection>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
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
                  fontWeight={400}
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

        <div id="หลักสูตร" />
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Curriculum title={"หลักสูตร"} />
        </Grid>
        <Facebook />
      </Container>
    </React.Fragment>
  );
}
