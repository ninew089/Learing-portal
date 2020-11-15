import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
// /import { useHistory } from 'react-router-dom'
import img from 'assets/images/11.jpg'

const useStyles = makeStyles(() => ({
  card: {
    width: '100%',

    height: 200,
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
    fontSize: '10px',
    color: '#434a54',
    paddingLeft: 14,
    paddingRight: 14,
  },
  image: {
    borderRadius: 10,
  },
}))

export default function IconBreadcrumbs(props: any) {
  const { data } = props
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
          <img
            alt=""
            src={img}
            width="100%"
            height="160px"
            className={classes.image}
          />
        </div>

        <Typography variant={'h2'} className={classes.title}>
          {data}
        </Typography>
      </Grid>
    </div>
  )
}
