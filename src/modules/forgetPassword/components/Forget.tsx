import React from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  InputAdornment,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { AiFillIdcard, AiOutlineMail } from 'react-icons/ai'
import { FcReadingEbook } from 'react-icons/fc'
import Dateth from './DateTh'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

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
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
  font: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontWeight: 500,
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 1,
    marginBottom: 1,
  },
  marginDate: {
    margin: theme.spacing(0),
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 4,
    marginBottom: 4,
  },
}))

export default function SignIn() {
  const classes = useStyles()

  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    validationSchema: yup.object().shape({
      userId: yup.string().required(),
      email: yup.string().required().email(),
      ybd: yup.string().required(),
    }),
  })
  const onSubmitData = (data: any) => {
    console.log(data)
  }

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
          ลืมรหัสผ่าน
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmitData)}>
          <TextField
            className={classes.margin}
            fullWidth
            label="เลขประจำตัวประชาชน"
            name="userId"
            inputRef={register}
            helperText={errors.userId ? 'กรุณากรอกเลขประจำตัวประชาชน' : ''}
            error={!!errors.userId}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AiFillIdcard size={24} />
                </InputAdornment>
              ),
            }}
          />
          <Dateth title={'ปีเกิด'} register={register} name={'ybd'} />

          <TextField
            className={classes.margin}
            fullWidth
            id="input-with-icon-textfield"
            label="อีเมลที่ใช้สมัครสมาชิก"
            name="email"
            inputRef={register}
            helperText={errors.email ? 'กรุณากรอกอีเมลที่ใช้สมัครสมาชิก' : ''}
            error={!!errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AiOutlineMail size={24} />
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            style={{ marginTop: '10px', background: 'lavender' }}
          >
            ยืนยันรหัสผ่าน
          </Button>
        </form>
      </div>
    </Container>
  )
}
