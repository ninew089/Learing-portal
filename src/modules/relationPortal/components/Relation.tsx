import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
//@ts-ignore
import ParallaxSlide from '@mui-treasury/components/slide/parallax'
//@ts-ignore
import cx from 'clsx'
import { Button, useMediaQuery } from '@material-ui/core'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
//@ts-ignore
import DotIndicator from '@mui-treasury/components/indicator/dot'
import img from 'assets/images/03.jpg'
import img2 from 'assets/images/04.jpg'

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
      'https://material-ui.com/static/images/grid-list/morning.jpg',
  },
]

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
      height: '180px',
    },
    [breakpoints.up('sm')]: {
      height: '200px',
    },
    [breakpoints.up('md')]: {
      height: '240px',
    },
    [breakpoints.up('lg')]: {
      height: '320px',
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

  text: {
    // shared style for text-top and text-bottom
    fontFamily: 'Poppins, san-serif',
    fontWeight: 900,
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
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.down('xs'))
  const sm = useMediaQuery(theme.breakpoints.down('sm'))
  const md = useMediaQuery(theme.breakpoints.down('md'))
  const lg = useMediaQuery(theme.breakpoints.down('lg'))
  const xl = useMediaQuery(theme.breakpoints.down('xl'))
  function findScreen() {
    if (xs) {
      return 180
    }
    if (sm) {
      return 220
    }
    if (md) {
      return 220
    }
    if (lg) {
      return 320
    }
    if (xl) {
      return 320
    }
  }

  // eslint-disable-next-line react/prop-types
  const renderElements = ({
    index,
    onChangeIndex,
  }: {
    index: number
    onChangeIndex: any
  }) => (
    <>
      <Button
        className={cx(classes.arrow, classes.arrowLeft)}
        // classes={arrowStyles}
        disabled={index === 0}
        onClick={() => onChangeIndex(index - 1)}
      >
        <KeyboardArrowLeft />
      </Button>
      <Button
        className={cx(classes.arrow, classes.arrowRight)}
        //classes={arrowStyles}
        disabled={index === data.length - 1}
        onClick={() => onChangeIndex(index + 1)}
      >
        <KeyboardArrowRight />
      </Button>

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
  const renderChildren = ({
    injectStyle,
    fineIndex,
  }: {
    injectStyle: any
    fineIndex: any
  }) =>
    data.map(({ id, title, subtitle, image }, i) => (
      <div key={id} className={classes.slide}>
        <div
          className={classes.imageContainer}
          style={{
            background: `#fffff`,
            backgroundSize: ` ${window.screen.width}px ${findScreen()}px`,
          }}
        >
          <img src={image} alt="" width={'100%'} height={`${findScreen()}px`} />
          <div style={{ position: 'fixed', bottom: 0, right: 0 }}></div>
        </div>
      </div>
    ))
  return (
    <div className={classes.root}>
      <ParallaxSlide renderElements={renderElements}>
        {renderChildren}
      </ParallaxSlide>
    </div>
  )
}

export default ParallaxCarousel
