import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  Avatar,
  Box,
  Divider,
  Button,
} from '@material-ui/core'
// /import { useHistory } from 'react-router-dom'
import img from 'assets/images/11.jpg'
import numberFormat from 'utils/numberFormat'
import { BsLink } from 'react-icons/bs'
import Rating from './Rating'
import Dialog from './DialogCourse'

const useStyles = makeStyles(() => ({
  card: {
    width: '100%',
    background: '#fdfdfd',
    height: '100%',
    boxShadow: '4px 4px 4px 4px rgb(0 0 0 / 8%)',
    borderRadius: '0.5rem',
    transition: '0.4s',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
  main: {
    overflow: 'hidden',
    borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem',
    zIndex: 1,
  },

  avatar: {
    width: 48,
    height: 48,
  },
  tag: {
    display: 'inline-block',
    fontFamily: "'Sen', sans-serif",
    backgroundColor: '#ff5dac',
    borderRadius: '0.5rem',
    padding: '2px 0.5rem',
    color: '#fff',
    marginBottom: '0.5rem',
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#132740',
    paddingLeft: 8,
    marginRight: 8,
    marginBottom: 10,
  },
  author: {
    overflow: 'hidden',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    fontSize: '14px',
    fontWeight: 700,
    color: '#132740',
    padding: 8,
  },
  box: {
    padding: 8,
  },
  view: {
    marginRight: 10,
  },
  dot: {
    height: '10px',
    width: '10px',
    backgroundColor: '#cfcde6',
    borderRadius: '50%',
    display: 'inline-block',
    marginLeft: 10,
    marginRight: 4,
  },
  rating: {
    paddingLeft: 8,
  },
  logo: {
    margin: 8,
  },
  caption: {
    overflow: 'hidden',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    fontSize: '12px',
    color: '#434a54',
    paddingLeft: 14,
    paddingRight: 14,
  },
  detail: {
    marginBottom: 30,
  },
  submit: {
    padding: 0,
    float: 'right',
    margin: 4,
  },
}))

export default function IconBreadcrumbs(props: any) {
  const { data, logo, int, view, point, vote } = props
  const classes = useStyles()
  //const history = useHistory()
  const [open, setOpen] = React.useState<boolean>(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  return (
    <div className={classes.card}>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <div className={classes.main} onClick={handleClickOpen}>
          <img alt="" src={img} width="100%" height="100%" />
        </div>

        <Typography variant={'h2'} className={classes.title}>
          {data}
        </Typography>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.detail}
        >
          <div className={classes.dot} />
          <Box fontWeight={500}>สังคมศาสตร์</Box>

          <div>
            <Box fontWeight={400} className={classes.caption}>
              &nbsp;&nbsp;&nbsp;เรียนรู้ที่จะพูดภาษาอังกฤษกับหลักสูตรที่พิสูจน์แล้วว่าได้ผล
              เรียนที่ไหน เมื่อไหร่ก็ได้ ได้เรียนภาษาอังกฤษกับอ.ผู้เชียวชาญ
              พร้อมที่ปรึกษาส่วนตัว และเรายังการันตีผลลัพท์ที่ได้ Native level
              Teachers Engaging TV series Small Classes
            </Box>
          </div>
        </Grid>

        <div className={classes.logo}>
          <Avatar className={classes.avatar} src={logo} />
        </div>
        <div>
          <div className={classes.author}>{int}</div>
          <div className={classes.rating}>
            <Rating vote={vote} point={point} />
          </div>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.box}
          >
            <Typography
              variant="caption"
              align="left"
              component="p"
              color={'textSecondary'}
            >
              การดู {numberFormat(view)} ครั้ง
            </Typography>
          </Grid>
        </div>
      </Grid>
      <Divider />
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Button
          color="primary"
          href="/learning-portal/catalog/12321"
          className={classes.submit}
        >
          <BsLink size={24} />
        </Button>
      </Grid>

      <Dialog open={open} setOpen={setOpen} />
    </div>
  )
}
