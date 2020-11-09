import React from 'react'
import { Grid, Divider, Box, Hidden, Container } from '@material-ui/core'
import Course2 from './CourseDetails'
import img from 'assets/logo/logo1.jpg'
import img2 from 'assets/logo/logo2.png'
import img3 from 'assets/logo/logo3.png'
import img4 from 'assets/logo/logo4.png'
import queryString from 'query-string'
import categoryFormat from 'utils/categoryFormat'
import Listitems from './CourseForXs'
import { useLocation } from 'react-router-dom'
export default function SingleLineGridList(props: any) {
  const tileData = [
    {
      img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
      title: 'แนวคิดและปรัชญาเศรษฐกิจพอเพียง',
      logo: img,
      int: 'Chulalonhkorn',
      view: '103293',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
      logo: img2,
      title: 'แนวคิดและปรัชญาของการบริหารทรัพยากรมนุษย์',
      int: 'OCSC',
      view: '1213',
      author: 'director90',
      point: 4.5,
      vote: 100,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
      logo: img3,
      int: 'Thamasat',
      title: 'ภาษาจีนชีวิตประจำวัน',
      view: '45833',
      author: 'Danson67',
      point: 3.8,
      vote: 500,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
      logo: img4,
      int: 'SPU',
      title: 'การเขียนรายงานอย่างถูกต้อง',
      view: '86942',
      point: 4.7,
      vote: 323,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
      logo: img,
      int: 'Chulalonhkorn',
      title: 'การเขียนรายงานอย่างถูกต้อง(2)',
      view: '324898',
      point: 4,
      vote: 220,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/honey.jpg',
      logo: img2,
      int: 'OCSC',
      view: '548976',
      title: 'เรียนรู้ประวัติศาสตร์โลก',

      point: 2.5,
      vote: 89,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
      logo: img2,
      int: 'OCSC',
      view: '103',
      title: 'หลักการและแนวคิดแบบขงจื้อ',
      point: 4.1,
      vote: 1030,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/plant.jpg',
      logo: img,
      int: 'Chulalonhkorn',
      view: '345435',
      title: 'เรียนรู้อารยธรรมกรีก',
      point: 4,
      vote: 222,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
      logo: img3,
      int: 'OCSC',
      view: '94293',
      title: 'ปลุกผักด้วยเทคโนโลยี',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/olive.jpg',
      logo: img4,
      int: 'SPU',
      view: '94303',
      title: 'เลี้ยงหมุอย่างไรให้มีความสุข',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/star.jpg',
      logo: img2,
      int: 'OCSC',
      view: '8945',
      title: 'เรียนรู้เท่าทันโลกสมัยใหม่',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/bike.jpg',
      logo: img2,
      int: 'OCSC',
      view: '97850',
      title: 'การนำเสนอรายงาน',
      point: 4,
      vote: 200,
    },
  ]
  const { search } = useLocation()
  const { category } = queryString.parse(search)
  return (
    <Box p={2}>
      <div>
        <Grid container direction="row" alignItems="center">
          <Container maxWidth="lg">
            <h2>{category}</h2>
          </Container>
        </Grid>
        <Divider style={{ marginBottom: 20 }} />

        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={3}
          >
            {tileData.map((tile) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Course2
                  data={tile.title}
                  logo={tile.logo}
                  int={tile.int}
                  view={tile.view}
                  point={tile.point}
                  vote={tile.vote}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </Box>
  )
}
