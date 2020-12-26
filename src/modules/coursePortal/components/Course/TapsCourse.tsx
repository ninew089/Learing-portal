import React from 'react'
import { Box, Grid, IconButton, Avatar, Hidden } from '@material-ui/core'
import { useHistory, useRouteMatch } from 'react-router-dom'
import Courses from './CategoryByTapCourses'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {category} from 'data/category'

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
  const history = useHistory()
  const { path } = useRouteMatch()
  const filterCoursebyCategory = (title: string) => {
    history.push(`${path}?category=${title}`)
  }
  const handleClick = (i: any) => (e: React.SyntheticEvent) => {
    filterCoursebyCategory(i)
    setIndex(i)
  }



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
          {category.map((name, i) => (
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
          {category.map((name, i) => (
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
      <Grid container direction="row" justify="center" alignItems="center">
        <Courses id={index} />
      </Grid>
    </>
  )
}
