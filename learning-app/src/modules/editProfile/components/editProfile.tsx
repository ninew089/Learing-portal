import React from 'react'

import Avatar from '@material-ui/core/Avatar'

import {
  Container,
  Button,
  Toolbar,
  Grid,
  Divider,
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import profilepicture from 'assets/images/user.svg'
import Information from './Information'
import TypeSelect from './TypeSelect'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  paper: {
    background: 'white',
    borderRadius: '10px',
    padding: '24px',
    marginTop: 40,
  },
  submit: {
    marginTop: '10px',
    borderRadius: 20,
    padding: 10,
    background: '#ff533d',
    color: '#fdfdfd',
    '&:hover': {
      background: '#ff533d',
      color: '#fdfdfd',
    },
  },
  large: {
    align: 'center',
    [theme.breakpoints.only('xs')]: {
      width: theme.spacing(18),
      height: theme.spacing(18),
    },
    [theme.breakpoints.only('sm')]: {
      width: theme.spacing(18),
      height: theme.spacing(18),
    },
    [theme.breakpoints.only('md')]: {
      width: theme.spacing(18),
      height: theme.spacing(18),
    },
    [theme.breakpoints.only('lg')]: {
      width: theme.spacing(24),
      height: theme.spacing(24),
    },
  },
  form: {
    marginTop: 10,
  },
  textfiled: {
    marginTop: 4,
  },
}))

