import React,{useState} from 'react'
import { Avatar, Grid, Box, Divider,Button } from '@material-ui/core'
import { Row, Item } from '@mui-treasury/components/flex'
import { Info, InfoCaption } from '@mui-treasury/components/info'
import Rating from './Rating'
import Dialog from './Dialog'
import { makeStyles } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
import GoogleFontLoader from 'react-google-font-loader'
import { BsLink } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import numberFormat from 'utils/numberFormat'

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Prompt', san-serif",

    fontSize: 14,
  },
  dot: {
    height: '10px',
    width: '10px',
    backgroundColor: '#cfcde6',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: 4,
  },
  title: {
    overflow: 'hidden',
    fontWeight: 'bold',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    maxWidth: 300,
    WebkitLineClamp: 2,
    fontSize: 12,
    WebkitBoxOrient: 'vertical',
  },
  content: {
    overflow: 'hidden',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    fontSize: 10,
    maxWidth: 240,
    color: '#757479',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
  container: {
    margin: 0,
    padding: 0,
    background: '#FFFFFF',
  },
  avatar: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  avatarStyles: {
    height: 56,
    width: 64,
    radius: 8,
  },
  view: {
    fontSize: 8,
    maxWidth: 240,
    color: '#A9A9A9',
  },
  rating: {
    paddingTop:8,
    fontSize: 10,
    maxWidth: 240,
    marginBottom: 4, marginTop: 4,

  },int:{
    paddingTop:8,
    paddingBottom:4
  }
}))
export default function PopularListItemDemo(props: any) {
  const classes = useStyles()
  const { data, logo, int, view, point, vote } = props
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  return (
    <div className={classes.root}>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Kanit', weights: [400, 700] }]} />
      </NoSsr>
      <Row gap={3} className={classes.container}>
        <Item>
          <Avatar
            variant={'rounded'}
            className={classes.avatarStyles}
            src={
              'https://freedesignfile.com/upload/2016/03/Abstract-geometric-petals-vector-graphic-03.jpg'
            }
          />
        </Item>
        <Info>
          <div>
            <div className={classes.dot} />
            สังคมศาสตร์
          </div>
          <div className={classes.title}>{data}</div>
          <div className={classes.rating}>
            <Rating vote={vote} point={point} />
          </div>

          <Grid container direction="row" className={classes.int}>
            <Avatar aria-label="recipe" src={logo} className={classes.avatar} />

            <Grid item xs={8}>
              <Box fontSize={12}>{int}</Box>
            </Grid>
          </Grid>
          <InfoCaption className={classes.content} onClick={handleClickOpen}>
            เรียนรู้ที่จะพูดภาษาอังกฤษกับหลักสูตรที่พิสูจน์แล้วว่าได้ผล
            เรียนที่ไหน เมื่อไหร่ก็ได้ ได้เรียนภาษาอังกฤษกับอ.ผู้เชียวชาญ
            พร้อมที่ปรึกษาส่วนตัว และเรายังการันตีผลลัพท์ที่ได้ Native level
            Teachers Engaging TV series Small Classes
          </InfoCaption>
          <InfoCaption className={classes.view}>
            <AiFillEye size={6} /> {numberFormat(view)}
          </InfoCaption>

        
          <Button
                color="primary"
                href="/learning-portal/catalog/12321"
                style={{ padding: 0,float:'right' }}
                
              >
                <BsLink size={16} />
              </Button>
      
        </Info>
      </Row>
      <Divider />
      <Dialog open={open} setOpen={setOpen} />
    </div>
  )
}
