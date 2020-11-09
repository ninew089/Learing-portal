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
import { resetPasswordProps } from '../tyscript'
import { makeStyles } from '@material-ui/core/styles'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FcReadingEbook } from 'react-icons/fc'
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

  margin: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  container: {
    background: 'white',
    borderRadius: '10px',
    padding: '10px',
  },
  submit: {
    marginTop: '10px',
    background: 'lavender',
  },
}))
export default function SignIn() {
  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm<resetPasswordProps>({
    mode: 'onChange',
    validationSchema: yup.object().shape({
      pwd: yup.string().required(),
      pwd1: yup.string().required(),
      pwd2: yup
        .string()
        .required()
        .oneOf([yup.ref('password1')], 'กรุณากรอกรหัสให้เหมือนกัน')
        .required('กรุณากรอกรหัสผ่าน ( 2 )'),
    }),
  })
  const onSubmitData = handleSubmit(({ pwd, pwd1, pwd2 }) => {
    console.log(pwd, pwd1, pwd2)
  })

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FcReadingEbook />
        </Avatar>
        <Typography component="h1" variant="h5">
          เปลี่ยนรหัสผ่าน
        </Typography>
        <form className={classes.form} onSubmit={onSubmitData}>
          <TextField
            className={classes.margin}
            fullWidth
            label="รหัสผ่านเดิม"
            type="password"
            name="pwd"
            inputRef={register}
            helperText={errors.pwd ? 'กรอกรหัสผ่าน' : ''}
            error={!!errors.pwd}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RiLockPasswordLine size={24} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            className={classes.margin}
            fullWidth
            label="รหัสผ่าน (1)"
            name="pwd1"
            inputRef={register}
            helperText={errors.pwd1 ? 'กรอกรหัสผ่าน' : ''}
            error={!!errors.pwd1}
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
            className={classes.margin}
            fullWidth
            id="input-with-icon-textfield"
            label="รหัสผ่าน (2)"
            name="pwd2"
            inputRef={register}
            helperText={errors.pwd2 ? 'กรอกรหัสผ่าน' : ''}
            error={!!errors.pwd2}
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RiLockPasswordLine size={24} />
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" fullWidth className={classes.submit}>
            ส่งข้อมลู
          </Button>
        </form>
      </div>
    </Container>
  )
}
