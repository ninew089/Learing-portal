import React from 'react'
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  InputAdornment,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  input: {
    color: '#0f1626',
    fontWeight: 600,
    '& .MuiInputBase-root.MuiOutlineInput-root': {
      color: '#45A29E',
      borderColor: '#757575',
      fontWeight: 600,
    },
  },
  textfield: {
    marginTop: 10,
    '& .MuiFormHelperText-root.Mui-error ': {
      color: 'ff533d',
      fontWeight: 600,
      borderWidth: '1px',
    },
    '& .MuiInput-underline.Mui-error:after': {
      borderColor: 'ff533d',
      borderWidth: '1px',
    },
    '& label.MuiFormLabel-root': {
      fontWeight: 600,
      '&:after .Mui-error': {
        borderColor: '#ff533d',
        borderWidth: '1px',
      },
    },
    '& label.Mui-focused': {
      color: '#132740',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#b7b7b7',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#b7b7b7',
        borderWidth: '1px',
      },
      '&:hover fieldset': {
        borderColor: '#a8c6ff',
        borderWidth: '3px',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#a8c6ff',
        borderWidth: '3px',
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ff533d',
        borderWidth: '1px',
      },
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    marginTop: theme.spacing(8),
    width: '100%', // Fix IE 11 issue.
    background: '#fdfdfd',
    padding: theme.spacing(4),
    borderRadius: 10,
  },
  submit: {
    marginTop: '10px',
    background: '#f9b122',
    borderRadius: 20,
    padding: 8,
    color: '#fdfdfd',
    '&:hover': {
      background: '#f9b122ab',
    },
  },
}))

export default function SignIn() {
  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm({
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
  const onSubmitData = (data: any) => {
    console.log(data)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmitData)}>
          <Typography component="h1" variant="h5">
            เปลี่ยนรหัสผ่าน
          </Typography>
          <TextField
            fullWidth
            label="รหัสผ่านเดิม"
            type="password"
            name="pwd"
            variant="outlined"
            className={classes.textfield}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">
                  <RiLockPasswordLine size={24} />
                </InputAdornment>
              ),
            }}
            inputRef={register}
            helperText={errors.pwd ? 'กรอกรหัสผ่าน' : ''}
            error={!!errors.pwd}
          />

          <TextField
            variant="outlined"
            className={classes.textfield}
            fullWidth
            label="รหัสผ่าน (1)"
            name="pwd1"
            inputRef={register}
            helperText={errors.pwd1 ? 'กรอกรหัสผ่าน' : ''}
            error={!!errors.pwd1}
            type="password"
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">
                  <RiLockPasswordLine size={24} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            className={classes.textfield}
            fullWidth
            id="input-with-icon-textfield"
            label="รหัสผ่าน (2)"
            name="pwd2"
            inputRef={register}
            helperText={errors.pwd2 ? 'กรอกรหัสผ่าน' : ''}
            error={!!errors.pwd2}
            type="password"
            InputProps={{
              className: classes.input,
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
