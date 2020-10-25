import React from 'react'

import { TextField, MenuItem, FormControl } from '@material-ui/core'
import { Controller } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  input: {
    color: '#0f1626',

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

  return (
    <>
      <FormControl fullWidth>
        <h4> ข้าราชการประเภทอื่น</h4>

        <Controller
          as={
            <TextField
              variant="outlined"
              className={classes.textfield}
              label="ประเภทข้าราชการ"
              InputLabelProps={{
                className: classes.selectInput,
              }}
              select
              helperText={
                formProps.errors.jobtypeId && formProps.errors.jobtypeId.message
              }
              error={!!formProps.errors.jobtypeId}
            >
              <MenuItem value={'ข้าราชการทหาร'}>ข้าราชการทหาร</MenuItem>
              <MenuItem value={'ข้าราชการฝ่ายตุลา'}>ข้าราชการฝ่ายตุลา</MenuItem>
              <MenuItem value={'ข้าราชการตำรวจ'}>ข้าราชการตำรวจ</MenuItem>
            </TextField>
          }
          name="jobtypeId"
          rules={{ required: 'กรุณาเลือกประเภทตำแหน่ง' }}
          control={formProps.control}
          defaultValue=""
        />

        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="ตำแหน่ง"
          name="jobTitle"
          variant="outlined"
          className={classes.textfield}
          InputProps={{
            className: classes.input,
          }}
          inputRef={formProps.register}
          helperText={
            formProps.errors.jobTitle && formProps.errors.jobTitle.message
          }
          error={!!formProps.errors.jobTitle}
        />
        <TextField
          fullWidth
          label="ระดับ"
          name="jobLevel"
          variant="outlined"
          className={classes.textfield}
          InputProps={{
            className: classes.input,
          }}
          inputRef={formProps.register}
          helperText={
            formProps.errors.jobLevel && formProps.errors.jobLevel.message
          }
          error={!!formProps.errors.jobLevel}
        />
      </FormControl>
    </>
  )
}
