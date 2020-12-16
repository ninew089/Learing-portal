import React from 'react'
import { Box, Grid, IconButton, Avatar, Hidden } from '@material-ui/core'
import { useHistory, useRouteMatch } from 'react-router-dom'
import Courses from './CategoryByTapCourses'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import logo1 from 'assets/images/category/1.png'
import logo2 from 'assets/images/category/2.png'
import logo3 from 'assets/images/category/3.png'
import logo4 from 'assets/images/category/4.png'
import logo5 from 'assets/images/category/5.png'
import logo6 from 'assets/images/category/6.png'
import logo7 from 'assets/images/category/7.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        width: 80,
      },
      [theme.breakpoints.only('xs')]: {
        width: `100%`,
      },
      [theme.breakpoints.only('sm')]: {
        width: `100%`,
      },
    },
    menus: {
      width: '100%',
      borderRadius: '0 0 10px 10px',
      background: '#ffffff',
      [theme.breakpoints.only('xs')]: {
        justify: 'center',
        placeContent: 'center',
      },
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      [theme.breakpoints.only('xs')]: {
        width: theme.spacing(6),
        height: theme.spacing(6),
      },
    },
    text: {
      overflow: 'hidden',
      display: '-webkit-box',
      textOverflow: 'ellipsis',
      fontSize: 10,
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
    },
    textCategory: {
      overflow: 'hidden',
      display: '-webkit-box',
      textOverflow: 'ellipsis',
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
    },
    line: {
      display: 'inline-block',
      borderBottom: '3px solid #f9b122',
      paddingBottom: '2px',
    },
    button: {
      float: 'right',
    },
    box: { color: 'rgb(19 39 64)' },
  }),
)

export default function PointNavigationMenu({ title }: { title: string }) {
  const classes = useStyles()
  const [index, setIndex] = React.useState(0)
  const [open, setOpen] = React.useState(false)
  const history = useHistory()
  const { path } = useRouteMatch()
  const filterCoursebyCategory = (title: string) => {
    history.push(`${path}?category=${title}`)
  }
  const handleClick = (i: any) => (e: React.SyntheticEvent) => {
    filterCoursebyCategory(i)
    setIndex(i)
  }
  const catagory = [
    { title: 'การบริหารงาน ก.พ.', img: logo1 },
    { title: 'การบริหารทรัพยากรบุคคล', img: logo2 },
    { title: 'กฎหมายและระเบียบราชการ', img: logo3 },
    { title: 'การเขียนหนังสือราชการ', img: logo4 },
    { title: 'สังคม (Soft Skill)', img: logo5 },
    { title: 'ดิจิทัล', img: logo6},
    { title: 'ภาษา', img: logo7 },
  ]
  


  const Select = (number: number) => {
    if (number === index) {
      return '#f9b122'
    }
  }
  const SelectWeight = (number: number) => {
    if (number === index) {
      return 'bold'
    }
  }

  return (
    <>
      <Box className={classes.box} fontWeight={700} fontSize="h4.fontSize">
        {title}
      </Box>

      <Hidden smDown>
        <Grid container direction="row" justify="center" alignItems="center">
          {catagory.map((name, i) => (
            <IconButton
              onClick={handleClick(i)}
              className={classes.root}
              disableRipple
            >
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
              >
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                >
                  <Avatar
                    alt={name.title}
                    src={name.img}
                    className={classes.large}
                  />
                </Grid>
                <Grid
                  className={classes.text}
                  style={{
                    color: Select(i),
                    fontWeight: SelectWeight(i),
                  }}
                >
                  {name.title}
                </Grid>
              </Grid>
            </IconButton>
          ))}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.box}
        >
          {catagory.map((name, i) => (
            <Grid item xs={3} sm={2}>
              <IconButton
                onClick={handleClick(i)}
                className={classes.root}
                disableRipple
              >
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                >
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                  >
                    <Avatar
                      alt={name.title}
                      src={name.img}
                      className={classes.large}
                    />
                  </Grid>
                  <Grid
                    className={classes.text}
                    style={{
                      color: Select(i),
                      fontWeight: SelectWeight(i),
                    }}
                  >
                    {name.title}
                  </Grid>
                </Grid>
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </Hidden>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Courses id={index} />
      </Grid>
    </>
  )
}
