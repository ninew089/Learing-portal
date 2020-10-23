import React from 'react'

import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from '@material-ui/core'
import { Controller } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formControlInfo: {
    margin: theme.spacing(2),
    paddingRight: theme.spacing(0),
  },
}))

export default function SignIn(props: any) {
  const { formProps } = props
  const classes = useStyles()

  return (
    <>
      <FormControl className={classes.formControlInfo} fullWidth>
        <h4> ข้าราชการประเภทอื่น</h4>

        <FormControl fullWidth error={Boolean(formProps.errors.jobtypeId)}>
          <InputLabel>ประเภทข้าราชการ</InputLabel>

          <Controller
            as={
              <Select>
                <MenuItem value={'ข้าราชการทหาร'}>ข้าราชการทหาร</MenuItem>
                <MenuItem value={'ข้าราชการฝ่ายตุลา'}>
                  ข้าราชการฝ่ายตุลา
                </MenuItem>
                <MenuItem value={'ข้าราชการตำรวจ'}>ข้าราชการตำรวจ</MenuItem>
              </Select>
            }
            name="jobtypeId"
            rules={{ required: 'กรุณาเลือกประเภทตำแหน่ง' }}
            control={formProps.control}
            defaultValue=""
          />
          <FormHelperText>
            {formProps.errors.jobtypeId && formProps.errors.jobtypeId.message}
          </FormHelperText>
        </FormControl>

        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="ตำแหน่ง"
          name="jobTitle"
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
