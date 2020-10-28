import React from 'react'
//@ts-ignore
import { autoPlay } from 'react-swipeable-views-utils'
//@ts-ignore
import SwipeableViews from 'react-swipeable-views'
import { makeStyles } from '@material-ui/core/styles'
//@ts-ignore
import ParallaxSlide from '@mui-treasury/components/slide/parallax'
//@ts-ignore
import cx from 'clsx'
import { Button } from '@material-ui/core'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
//@ts-ignore
import DotIndicator from '@mui-treasury/components/indicator/dot'
import img from 'assets/images/03.jpg'
import img2 from 'assets/images/04.jpg'
import img1 from 'assets/images/02.jpg'
import { NavLink } from 'react-router-dom'
//@ts-ignore

const data = [
  {
    id: 1,
    title: 'Huarache',
    subtitle: 'Gripp',
    image:
      // eslint-disable-next-line max-len
      img,
  },
  {
    id: 2,
    title: 'Air Max',
    subtitle: '270 P',
    image:
      // eslint-disable-next-line max-len
      img2,
  },
  {
    id: 3,
    title: 'Air Max',
    subtitle: 'Deluxe',
    image:
      // eslint-disable-next-line max-len
      img1,
  },
]
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
  root: {
    // a must if you want to set arrows, indicator as absolute
    position: 'relative',
    width: '100%',
  },
  slide: {
    perspective: 1000, // create perspective
    overflowX: 'hidden',
    // relative is a must if you want to create overlapping layers in children
    position: 'relative',

    height: '100%',
  },
  imageContainer: {
    display: 'block',
    position: 'relative',
    zIndex: 2,
    [breakpoints.up('xs')]: {
      height: '120px',
    },
    [breakpoints.up('sm')]: {
      height: '240px',
    },
    [breakpoints.up('md')]: {
      height: '320px',
    },
    [breakpoints.up('lg')]: {
      height: '460px',
    },

    paddingBottom: '10.25%',
  },
  image: {
    display: 'block',
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    objectFit: 'cover',

    [breakpoints.up('md')]: {
      backgroundSize: `220px ${window.screen.width}px`,
    },
    [breakpoints.up('lg')]: {
      backgroundSize: `320px ${window.screen.width}px`,
    },
  },
  arrow: {
    display: 'inline-flex',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [breakpoints.up('sm')]: {
      display: 'inline-flex',
    },
  },
  arrowLeft: {
    left: 0,
  },
  arrowRight: {
    right: 0,
  },
  link: {
    display: 'inline-flex',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [breakpoints.up('sm')]: {
      display: 'inline-flex',
    },
    left: '20%',
  },

  text: {
    // shared style for text-top and text-bottom
    fontFamily: 'Poppins, san-serif',
    fontWeight: 700,
    position: 'absolute',
    color: palette.common.white,
    padding: '0 8px',
    transform: 'rotateY(45deg)',
    lineHeight: 1.2,
    [breakpoints.up('sm')]: {
      padding: '0 16px',
    },
    [breakpoints.up('md')]: {
      padding: '0 24px',
    },
  },
  indicatorContainer: {
    textAlign: 'center',
  },
}))

const ParallaxCarousel = () => {
  const classes = useStyles()

  const [index, onChangeIndex] = React.useState<number>(0)
  const renderElements = () => (
    <>
      <Button
        className={cx(classes.arrow, classes.arrowLeft)}
        disabled={index === 0}
        onClick={() => onChangeIndex(index - 1)}
      >
        <KeyboardArrowLeft />
      </Button>
      <Button
        className={cx(classes.arrow, classes.arrowRight)}
        disabled={index === data.length - 1}
        onClick={() => onChangeIndex(index + 1)}
      >
        <KeyboardArrowRight />
      </Button>
      {index === 5 ? (
        <Button className={classes.link} style={{ color: 'white' }}>
          Click
        </Button>
      ) : (
        ''
      )}

      <div className={classes.indicatorContainer}>
        {data.map(({ id }, i) => (
          <DotIndicator
            key={id}
            active={i === index}
            onClick={() => onChangeIndex(i)}
          />
        ))}
      </div>
    </>
  )
  const renderChildren = () => (
    <AutoPlaySwipeableViews index={index} onChangeIndex={onChangeIndex}>
      {data.map(({ id, title, subtitle, image }, i) => (
        <div key={id} className={classes.slide}>
          <div className={classes.imageContainer}>
            <NavLink
              to="/learning-portal/login"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <img src={image} alt="" width={'100%'} />
            </NavLink>
            <div style={{ position: 'fixed', bottom: 0, right: 0 }}></div>
          </div>
        </div>
      ))}
    </AutoPlaySwipeableViews>
  )

  return (
    <div className={classes.root}>
      <ParallaxSlide renderElements={renderElements}>
        {renderChildren}
      </ParallaxSlide>
    </div>
  )
}

export default ParallaxCarousel
