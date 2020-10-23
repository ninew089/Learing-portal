import React from 'react'
import { Controller } from 'react-hook-form'
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Select,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formControlInfo: {
    margin: theme.spacing(2),
    paddingRight: theme.spacing(4),
  },
}))

export default function SignIn(props: any) {
  const classes = useStyles()
  const { formProps } = props

  return (
    <>
      <FormControl className={classes.formControlInfo} fullWidth>
        <h4> ข้าราชการพลเรือน</h4>
        <FormControl fullWidth error={Boolean(formProps.errors.jobtypeId)}>
          <InputLabel>ประเภทตำแหน่ง</InputLabel>

          <Controller
            as={
              <Select>
                <MenuItem value={'วิชาการ'}>วิชาการ</MenuItem>
                <MenuItem value={'อำนวย'}>อำนวย</MenuItem>
                <MenuItem value={'บริหาร'}>บริหาร</MenuItem>
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
          label="ตำแหน่ง"
          name="jobTitle"
          inputRef={formProps.register}
          helperText={
            formProps.errors.jobTitle && formProps.errors.jobTitle.message
          }
          error={!!formProps.errors.jobTitle}
        />
        <FormControl fullWidth error={Boolean(formProps.errors.jobtypeLevelid)}>
          <InputLabel>ระดับ</InputLabel>

          <Controller
            as={
              <Select>
                <MenuItem value={'ชำนาญงาน'}>ชำนาญงาน</MenuItem>
                <MenuItem value={'อาวุโส'}>อาวุโส</MenuItem>
              </Select>
            }
            name="jobtypeLevelid"
            rules={{ required: 'กรุณาเลือกระดับการศึกษา' }}
            control={formProps.control}
            defaultValue=""
          />
          <FormHelperText>
            {formProps.errors.jobtypeLevelid &&
              formProps.errors.jobtypeLevelid.message}
          </FormHelperText>
        </FormControl>
      </FormControl>
    </>
  )
}
