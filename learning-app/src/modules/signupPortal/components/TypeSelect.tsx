import React from 'react'

import Type1 from './Type1'
import Type2 from './Type2'
import Type3 from './Type3'
import Type4 from './Type4'
import Type5 from './Type5'
import Detail123 from './Detail123'

import { Typography, TextField, MenuItem, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Controller } from 'react-hook-form'

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    width: '100%', // Fix IE 11 issue.
  },
  input: {
    color: '#0f1626',
    fontWeight: 600,
    '& .MuiInputBase-root.MuiOutlineInput-root': {
      color: '#45A29E',
      borderColor: '#757575',
      fontWeight: 600,
    },
  },
  selectInput: {
    color: '#757575',
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
      borderBottomColor: '#f9b122',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f9b122',
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
}))

export default function SignIn(props: any) {
  const { formProps } = props
  const classes = useStyles()

  function renderTypeProps() {
    const value = formProps.getValues('type')

    switch (value) {
      case 'ข้าราชการพลเรือน':
        return (
          <div>
            {console.log('d', value)}
            <Type1 formProps={formProps} />
            <Detail123 formProps={formProps} />
          </div>
        )
      case 'ข้าราชการประเภทอื่น':
        return (
          <div>
            {console.log('d', value)}
            <Type2 formProps={formProps} />
            <Detail123 formProps={formProps} />
          </div>
        )
      case 'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง':
        return (
          <div>
            {console.log('d', value)}
            <Type3 formProps={formProps} />
            <Detail123 formProps={formProps} />
          </div>
        )
      case 'บุคคลทั่วไป':
        return <Type4 formProps={formProps} />
      case 'พนักงานรัฐวิสาหกิจ':
        return <Type5 formProps={formProps} />
    }
  }

  return (
    <>
      <CssBaseline />
      <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5" align="center">
          ข้อมูลการทำงาน
        </Typography>
        <Controller
          as={
            <TextField
              variant="outlined"
              fullWidth
              className={classes.textfield}
              label="ประเภทข้าราชการ/เจ้าหน้าที่"
              InputLabelProps={{
                className: classes.selectInput,
              }}
              select
              helperText={
                formProps.errors.type && formProps.errors.type.message
              }
              error={!!formProps.errors.type}
            >
              {' '}
              <MenuItem value={'ข้าราชการพลเรือน'}>ข้าราชการพลเรือน </MenuItem>
              <MenuItem value={'ข้าราชการประเภทอื่น'}>
                ข้าราชการประเภทอื่น
              </MenuItem>
              <MenuItem value={'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง'}>
                เจ้าหน้าที่ของรัฐในส่วนราชการต่าง ๆ
              </MenuItem>
              <MenuItem value={'พนักงานรัฐวิสาหกิจ'}>
                พนักงานรัฐวิสาหกิจ ๆ
              </MenuItem>
              <MenuItem value={'บุคคลทั่วไป'}>บุคคลทั่วไป</MenuItem>
            </TextField>
          }
          name="type"
          rules={{ required: 'กรุณาเลือกประเภท' }}
          control={formProps.control}
          defaultValue=""
        />

        {renderTypeProps()}
      </form>
    </>
  )
}