export default function SignIn() {
  const classes = useStyles()
  // eslint-disable-next-line
  const [types, setType] = React.useState<string>('')
  const accountForm = useForm({
    mode: 'onChange',
    validationSchema: yup.object().shape({
      title: yup.string().required('กรุณากรอกคำนำหน้า'),
      name: yup.string().required('กรุณากรอกชื่อ'),
      surename: yup.string().required('กรุณากรอกนามสกุล'),
      ybd: yup.string().required(),
      sex: yup.string().required('กรุณาเลือกเพศ'),
      edu: yup.string().required('กรุณาเลือกระดับการศึกษา'),
      email: yup
        .string()
        .required('กรุณากรอกอีเมล')
        .email('กรุณากรอกอีเมลให้ถูกต้อง'),

      type: yup.string().required('กรุณาเลือกประเภท'),

      jobtypeId: yup.string().when('type', {
        is: (type) => {
          setType(type)
          switch (type) {
            case 'ข้าราชการพลเรือน':
              return true
            case 'ข้าราชการประเภทอื่น':
              return true
            case 'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง':
              return true
            case 'บุคคลทั่วไป':
              return false
            case 'พนักงานรัฐวิสาหกิจ':
              return false
          }
        },
        then: yup.string().required('กรุณาเลือกประเภท'),
        otherwise: yup.string().nullable(),
      }),
      jobTitle: yup.string().when('type', {
        is: (type) => {
          switch (type) {
            case 'ข้าราชการพลเรือน':
              return true
            case 'ข้าราชการประเภทอื่น':
              return true
            case 'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง':
              return true
            case 'บุคคลทั่วไป':
              return true

            case 'พนักงานรัฐวิสาหกิจ':
              return true
          }
        },
        then: yup.string().required('กรุณาเลือกประเภท'),
        otherwise: yup.string().nullable(),
      }),
      jobtypeLevelid: yup.string().when('type', {
        is: (type) => {
          switch (type) {
            case 'ข้าราชการพลเรือน':
              return true
            case 'ข้าราชการประเภทอื่น':
              return false
            case 'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง':
              return false
            case 'บุคคลทั่วไป':
              return false
            case 'พนักงานรัฐวิสาหกิจ':
              return false
          }
        },
        then: yup.string().required('กรุณาเลือกประเภท'),
        otherwise: yup.string().nullable(),
      }),

      jobLevel: yup.string().when('type', {
        is: (type) => {
          console.log(type)
          switch (type) {
            case 'ข้าราชการพลเรือน':
              return false
            case 'ข้าราชการประเภทอื่น':
              return true
            case 'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง':
              return true
            case 'บุคคลทั่วไป':
              return false
            case 'พนักงานรัฐวิสาหกิจ':
              return false
          }
        },
        then: yup.string().required('กรุณาเลือกประเภท'),
        otherwise: yup.string().nullable(),
      }),

      jobDate: yup.string().when('type', {
        is: (type) => {
          switch (type) {
            case 'ข้าราชการพลเรือน':
              return true
            case 'ข้าราชการประเภทอื่น':
              return true
            case 'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง':
              return true
            case 'บุคคลทั่วไป':
              return false
            case 'พนักงานรัฐวิสาหกิจ':
              return true
          }
        },
        then: yup.string().required('กรุณาเลือกปี'),
        otherwise: yup.string().nullable(),
      }),

      MinistryId: yup.string().when('type', {
        is: (type) => {
          switch (type) {
            case 'ข้าราชการพลเรือน':
              return true
            case 'ข้าราชการประเภทอื่น':
              return true
            case 'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง':
              return true
            case 'บุคคลทั่วไป':
              return false
            case 'พนักงานรัฐวิสาหกิจ':
              return false
          }
        },
        then: yup.string().required('กรุณาเลือกกระทรวงที่สังกัด'),
        otherwise: yup.string().nullable(),
      }),

      DepartmentId: yup.string().when('type', {
        is: (type) => {
          switch (type) {
            case 'ข้าราชการพลเรือน':
              return true
            case 'ข้าราชการประเภทอื่น':
              return true
            case 'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง':
              return true
            case 'บุคคลทั่วไป':
              return false
            case 'พนักงานรัฐวิสาหกิจ':
              return false
          }
        },
        then: yup.string().required('กรุณาเลือกกรมที่สังกัด'),
        otherwise: yup.string().nullable(),
      }),
      Division: yup.string().when('type', {
        is: (type) => {
          switch (type) {
            case 'ข้าราชการพลเรือน':
              return true
            case 'ข้าราชการประเภทอื่น':
              return true
            case 'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง':
              return true
            case 'พนักงานรัฐวิสาหกิจ':
              return false
          }
        },
        then: yup.string().required('กรุณากรอกชื่อส่วนราชการที่สังกัด'),
        otherwise: yup.string().nullable(),
      }),
      OccupationId: yup.string().when('type', {
        is: (type) => {
          switch (type) {
            case 'ข้าราชการพลเรือน':
              return false
            case 'ข้าราชการประเภทอื่น':
              return false
            case 'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง':
              return false
            case 'บุคคลทั่วไป':
              return true
            case 'พนักงานรัฐวิสาหกิจ':
              return false
          }
        },
        then: yup.string().required('กรุณากรอกเลือกอาชีพ'),
        otherwise: yup.string().nullable(),
      }),
      workPlace: yup.string().when('type', {
        is: (type) => {
          switch (type) {
            case 'ข้าราชการพลเรือน':
              return false
            case 'ข้าราชการประเภทอื่น':
              return false
            case 'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง':
              return false
            case 'บุคคลทั่วไป':
              return true
            case 'พนักงานรัฐวิสาหกิจ':
              return false
          }
        },
        then: yup.string().required('กรุณากรอกเลือกอาชีพ'),
        otherwise: yup.string().nullable(),
      }),
      stateEnterprised: yup.string().when('type', {
        is: (type) => {
          switch (type) {
            case 'ข้าราชการพลเรือน':
              return false
            case 'ข้าราชการประเภทอื่น':
              return false
            case 'เจ้าหน้าที่ของรัฐในส่วนราชการต่าง':
              return false
            case 'บุคคลทั่วไป':
              return false
            case 'พนักงานรัฐวิสาหกิจ':
              return true
          }
        },
        then: yup.string().required('กรุณากรอกเลือกอาชีพ'),
        otherwise: yup.string().nullable(),
      }),
    }),
  })

  const onSubmitData = (data: any) => {
    console.log(data)
  }

  return (
    <>
      <Container component="main" maxWidth="sm" className={classes.paper}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Box fontWeight="fontWeightBold" fontSize={24} textAlign="center">
            {' '}
            โปรไฟล์
          </Box>

          <Grid container direction="row" justify="center" alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={profilepicture}
              className={classes.large}
            />

            <Grid item xs={12}>
              <Box fontWeight="fontWeightBold" fontSize={18} textAlign="center">
                {' '}
                นางอนุสรา จำปาดี
              </Box>
              <Toolbar />
              <Divider variant="middle" />
            </Grid>
          </Grid>

          <Divider variant="middle" />

          <Grid item xs={12} sm={12}>
            <form
              className={classes.form}
              onSubmit={accountForm.handleSubmit(onSubmitData)}
            >
              {/*ข้อมลู */}
              <Information formProps={accountForm} />
              <TypeSelect formProps={accountForm} />
              <Button type="submit" fullWidth className={classes.submit}>
                บันทึก
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
