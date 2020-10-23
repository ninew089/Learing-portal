import React from 'react'
import { Grid, Divider, Box, Hidden, Container,Button } from '@material-ui/core'
import Course2 from './CourseDetails-v2'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import img from 'assets/logo/logo1.jpg'
import img2 from 'assets/logo/logo2.png'
import img3 from 'assets/logo/logo3.png'
import img4 from 'assets/logo/logo4.png'
import Listitems from './Listitems'

import { useHistory } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


export default function SingleLineGridList(props: any) {
    const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      line:{
        display:'inline-block',
        borderBottom:'3px solid #f9b122',
        paddingBottom:'2px'
      },button:{
        float: 'right'
      },box:{
        background: '#f5f5f5'  ,borderRadius:'0 0 10px 10px',paddingRight:8,paddingLeft:8,marginBottom:10,paddingBottom:10
      },
      
   
  }),
);

const {id}=props
  const tileData = [
    {
      img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
      title: 'แนวคิดและปรัชญาเศรษฐกิจพอเพียง',
      logo: img,
      int: 'จุฬาลงกรณ์มหาวิทยาลัย',
      view: '103293',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
      logo: img2,
      title: 'แนวคิดและปรัชญาของการบริหารทรัพยากรมนุษย์',
      int: 'สำนักงาน ก.พ.',
      view: '1213',
      author: 'director90',
      point: 4.5,
      vote: 100,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
      logo: img3,
      int: 'มหาลัยธรรมสาสตร์',
      title: 'ภาษาจีนชีวิตประจำวัน',
      view: '45833',
      author: 'Danson67',
      point: 3.8,
      vote: 500,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
      logo: img4,
      int: 'มหาวิทยาลัยกรุงเทพ',
      title: 'การเขียนรายงานอย่างถูกต้อง',
      view: '86942',
      point: 4.7,
      vote: 323,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
      logo: img,
      int: 'จุฬาลงกรณ์มหาวิทยาลัย',
      title: 'การเขียนรายงานอย่างถูกต้อง(2)',
      view: '324898',
      point: 4,
      vote: 220,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/honey.jpg',
      logo: img2,
      int: 'สำนักงาน ก.พ.',
      view: '548976',
      title: 'เรียนรู้ประวัติศาสตร์โลก',

      point: 2.5,
      vote: 89,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
      logo: img2,
      int: 'สำนักงาน ก.พ.',
      view: '103',
      title: 'หลักการและแนวคิดแบบขงจื้อ',
      point: 4.1,
      vote: 1030,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/plant.jpg',
      logo: img,
      int: 'จุฬาลงกรณ์มหาวิทยาลัย',
      view: '345435',
      title: 'เรียนรู้อารยธรรมกรีก',
      point: 4,
      vote: 222,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
      logo: img3,
      int: 'สำนักงาน ก.พ.',
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
      int: 'สำนักงาน ก.พ.',
      view: '8945',
      title: 'เรียนรู้เท่าทันโลกสมัยใหม่',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/bike.jpg',
      logo: img2,
      int: 'สำนักงาน ก.พ.',
      view: '97850',
      title: 'การนำเสนอรายงาน',
      point: 4,
      vote: 200,
    },
  ]
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));
  const md = useMediaQuery(theme.breakpoints.only('md'));
  const lg = useMediaQuery(theme.breakpoints.only('lg'));
  const xl = useMediaQuery(theme.breakpoints.only('xl'));
  const getSize=()=>{
    if(xs){
      return 'xs'
    }
    if(sm){
      return 'sm'
    }
    if(md){
      return 'md'
    }
    if(lg){
      return 'lg'
    }
    if(xl){
      return 'xl'
    }
  


  }
  const history = useHistory()
  const Next = () => {

    setTimeout(() => history.push(`/learning-portal/course/${id}`), 1000)
  }
const classes=useStyles()
  return (
    <Box
     className={classes.box}
    >

          <Grid container direction="row" alignItems="center" justify='space-between' zeroMinWidth>
                <h3 className={classes.line}>{id}</h3>  <Button   onClick={Next} style={{ color:'#0f1626'}}> ดูเพิ่มเติม</Button>
 
            </Grid>
            <Divider style={{ marginBottom: 20 }} />
            <Hidden smUp>
 
              {tileData.map((tile) => (
                <Listitems
                  data={tile.title}
                  logo={tile.logo}
                  int={tile.int}
                  view={tile.view}
                  point={tile.point}
                  vote={tile.vote}
                />
              ))}
            </Hidden>
            <Hidden xsDown>
              <Container maxWidth={getSize()} >
                <Grid container direction="row" alignItems="center" spacing={3}>
                  {tileData.map((tile) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} >
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
            </Hidden>
     
    </Box>
  )
}
