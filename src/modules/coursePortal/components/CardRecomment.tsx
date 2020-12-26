import React from 'react'
import NoSsr from '@material-ui/core/NoSsr'
import GoogleFontLoader from 'react-google-font-loader'
import { Grid, Box, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Column, Row, Item } from '@mui-treasury/components/flex'
import img from 'assets/images/22.jpg'

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: '10px',
    width: '95%',
    borderRadius: 16,
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  header: {
    fontFamily: 'Barlow, san-serif',
  },
  headline: {
    color: '#142840',
    fontSize: '1.25rem',
    fontWeight: 600,
  },
  link: {
    color: '#2281bb',
    padding: '0 0.25rem',
    fontSize: '0.875rem',
  },
  actions: {
    color: '#BDC9D7',
  },
  divider: {
    backgroundColor: '#d9e2ee',
    margin: '0 20px',
  },
  caption: {
    overflow: 'hidden',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    color: '#59626f',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
    },
  },
  category: {
    color: ' #59636f',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
    },
  },
  name: {
    color: '#142840',
    overflow: 'hidden',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  items: {
    marginBottom: 4,
    transition: 'transform 0.7s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
 
    },
  },
  image: {
    borderRadius: 10,
    boxShadow: '0 4px 4px 0 #BDC9D7',
  },
}))

export const SocialCardDemo = React.memo(function SocialCard(props: any) {
  const { title } = props
  const classes = useStyles()
  const ten = [1, 2, 3, 4, 5]
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Barlow', weights: [400, 600] }]} />
      </NoSsr>
      <Column p={0} gap={0} className={classes.card}>
        <Row wrap p={2} alignItems={'baseline'} className={classes.header}>
          <Item stretched className={classes.headline}>
            {title}
          </Item>
        </Row>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {ten.map((number, i) => (
            <Grid
              container
              justify="flex-start"
              alignItems="center"
              spacing={2}
              className={classes.items}
            >
              <Grid item xs={5}>
                <img
                  src={img}
                  alt="logo"
                  width="100%"
                  className={classes.image}
                />
              </Grid>
              <Grid item xs={7}>
                <Box
                  fontSize={12}
                  fontWeight={700}
                  className={classes.category}
                >
                  {number} • สหศึกษา
                </Box>
                <Box fontSize={14} fontWeight={700} className={classes.name}>
                  การบริหารเวลาในชีวิตประจำวัน ในยุคปัจจุบัน
                </Box>
                <Box fontSize={12} fontWeight={400} className={classes.caption}>
                  การบริหารเวลาในชีวิตประจำวัน. ในการบริหารเวลาให้เป็นนั้น
                  ต้องมีการวางแผนที่ดีก่อนไม่เช่นนั้นจะเกิดความโกลาหลขึ้นได้
                  และจะวุ่นวายกันไปกันใหญ่
                </Box>
                <Divider />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Column>
    </>
  )
})
