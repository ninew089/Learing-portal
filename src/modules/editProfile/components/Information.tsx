import React from 'react'

import Date from './DatePicker'
import { Controller } from 'react-hook-form'
import {
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  CssBaseline,
  TextField,
  FormHelperText,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

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
    paddingRight: theme.spacing(4),
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
}))

export default function SignIn(props: any) {
  const classes = useStyles()

  const { formProps } = props

  return (
    <>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ข้อมูลส่วนบุคคล
        </Typography>
        <form className={classes.form} noValidate>
          <FormControl className={classes.formControlInfo} fullWidth>
            <TextField
              fullWidth
              label="คำนำหน้าชื่อ"
              name="title"
              defaultValue="นาง"
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
              defaultValue="อนุสรา "
              inputRef={formProps.register}
              helperText={
                formProps.errors.name && formProps.errors.name.message
              }
              error={!!formProps.errors.name}
            />
            <TextField
              fullWidth
              label="นามสกุล"
              name="surename"
              defaultValue="จำปาดี"
              inputRef={formProps.register}
              helperText={
                formProps.errors.surename && formProps.errors.surename.message
              }
              error={!!formProps.errors.surename}
            />
          </FormControl>

          <div className={classes.formControlDate}>
            <Date title={'ปีเกิด'} register={formProps.register} name={'ybd'} />
          </div>
          {/*@ts-ignore*/}
          <FormControl
            className={classes.formControlInfo}
            fullWidth
            error={Boolean(formProps.errors.sex)}
          >
            <InputLabel>เพศ</InputLabel>

            <Controller
              as={
                <Select>
                  <MenuItem value={'ชาย'}>ชาย</MenuItem>
                  <MenuItem value={'หญิง'}>หญิง</MenuItem>
                </Select>
              }
              name="sex"
              rules={{ required: 'กรุณาเลือกเพศ' }}
              control={formProps.control}
              defaultValue="ชาย"
            />
            <FormHelperText>
              {formProps.errors.sex && formProps.errors.sex.message}
            </FormHelperText>
          </FormControl>
          <FormControl
            className={classes.formControlInfo}
            fullWidth
            error={Boolean(formProps.errors.edu)}
          >
            <InputLabel>ระดับการศึกษา</InputLabel>

            <Controller
              as={
                <Select>
                  <MenuItem value={'ปริญญาตรี'}>ปริญญาตรี</MenuItem>
                  <MenuItem value={'ปริญญาโท'}>ปริญญาโท</MenuItem>
                  <MenuItem value={'ปริญญาเอก'}>ปริญญาเอก</MenuItem>
                </Select>
              }
              name="edu"
              rules={{ required: 'กรุณาเลือกระดับการศึกษา' }}
              control={formProps.control}
              defaultValue="ปริญญาตรี"
            />
            <FormHelperText>
              {formProps.errors.edu && formProps.errors.edu.message}
            </FormHelperText>
          </FormControl>

          <FormControl className={classes.formControlInfo} fullWidth>
            <TextField
              fullWidth
              id="input-with-icon-textfield"
              label="อีเมล"
              name="email"
              defaultValue="example@gmail.com"
              inputRef={formProps.register}
              helperText={
                formProps.errors.email && formProps.errors.email.message
              }
              error={!!formProps.errors.email}
            />
          </FormControl>
        </form>
      </div>
    </>
  )
}
