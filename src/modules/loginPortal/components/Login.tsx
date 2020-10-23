import React from 'react'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  InputAdornment,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Link,
  Typography,
} from '@material-ui/core'

import { NavLink } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FcReadingEbook } from 'react-icons/fc'

import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),

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
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  border: {
    borderBottom: '1px solid darkgray',
    width: '100%',
  },

  content: {
    padding: ' 0 10px 0 10px',
  },
  divider: {
    marginTop: '20px',
  },
  textdivider: {
    color: 'royalblue',
  },
  nav: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  block: {
    background: 'white',
    borderRadius: '10px',
    padding: '10px',
    height: '100%',
    marginTop: '20px',
  },
  font: {
    fontWeight: 900,
  },
}))

export default function SignIn() {
  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    validationSchema: yup.object().shape({
      user: yup.string().required(),
      password: yup.string().required(),
    }),
  })
  const submit = (loginInfo: object) => {
    console.log(loginInfo)
  }

  return (
    <form onSubmit={handleSubmit(submit)} autoComplete="off">
      <Container component="main" maxWidth="xs" className={classes.block}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FcReadingEbook size={36} />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.font}>
            Learning Portal
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              className={classes.margin}
              fullWidth
              label="เลขประจำตัวประชาชน"
              inputRef={register}
              name="user"
              helperText={errors.user ? 'กรุณากรอกเลขประจำตัวประชาชน' : ''}
              error={!!errors.user}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AiOutlineUser size={24} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className={classes.margin}
              fullWidth
              id="input-with-icon-textfield"
              label="รหัสผ่าน"
              type="password"
              inputRef={register}
              name="password"
              helperText={errors.password ? 'กรุณากรอกรหัสผ่าน' : ''}
              error={!!errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RiLockPasswordLine size={24} />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              style={{ marginTop: '10px', background: 'lavender' }}
            >
              เข้าสู่ระบบ
            </Button>

            <Grid container>
              <Grid item xs>
                <NavLink to="/learning-portal/forget" className={classes.nav}>
                  <Link variant="body2">ลืมรหัสผ่าน</Link>
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/learning-portal/sign" className={classes.nav}>
                  <Link variant="body2">{'สมัครสมาชิก'}</Link>
                </NavLink>
              </Grid>
            </Grid>
            <div className={classes.container}>
              <div className={classes.border} />
              <span className={classes.content}>
                <h3 className={classes.textdivider}>OR</h3>
              </span>
              <div className={classes.border} />
            </div>

            <Button
              type="submit"
              fullWidth
              style={{ marginTop: '10px', background: 'lavender' }}
            >
              LOGIN WITH ETDA CONNECT
            </Button>
          </form>
        </div>
      </Container>
    </form>
  )
}
