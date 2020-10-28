import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import { NavLink } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { FcReadingEbook } from 'react-icons/fc'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
}))

export default function SignIn() {
  const classes = useStyles()

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ background: 'white', borderRadius: '10px', padding: '10px' }}
    >

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FcReadingEbook />
        </Avatar>
        <Typography component="h1" variant="h5">
          404 PAGE NOT FOUND :(
        </Typography>
        <Typography component="h1" variant="h1">
          404
        </Typography>

        <Typography component="h6" variant="h6">
          Maybe the page you are looking for has been removed, or you typed in
          the wrong URL
        </Typography>
        <form className={classes.form} noValidate>
          <NavLink
            to="/learning-portal"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <Button
              type="submit"
              fullWidth
              style={{ marginTop: '10px', background: 'lavender' }}
            >
              กลับสู่หน้าหลัก
            </Button>
          </NavLink>
        </form>
      </div>
    </Container>
  )
}
