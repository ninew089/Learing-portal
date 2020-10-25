import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { BsLink } from 'react-icons/bs'
import {
  Card,
  CardActionArea,
  Button,
  Avatar,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Box,
  Divider,
} from '@material-ui/core'

import Dialog from './Dialog'
import Rating from './Rating'

import numberFormat from 'utils/numberFormat'
import { AiFillEye } from 'react-icons/ai'

import img from 'assets/images/01.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 14,
    marginLeft: 8,
    maxWidth: 224,
    [theme.breakpoints.only('xs')]: {
      '&:hover': {
        transform: 'scale(1.01)',
      },
    },
    height: 320,
    '&:hover': {
      transform: 'scale(1.03)',
    },
    background: '#fafafa',
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    [theme.breakpoints.only('xs')]: {
      width: 36,
      height: 36,
    },
  },
  action: {
    flexGrow: 2,
  },
  content: {
    margin: 0,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
  },
  grid: {
    margin: 0,
    padding: 0,
  },
  cardHeader: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',

    maxWidth: 140,
  },
  icon: {
    marginRight: '2px',
    color: theme.palette.text.secondary,
  },
  header: {
    margin: 2,
    padding: 8,
  },
  cardHeaderText: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontWeight: 700,
    maxWidth: 140,
  },
  cardHeaderSecondaryText: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontWeight: 500,
    maxWidth: 140,
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
}))

export default function RecipeReviewCard(props: any) {
  const { data, logo, int, view, point, vote } = props
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClickOpen}>
          <img alt="" src={img} width="100%" height="160px" />
          <CardHeader
            className={classes.header}
            avatar={
              <Avatar aria-label="recipe" src={logo} className={classes.avatar}>
                R
              </Avatar>
            }
            title={
              <Typography
                variant={'subtitle2'}
                className={classes.cardHeaderText}
                noWrap
                gutterBottom
              >
                {data}
              </Typography>
            }
            subheader={
              <Typography
                variant={'body2'}
                noWrap
                className={classes.cardHeaderSecondaryText}
              >
                {int}
              </Typography>
            }
          />
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <div className={classes.dot} />
            </Grid>
            <Grid item>
              <Box fontWeight={700}>สังคมศาสตร์</Box>
            </Grid>
          </Grid>

          <Divider variant="middle" />
        </CardActionArea>
        <CardContent className={classes.content}>
          <Grid
            container
            className={classes.grid}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={9}>
              <Rating vote={vote} point={point} />
            </Grid>
            <Grid item xs={3}>
              <Button
                color="primary"
                href="/learning-portal/catalog/12321"
                style={{ padding: 0 }}
              >
                <BsLink size={24} />
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <AiFillEye size={12} className={classes.icon} />
            <Typography
              variant="caption"
              align="left"
              component="p"
              color={'textSecondary'}
            >
              {numberFormat(view)} ครั้ง
            </Typography>
          </Grid>
        </CardContent>
      </Card>
      <Dialog open={open} setOpen={setOpen} />
    </div>
  )
}
