import React from 'react'

import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Select,
} from '@material-ui/core'
import { Controller } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formControlInfo: {
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
    margin: theme.spacing(0),
    paddingLeft: theme.spacing(2),
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 4,
    marginBottom: 4,
  },
  formControlDate: {
    margin: theme.spacing(2),
    paddingRight: theme.spacing(0),
  },
}))

export default function SignIn(props: any) {
  const classes = useStyles()

  const { formProps } = props

  return (
    <>
      <FormControl className={classes.formControlInfo} fullWidth>
        <h4> บุคคลทั่วไป</h4>
      </FormControl>

      <FormControl
        className={classes.formControlInfo}
        fullWidth
        error={Boolean(formProps.errors.OccupationId)}
      >
        <InputLabel>อาชีพ</InputLabel>
        <Controller
          as={
            <Select>
              <MenuItem value={'เอกชน'}>เอกชน</MenuItem>
              <MenuItem value={'ประชาชน'}>ประชาชน</MenuItem>
              <MenuItem value={'นิสิต'}>นิสิต</MenuItem>
            </Select>
          }
          name="OccupationId"
          rules={{ required: 'กรุณาเลือกอาชีพ' }}
          control={formProps.control}
          defaultValue=""
        />
        <FormHelperText>
          {formProps.errors.OccupationId &&
            formProps.errors.OccupationId.message}
        </FormHelperText>
      </FormControl>

      <FormControl className={classes.formControlInfo} fullWidth>
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
        <TextField
          fullWidth
          label="ชื่อหน่วยงาน"
          name="workPlace"
          inputRef={formProps.register}
          helperText={
            formProps.errors.workPlace && formProps.errors.workPlace.message
          }
          error={!!formProps.errors.workPlace}
        />
      </FormControl>
    </>
  )
}
