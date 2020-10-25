import React from 'react'

import Date from './DatePicker'
import { Controller } from 'react-hook-form'
import {
  Typography,
  MenuItem,
  FormControl,
  CssBaseline,
  TextField,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  
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
    marginBottom: 0,
    marginTop: 0,
  },
  formControlDate: {
    margin: theme.spacing(2),

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
    paddingLeft: theme.spacing(2),
    margin: theme.spacing(0),
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 4,
    marginBottom: 4,
  },
  selectInput: {
    color: "#757575",
    fontWeight:600,
    '& .MuiInputBase-root.MuiOutlineInput-root': {
      color: '#45A29E',
      borderColor: '#757575',
      fontWeight:600
    }
  },
    input: {
      color: "#0f1626",
      fontWeight:600,
      '& .MuiInputBase-root.MuiOutlineInput-root': {
        color: '#45A29E',
        borderColor: '#757575',
        fontWeight:600
      },
    },
    textfield: {
      marginTop:10,
      '& .MuiFormHelperText-root.Mui-error ':{
        color: 'ff533d',
        fontWeight:600,
        borderWidth:'1px'
      },
        '& .MuiInput-underline.Mui-error:after':{
          borderColor: 'ff533d',
          borderWidth:'1px'
         
        },
      '& label.MuiFormLabel-root': {
        fontWeight:600,
        '&:after .Mui-error': {
          borderColor: '#ff533d',
          borderWidth:'1px'
        }
  
      },
      '& label.Mui-focused': {
        color: '#132740',
    
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#f9b122',
      },
      '& .MuiOutlinedInput-root': {
  
        '& fieldset': {
          borderColor: '#f9b122',
          borderWidth:'1px'
        },
        '&:hover fieldset': {
          borderColor: '#a8c6ff',
          borderWidth:'3px'
        },
        '&.Mui-focused fieldset': {
          borderColor: '#a8c6ff',
          borderWidth:'3px'
        },'&.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderColor: '#ff533d',
          borderWidth:'1px'
        }
        
      },
    },
    form: {
      marginTop: theme.spacing(4),
      width: '100%', // Fix IE 11 issue.
  
    },

   
}))

export default function SignIn(props: any) {
  const classes = useStyles()

  const { formProps } = props

  return (
    <>
     
        <CssBaseline />

   
          <form className={classes.form} noValidate>
          <Typography component="h1" variant="h5" align='center'>
            ข้อมูลส่วนบุคคล
          </Typography>
            <FormControl className={classes.formControlInfo} fullWidth>
              <TextField
                fullWidth
                label="คำนำหน้าชื่อ"
                name="title"
                variant='outlined'
                className={classes.textfield}
    InputProps={{
      className: classes.input,

      }}
                inputRef={formProps.register}
                helperText={
                  formProps.errors.title && formProps.errors.title.message
                }
                error={!!formProps.errors.title}
              />
              <TextField
                fullWidth
                label="ชื่อ"
                name="name"
                inputRef={formProps.register}
                variant='outlined'
                className={classes.textfield}
    InputProps={{
      className: classes.input,

      }}
                helperText={
                  formProps.errors.name && formProps.errors.name.message
                }
                error={!!formProps.errors.name}
              />
              <TextField
                fullWidth
                label="นามสกุล"
                name="surename"
                inputRef={formProps.register}
                variant='outlined'
                className={classes.textfield}
                InputProps={{className: classes.input}}
                helperText={
                  formProps.errors.surename && formProps.errors.surename.message
                }
                error={!!formProps.errors.surename}
              />
            </FormControl>

            <div className={classes.formControlDate}>
              <Date
                title={'ปีเกิด'}
                register={formProps.register}
                name={'ybd'}
              />
            </div>
            {/*@ts-ignore*/}
            <div className={classes.formControlDate}>
            <Controller
            as={
              <TextField  variant='outlined'
              fullWidth
              className={classes.textfield}
              label='เพศ'
              InputLabelProps={{
    className: classes.selectInput,
    
    }}
    select
    helperText={formProps.errors.sex && formProps.errors.sex.message}
    error={!!formProps.errors.sex}
    >          <MenuItem value={'ชาย'}>ชาย</MenuItem>
    <MenuItem value={'หญิง'}>หญิง</MenuItem>
              </TextField>
            }
            name="sex"
            rules={{ required: 'กรุณาเลือกเพศ' }}
            control={formProps.control}
            defaultValue=""
          />
              </div>
              <div className={classes.formControlDate}>
            <Controller
            as={
              <TextField  variant='outlined'
              fullWidth
              className={classes.textfield}
              label='ระดับการศึกษา'
              InputLabelProps={{
    className: classes.selectInput,
    
    }}
    select
    helperText={formProps.errors.edu && formProps.errors.edu.message}
    error={!!formProps.errors.edu}
    >           <MenuItem value={'ปริญญาตรี'}>ปริญญาตรี</MenuItem>
    <MenuItem value={'ปริญญาโท'}>ปริญญาโท</MenuItem>
    <MenuItem value={'ปริญญาเอก'}>ปริญญาเอก</MenuItem>
              </TextField>
            }
            name="edu"
            rules={{ required: 'กรุณาเลือกระดับการศึกษา' }}
            control={formProps.control}
            defaultValue=""
          />
              </div>
         

           

            <FormControl className={classes.formControlInfo} fullWidth>
              <TextField
                fullWidth

                label="อีเมล"
                name="email"

                inputRef={formProps.register}
                variant='outlined'
                className={classes.textfield}
    InputProps={{
      className: classes.input,

      }}
                helperText={
                  formProps.errors.email && formProps.errors.email.message
                }
                error={!!formProps.errors.email}
              />
            </FormControl>
          </form>
       
    </>
  )
}
