import React, { useEffect, lazy, Suspense } from "react";
import { Grid, Box, Container } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../actions";
import animation from "assets/gif/animation.gif"
import animation00 from "assets/gif/animation00.gif"


import "assets/css/styles.css";


const Relation = lazy(() => import('modules/relationPortal/components/Relation'));
const Portal = lazy(() => import('modules/portal/components/LinkPortal'));
const TapsCourse = lazy(() => import('./Course/TapsCourse'));
const AllCourse = lazy(() => import('./Course/AllCourse'));
const SocialCardDemo = lazy(() => import('./CardRecomment/CardRecomment'));
const GroupSearch = lazy(() => import('./Search'));
const Curriculum = lazy(() => import('./Curriculum/CategoryByCurriculum'));
const Facebook = lazy(() => import('modules/facebook/components/FaceBook'));



function FadeInSection(props: any) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<any>();


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
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

    const actionRecommend = actions.loadRecommended()
    dispatch(actionRecommend)
    const actionTopRate = actions.loadTopRate()
    dispatch(actionTopRate)

    // eslint-disable-next-line
  }, [])

  const dispatch = useDispatch();
  const { recommemded, toprate } = useSelector((state: any) => state.course);





  const renderLoader = () =>
    <div></div>

  return (
    <div>

      <Suspense fallback={renderLoader()}>
        <Relation />
        <Box p={2}>
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
              <GroupSearch

              />
            </Grid>
          </div>

          <Container>
            <Grid container direction="row" justify="center" alignItems="center">
              <Portal />
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <SocialCardDemo title={"อันดับยอดฮิต"} data={toprate} />

                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <SocialCardDemo title={"รายการแนะนำ"} data={recommemded} />
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
                          โลกแห่งการเรียนรู้ ไม่มีวันสิ้นสุด ยิ่งเรียนรู้
                          อาหารทางสมอง เพิ่มพลังทางปัญญา
                        </Box>
                      </FadeInSection>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <FadeInSection key={"img"}>
                      <img src={animation} alt="" width="100%" height="100%" />
                    </FadeInSection>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <AllCourse />
                  </Grid>
                </Grid>
                <div id="หมวดหมู่" />
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TapsCourse title={"หมวดหมู่"} />
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
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
                          บทเรียนที่จะช่วยต่อยอดการเรียน การทำงาน
                          เพิ่มความเข้าใจ เพิ่มศักยภาพ
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
              </Grid>
            </Grid>
          </Container>


        </Box>

      </Suspense>
    </div>
  );
}
