import React from 'react'
import { Grid, Box, Container } from '@material-ui/core'
import Curriculum from './Curriculum/CategoryByCurriculum'
import Portal from 'modules/portal/components/LinkPortal'
import Relation from 'modules/relationPortal/components/Relation'
import Facebook from 'modules/facebook/components/FaceBook'
import { SocialCardDemo } from './CardRecomment'
import animation from 'assets/images/animation.gif'
import animation1 from 'assets/images/animation00.gif'
import CourseDetail from './Course/CourseDetails'
import GroupSearch from './GroupSearch'
import TapsCourse from './Course/TapsCourse'
import { useTheme } from '@material-ui/core/styles'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import 'assets/css/styles.css'

function FadeInSection(props: any) {
  const [isVisible, setVisible] = React.useState(false)
  const domRef = React.useRef<any>()

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
  }, [])
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}

export default function Course() {
  //const [search, setSearch] = React.useState('')
  const fixedOptions: any[] = []
  const [value, setValue] = React.useState([...fixedOptions])
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.only('xs'))

  const scrollOnTop = () => {
    window.scrollTo(0, 220)
  }

  return (
    <div>

        <Relation />

      <Box p={2}>
   
        <div
          style={{
            background: '#f5f5f5',
            position: 'sticky',
            top: 56,
            bottom: 20,
            paddingTop: '8px',
            paddingLeft: 4,
            width: '100%',
            zIndex: 5,
          }}
        >
          <Grid container direction="row" justify="center" alignItems="center" style={{padding:10}}>
            <GroupSearch
              value={value}
              fixedOptions={fixedOptions}
              setValue={setValue}
            />
          </Grid>
        </div>
        <Container>
          <Grid container direction="row" justify="center" alignItems="center">
            <Portal />

            {value.length === 0 ? (
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <SocialCardDemo title={'อันดับยอดฮิต'} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <SocialCardDemo title={'รายการแนะนำ'} />
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
                      <FadeInSection key={'หมวด'}>
                        <Box
                          fontWeight={600}
                          textAlign="center"
                          color={'#efab22'}
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
                    <FadeInSection key={'img'}>
                      <img
                        src={animation}
                        alt="animation"
                        width={'100%'}
                        style={{ marginTop: 14 }}
                      />
                    </FadeInSection>
                  </Grid>
                </Grid>
                <div id="หมวดหมู่" />
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TapsCourse title={'หมวดหมู่'} />
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <FadeInSection key={'image'}>
                      <img src={animation1} alt="animation" width={'100%'} />
                    </FadeInSection>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <FadeInSection key={'หมวดหมู่'}>
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
   
                       <Curriculum title={'หลักสูตร'} />
                  
   
               
                </Grid>

                <Facebook />
              </Grid>
            ) : (
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {scrollOnTop()}

                <h2>ผลการค้นหา</h2>
              </Grid>
            )}
            <Grid container justify="center" alignItems="center" spacing={2}>
              {value.map((number: number, i: number) => (
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <CourseDetail
                    data={value[i].title}
                    logo={value[i].logo}
                    int={value[i].int}
                    view={value[i].view}
                    point={value[i].point}
                    vote={value[i].vote}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}
