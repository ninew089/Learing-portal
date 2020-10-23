import React from 'react'

import {
  Typography,
  Container,
  InputAdornment,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FcReadingEbook } from 'react-icons/fc'
import { AiOutlineIdcard } from 'react-icons/ai'

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
    marginTop: '10px',
    background: 'lavender',
  },
  margin: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  formControlInfo: {
    margin: theme.spacing(2),
    paddingRight: theme.spacing(4),
  },
}))

export default function SignIn(props: any) {
  const classes = useStyles()

  const { formProps } = props

  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          background: 'white',
          borderRadius: '10px 10px 0px 0px ',
          padding: '10px',
        }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FcReadingEbook />
          </Avatar>
          <Typography component="h1" variant="h5">
            ลงทะเบียนเข้ารับการอบรมออนไลน์
          </Typography>

          <form className={classes.form} noValidate>
            <FormControl className={classes.formControlInfo} fullWidth>
              <TextField
                fullWidth
                id="input-with-icon-textfield"
                label="เลขที่บัตรประชาชน"
                name="userid"
                inputRef={formProps.register}
                helperText={
                  formProps.errors.userid ? formProps.errors.userid.message : ''
                }
                error={!!formProps.errors.userid}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AiOutlineIdcard size={24} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                id="input-with-icon-textfield"
                label="รหัสผ่าน"
                name="password"
                inputRef={formProps.register}
                helperText={
                  formProps.errors.password
                    ? formProps.errors.password.message
                    : ''
                }
                error={!!formProps.errors.password}
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RiLockPasswordLine size={24} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                id="input-with-icon-textfield"
                label="ยืนยันรหัสผ่าน"
                name="comfirmpassword"
                inputRef={formProps.register}
                helperText={
                  formProps.errors.comfirmpassword
                    ? formProps.errors.comfirmpassword.message
                    : ''
                }
                error={!!formProps.errors.comfirmpassword}
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RiLockPasswordLine size={24} />
                    </InputAdornment>
                  ),
                }}
              />

              <Button fullWidth className={classes.submit}>
                เช็ครหัสผู้ใช้
              </Button>
            </FormControl>
          </form>
        </div>
      </Container>
    </>
  )
}
