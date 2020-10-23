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
import Date from './DatePickerJob'

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
        <h4> พนักงานรัฐวิสากิจ ฯ</h4>
        <FormControl
          fullWidth
          error={Boolean(formProps.errors.stateEnterprised)}
        >
          <InputLabel>รัฐวิสากิจ</InputLabel>
          <Controller
            as={
              <Select>
                <MenuItem value={'เอกชน'}>เอกชน</MenuItem>
                <MenuItem value={'ประชาชน'}>ประชาชน</MenuItem>
                <MenuItem value={'นิสิต'}>นิสิต</MenuItem>
              </Select>
            }
            name="stateEnterprised"
            rules={{ required: 'กรุณาเลือกอาชีพ' }}
            control={formProps.control}
            defaultValue=""
          />
          <FormHelperText>
            {formProps.errors.stateEnterprised &&
              formProps.errors.stateEnterprised.message}
          </FormHelperText>
        </FormControl>
        <Date
          title={'วันที่เริ่มทำงาน'}
          register={formProps.register}
          name={'jobDate'}
        />

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
      </FormControl>
    </>
  )
}
