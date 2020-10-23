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
    marginTop: 0,
  },
  formControlDate: {
    marginLeft: theme.spacing(2),
    margin: theme.spacing(2),
    marginTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
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
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 4,
    marginBottom: 4,
    paddingLeft: theme.spacing(2),
  },
}))

export default function SignIn(props: any) {
  const classes = useStyles()

  const { formProps } = props

  return (
    <>
      <FormControl className={classes.formControlInfo} fullWidth>
        <h4>
          สำหรับข้าราชการพลเรือน ข้าราชการประเภทอื่น
          หรือเจ้าหน้าที่ของรัฐในส่วนราชการต่าง ๆ
        </h4>
      </FormControl>

      <div className={classes.formControlDate}>
        <Date
          title={'วันที่รับราชการ'}
          register={formProps.register}
          name={'jobDate'}
        />
      </div>

      <FormControl
        className={classes.formControlInfo}
        fullWidth
        error={Boolean(formProps.errors.MinistryId)}
      >
        <InputLabel> กระทรวง</InputLabel>

        <Controller
          as={
            <Select>
              <MenuItem value={'ข้าราชการทหาร'}>ข้าราชการทหาร</MenuItem>
              <MenuItem value={'ข้าราชการฝ่ายตุลา'}>ข้าราชการฝ่ายตุลา</MenuItem>
              <MenuItem value={'ข้าราชการตำรวจ'}>ข้าราชการตำรวจ</MenuItem>
            </Select>
          }
          name="MinistryId"
          rules={{ required: 'กรุณาเลือกระดับการศึกษา' }}
          control={formProps.control}
          defaultValue=""
        />
        <FormHelperText>
          {formProps.errors.MinistryId && formProps.errors.MinistryId.message}
        </FormHelperText>
      </FormControl>

      <FormControl
        className={classes.formControlInfo}
        fullWidth
        error={Boolean(formProps.errors.DepartmentId)}
      >
        <InputLabel> กรมต้นสังกัด</InputLabel>

        <Controller
          as={
            <Select>
              <MenuItem value={'กรม1'}>กรม1</MenuItem>
              <MenuItem value={'กรม2'}>กรม2</MenuItem>
              <MenuItem value={'กรม3'}>กรม3</MenuItem>
            </Select>
          }
          name="DepartmentId"
          rules={{ required: 'กรุณาเลือกกรมที่สังกัด' }}
          control={formProps.control}
          defaultValue=""
        />
        <FormHelperText>
          {formProps.errors.DepartmentId &&
            formProps.errors.DepartmentId.message}
        </FormHelperText>
      </FormControl>

      <TextField
        className={classes.formControlInfo}
        fullWidth
        label="ชื่อส่วนราชการที่สังกัด"
        name="Division"
        inputRef={formProps.register}
        helperText={
          formProps.errors.Division ? formProps.errors.Division.message : ''
        }
        error={!!formProps.errors.Division}
      />
    </>
  )
}
