import React from 'react'
import Type1 from './Type1'
import Type2 from './Type2'
import Type3 from './Type3'
import Type4 from './Type4'
import Type5 from './Type5'
import Detail123 from './Detail123'

import {
  Typography,
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  CssBaseline,
  FormHelperText,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Controller } from 'react-hook-form'
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
}))

export default function SignIn(props: any) {
  const { formProps } = props
  const classes = useStyles()
  function getTypeProps(value: string) {
    switch (value) {
      case 'ข้าราชการพลเรือน':
        return (
          <div>
            <Type1 formProps={formProps} />
            <Detail123 formProps={formProps} />
          </div>
        )
      case 'ข้าราชการประเภทอื่น':
        return (
          <div>
            <Type2 formProps={formProps} />
            <Detail123 formProps={formProps} />
          </div>
        )
      case 'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง':
        return (
          <div>
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
      <Container
        component="main"
        maxWidth="xs"
        style={{
          background: 'white',
          borderRadius: '0px 0px 0px 0px',
          padding: '10px',
        }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            ข้อมูลการทำงาน
          </Typography>
          <form className={classes.form} noValidate>
            <FormControl
              className={classes.formControl}
              fullWidth
              error={Boolean(formProps.errors.type)}
            >
              <InputLabel> ประเภทข้าราชการ/เจ้าหน้าที่</InputLabel>

              <Controller
                as={
                  <Select>
                    <MenuItem value={'ข้าราชการพลเรือน'}>
                      ข้าราชการพลเรือน{' '}
                    </MenuItem>
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
                  </Select>
                }
                name="type"
                rules={{ required: 'กรุณาเลือกประเภท' }}
                control={formProps.control}
                defaultValue=""
              />
              <FormHelperText>
                {formProps.errors.type && 'กรุณาเลือกประเภท'}
              </FormHelperText>
            </FormControl>
            {getTypeProps(formProps.getValues('type'))}
          </form>
        </div>
      </Container>
    </>
  )
}
