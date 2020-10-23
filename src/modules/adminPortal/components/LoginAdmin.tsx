import React from 'react'
import { useForm } from 'react-hook-form'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'


import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router-dom'

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
}))

export default function SignIn() {
  const classes = useStyles()
  const history = useHistory()



  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    validationSchema: yup.object().shape({
      admin: yup.string().required(),
      password: yup.string().required(),
    }),
  })
  
  const submit = (adminInfo:object) => {

    console.log(adminInfo)
    history.push('/learning-portal/admins/main')
   
  }


  return (
    
    <form className={classes.form}  onSubmit={handleSubmit(submit)} >
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
     
          <TextField
            variant="outlined"
            margin="normal"
            
            name="admin"
            inputRef={register}
       
            helperText={errors.admin? 'กรุณากรอกเลขประจำตัวประชาชน' : ''}
            error={!!errors.admin}

            fullWidth
            label="เลขประจำตัวบัตรประชาชน"
            autoComplete="admin"
            autoFocus
          />
          <TextField
          
          variant="outlined"
            margin="normal"

            name="password"
            inputRef={register}
 
            helperText={errors.password? 'กรุณากรอกรหัสผ่าน' : ''}
            error={!!errors.password}

            fullWidth
            label="รหัสผ่าน"
            autoComplete="password"
            autoFocus
          />
       
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
    
      
      </div>
    </Container>
    </form>

  )
}
