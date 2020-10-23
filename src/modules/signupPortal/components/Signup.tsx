import React from 'react'

import { Container, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Account from './Account'
import Information from './Information'
import TypeSelect from './TypeSelect'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  paper: {
    background: 'white',
    borderRadius: ' 0px 0px 10px 10px',
    padding: '10px',
  },
  submit: {
    marginTop: '10px',
    background: 'lavender',
  },
}))

export default function SignIn() {
  const classes = useStyles()

  const accountForm = useForm({
    mode: 'onChange',
    validationSchema: yup.object().shape({
      userid: yup
        .string()
        .required('กรุณากรอกเลขบัตรประจำตัวประชาชน')
        .matches(/^[0-9]{13}$/, 'กรุณากรอกเป็นตัวเลข 13 หลัก')
        .test(
          'ตรวจสอบรหัสบัตรประชาชน',
          'กรอกเลขบัตรประชาชนผิด กรุณากรอกใหม่',

          function (item: any) {
            var i, sum
            for (i = 0, sum = 0; i < 12; i++)
              sum += parseFloat(item.charAt(i)) * (13 - i)
            if ((11 - (sum % 11)) % 10 !== parseFloat(item.charAt(12))) {
              return false
            }
            return true
          },
        ),
      password: yup
        .string()
        .required('กรุณากรอกรหัสผ่าน ( 1 )')
        .min(8, 'รหัสต้องมีอย่างน้อย 8 ตัวอักษร'),
      comfirmpassword: yup
        .string()
        .oneOf([yup.ref('password')], 'กรุณากรอกรหัสให้เหมือนกัน')
        .required('กรุณากรอกรหัสผ่าน ( 2 )'),
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
        then: yup.string().required('กรุณาเลือกประเภทตำแหน่ง'),
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
        then: yup.string().required('กรุณากรอกตำแหน่ง'),
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
        then: yup.string().required('กรุณาเลือกระดับ'),
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
      <form onSubmit={accountForm.handleSubmit(onSubmitData)}>
        <Container component="main" maxWidth="lg" className={classes.paper}>
          <Account formProps={accountForm} />
          <Information formProps={accountForm} />
          <TypeSelect formProps={accountForm} />
          <Container component="main" maxWidth="xs" className={classes.paper}>
            <Button type="submit" fullWidth className={classes.submit}>
              ส่งข้อมูล
            </Button>
          </Container>
        </Container>
      </form>
    </>
  )
}
