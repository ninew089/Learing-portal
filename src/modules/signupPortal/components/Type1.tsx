import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, MenuItem, FormControl } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
  const classes = useStyles()
  const { formProps } = props

  return (
    <>
      <FormControl fullWidth>
        <h4> ข้าราชการพลเรือน</h4>

        <Controller
          as={
            <TextField
              variant="outlined"
              fullWidth
              className={classes.textfield}
              label="ประเภทตำแหน่ง"
              InputLabelProps={{
                className: classes.selectInput,
              }}
              select
              helperText={
                formProps.errors.jobtypeId && formProps.errors.jobtypeId.message
              }
              error={!!formProps.errors.jobtypeId}
            >
              {' '}
              <MenuItem value={'วิชาการ'}>วิชาการ</MenuItem>
              <MenuItem value={'อำนวย'}>อำนวย</MenuItem>
              <MenuItem value={'บริหาร'}>บริหาร</MenuItem>
            </TextField>
          }
          name="jobtypeId"
          rules={{ required: 'กรุณาเลือกประเภทตำแหน่ง' }}
          control={formProps.control}
          defaultValue=""
        />

        <TextField
          fullWidth
          label="ตำแหน่ง"
          name="jobTitle"
          inputRef={formProps.register}
          variant="outlined"
          className={classes.textfield}
          InputProps={{
            className: classes.selectInput,
          }}
          helperText={
            formProps.errors.jobTitle && formProps.errors.jobTitle.message
          }
          error={!!formProps.errors.jobTitle}
        />

        <Controller
          as={
            <TextField
              variant="outlined"
              fullWidth
              className={classes.textfield}
              label="ระดับ"
              InputLabelProps={{
                className: classes.selectInput,
              }}
              select
              helperText={
                formProps.errors.jobtypeLevelid &&
                formProps.errors.jobtypeLevelid.message
              }
              error={!!formProps.errors.jobtypeLevelid}
            >
              {' '}
              <MenuItem value={'ชำนาญงาน'}>ชำนาญงาน</MenuItem>
              <MenuItem value={'อาวุโส'}>อาวุโส</MenuItem>
            </TextField>
          }
          name="jobtypeLevelid"
          rules={{ required: 'กรุณาเลือกระดับ' }}
          control={formProps.control}
          defaultValue=""
        />
      </FormControl>
    </>
  )
}
