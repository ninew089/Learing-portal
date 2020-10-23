import React from 'react'
import Course2 from './CourseDetails-v2'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  GridList,
  Grid,
  Box,
  GridListTile,
  GridListTileBar,
  useMediaQuery,
  Divider,
  Typography,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

import Course from './CourseDetails'
import img from 'assets/logo/logo1.jpg'
import img2 from 'assets/logo/logo2.png'
import img3 from 'assets/logo/logo3.png'
import img4 from 'assets/logo/logo4.png'
const useStyles = makeStyles((theme) => ({
  gridTile: {
    width: '25%;',

    height: '1000px',
  },
  gridList: {
    flexWrap: 'nowrap',


    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  },
  title: {
    color: theme.palette.primary.light,
    height: '100%',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0) 0%)',
  },
  container: {
    background: '#f5f5f5',
    marginBottom: '10px',
    marginTop: '10px',
    borderRadius: '10px',
    overflowX: 'hidden',
  },
  titleMenu: {
    paddingLeft: '20px',
    color: '#44aeff',
  },
  linkall: {
    textAlign: 'right',
    paddingRight: '20px',
    '&:hover': {
      fontSize: '15px',
    },
  },
  nav: {
    color: '#44aeff',
    textDecoration: 'inherit',
  },
  listitem: {
    margin: '8px',
    padding: '8px',
  },box:{
    paddingTop:10
  }
}))

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
  const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SingleLineGridList(props: any) {
  const { number, name, title, type } = props
  const [progress, setProgress] = React.useState(0)

  const classes = useStyles()
  const tileData = [
    {
      img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
      title: 'A01 เศรษฐกิจพอเพียง',
      logo: img,
      int: 'จุฬาลงกรณ์มหาวิทยาลัย',
      view: '103293',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
      logo: img2,
      title: 'A02 การบริหารทรัพยากรมนุษย์',
      int: 'สำนักงาน ก.พ.',
      view: '1213',
      author: 'director90',
      point: 4.5,
      vote: 100,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
      logo: img3,
      int: 'มหาลัยธรรมศาสตร์',
      title: 'C01 ภาษาจีนชีวิตประจำวัน',
      view: '45833',
      author: 'Danson67',
      point: 3.8,
      vote: 500,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
      logo: img4,
      int: 'มหาวิทยาลัยศรีปทุม',
      title: 'A04 การเขียนรายงานอย่างถูกต้อง',
      view: '86942',
      point: 4.7,
      vote: 323,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
      logo: img,
      int: 'จุฬาลงกรณ์มหาวิทยาลัย',
      title: 'A06 การเขียนรายงานอย่างถูกต้อง(2)',
      view: '324898',
      point: 4,
      vote: 220,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/honey.jpg',
      logo: img2,
      int: 'สำนักงาน ก.พ.',
      view: '548976',
      title: 'A08 เรียนรู้ประวัติศาสตร์โลก',

      point: 2.5,
      vote: 89,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
      logo: img2,
      int: 'สำนักงาน ก.พ.',
      view: '103',
      title: 'A09 หลักการและแนวคิดแบบขงจื้อ',
      point: 4.1,
      vote: 1030,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/plant.jpg',
      logo: img,
      int: 'จุฬาลงกรณ์มหาวิทยาลัย',
      view: '345435',
      title: 'A10 เรียนรู้อารยธรรมกรีก',
      point: 4,
      vote: 222,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
      logo: img3,
      int: 'สำนักงาน ก.พ.',
      view: '94293',
      title: 'A11 ปลุกผักด้วยเทคโนโลยี',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/olive.jpg',
      logo: img4,
      int: 'มหาวิทยาลัยศรีปทุม',
      view: '94303',
      title: 'A12 เลี้ยงหมุอย่างไรให้มีความสุข',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/star.jpg',
      logo: img2,
      int: 'สำนักงาน ก.พ.',
      view: '8945',
      title: 'A13 เรียนรู้เท่าทันโลกสมัยใหม่',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/bike.jpg',
      logo: img2,
      int: 'สำนักงาน ก.พ.',
      view: '97850',
      title: 'A14 การนำเสนอรายงาน',
      point: 4,
      vote: 200,
    },
  ]

  const tileData1 = [
    {
      img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
      title: 'C01 หลักสูตรอบรมข้าราชการบรรจุใหม่ ',
      logo: img,
      int: 'สำนักงาน ก.พ.',
      view: '103293',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
      logo: img2,
      title: 'C01 หลักสูตรอบรมข้าราชการบรรจุใหม่ ',
      int: 'สำนักงาน ก.พ.',
      view: '1213',
      author: 'director90',
      point: 4.5,
      vote: 100,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
      logo: img3,
      int: 'สำนักงาน ก.พ.',
      title: 'C01 หลักสูตรอบรมข้าราชการบรรจุใหม่ ',
      view: '45833',
      author: 'Danson67',
      point: 3.8,
      vote: 500,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
      logo: img4,
      int: 'สำนักงาน ก.พ.',
      title: 'C01 หลักสูตรอบรมข้าราชการบรรจุใหม่ ',
      view: '86942',
      point: 4.7,
      vote: 323,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
      logo: img,
      int: 'สำนักงาน ก.พ.',
      title: 'C01 หลักสูตรอบรมข้าราชการบรรจุใหม่ ',
      view: '324898',
      point: 4,
      vote: 220,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/honey.jpg',
      logo: img2,
      int: 'สำนักงาน ก.พ.',
      view: '548976',
      title: 'C01 หลักสูตรอบรมข้าราชการบรรจุใหม่ ',

      point: 2.5,
      vote: 89,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
      logo: img2,
      int: 'สำนักงาน ก.พ.',
      view: '103',
      title: 'C01 หลักสูตรอบรมข้าราชการบรรจุใหม่ ',
      point: 4.1,
      vote: 1030,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/plant.jpg',
      logo: img,
      int: 'สำนักงาน ก.พ.',
      view: '345435',
      title: 'C01 หลักสูตรอบรมข้าราชการบรรจุใหม่ ',
      point: 4,
      vote: 222,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
      logo: img3,
      int: 'สำนักงาน ก.พ.',
      view: '94293',
      title: 'A11 ปลุกผักด้วยเทคโนโลยี',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/olive.jpg',
      logo: img4,
      int: 'สำนักงาน ก.พ.',
      view: '94303',
      title: 'A12 เลี้ยงหมุอย่างไรให้มีความสุข',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/star.jpg',
      logo: img2,
      int: 'สำนักงาน ก.พ.',
      view: '8945',
      title: 'A13 เรียนรู้เท่าทันโลกสมัยใหม่',
      point: 4,
      vote: 200,
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/bike.jpg',
      logo: img2,
      int: 'สำนักงาน ก.พ.',
      view: '97850',
      title: 'A14 การนำเสนอรายงาน',
      point: 4,
      vote: 200,
    },
  ]
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.up('xs'))
  const xl = useMediaQuery(theme.breakpoints.up('xl'))

  const sm = useMediaQuery(theme.breakpoints.up('sm'))
  const md = useMediaQuery(theme.breakpoints.up('md'))
  const lg = useMediaQuery(theme.breakpoints.up('lg'))

  const getColor = (k: number) => {
    switch (k) {
      case 0:
        return '#fafafa'
      case 1:
        return '#fafafa'

      case 2:
        return '#fafafa'
      case 3:
        return '#3f51b5'
      case 4:
        return '#002984'
      default:
        return 'white'
    }
  }
  const getBackground = (k: number) => {
    switch (k) {
      case 0:
        return '#e2a418'
      case 1:
        return '#3e6d88'

      case 2:
        return '#ab987a'
      case 3:
        return '#3f51b5'
      case 4:
        return '#002984'
      default:
        return 'black'
    }
  }
  function getCol() {
    if (xl) {
      return 5.8
    }
    if (lg) {
      return 4.5
    }
    if (md) {
      return 3.4
    }

    if (sm) {
      return 2.4
    }
    if (xs) {
      return 1.1
    }
  }
  const history = useHistory()
  const Next = () => {
    setProgress(100)
    setTimeout(() => history.push(`/learning-portal/course/${title}`), 1000)
  }
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Box className={classes.container} boxShadow={3}>
        <div style={{ background: getBackground(type) }}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid
              item
              xs={9}
              style={{
                paddingLeft: '20px',
                color: getColor(type),
                justifyContent: 'center',
              }}
            >
              <Typography
                variant={'subtitle1'}
                style={{ fontWeight: 900 }}
                noWrap
              >
                {name} {number} {title}
              </Typography>
            </Grid>
            <Grid item xs={3} className={classes.linkall}>
              <Typography
                variant={'button'}
                style={{ fontWeight: 900, color: getColor(type) }}
                noWrap
                onClick={Next}
              >
                ดูเพิ่มเติม
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div className={classes.listitem}>
          {title === 'หลักสูตร' ? (
            <GridList
              className={classes.gridList}
              cols={getCol()}
              cellHeight={390}
            >
              {tileData1.map((tile) => (
                <GridListTile key={tile.img}>
                  <div className={classes.box}>
                  <Course2
                    data={tile.title}
                    logo={tile.logo}
                    int={tile.int}
                    view={tile.view}
                    point={tile.point}
                    vote={tile.vote}
                  />
</div>
                  <GridListTileBar
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
          ) : (
            <GridList
              className={classes.gridList}
              cols={getCol()}
              cellHeight={348}
            >
              {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                  <Course
                    data={tile.title}
                    logo={tile.logo}
                    int={tile.int}
                    view={tile.view}
                    point={tile.point}
                    vote={tile.vote}
                  />

                  <GridListTileBar
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
          )}
        </div>
      </Box>
    </>
  )
}
