import {
  AddBox,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
  ArrowUpward,
} from "@material-ui/icons";
import RefreshIcon from '@material-ui/icons/Refresh';
import { getCookie } from "cookie/cookie"
import MaterialTable from 'material-table'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Snackbar from "shared/SnackBar/SnackBar"
import { curriculumCertificateProps, courseCertificateProps } from './typescript'
import { forwardRef } from 'react';
import * as actions from "../../actions"
import { useDispatch, useSelector } from "react-redux"
import { parseJwt } from "utils/getDataJWT"

export default function ReportTable() {
  const tableIcons = {
    Add: forwardRef<SVGSVGElement>((props, ref) => (
      <AddBox {...props} ref={ref} />
    )),
    Check: forwardRef<SVGSVGElement>((props, ref) => (
      <Check {...props} ref={ref} />
    )),
    Clear: forwardRef<SVGSVGElement>((props, ref) => (
      <Clear {...props} ref={ref} />
    )),
    Delete: forwardRef<SVGSVGElement>((props, ref) => (
      <DeleteOutline {...props} ref={ref} />
    )),
    DetailPanel: forwardRef<SVGSVGElement>((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef<SVGSVGElement>((props, ref) => (
      <Edit {...props} ref={ref} />
    )),
    Export: forwardRef<SVGSVGElement>((props, ref) => (
      <SaveAlt {...props} ref={ref} />
    )),
    Filter: forwardRef<SVGSVGElement>((props, ref) => (
      <FilterList {...props} ref={ref} />
    )),
    FirstPage: forwardRef<SVGSVGElement>((props, ref) => (
      <FirstPage {...props} ref={ref} />
    )),
    LastPage: forwardRef<SVGSVGElement>((props, ref) => (
      <LastPage {...props} ref={ref} />
    )),
    NextPage: forwardRef<SVGSVGElement>((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    PreviousPage: forwardRef<SVGSVGElement>((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef<SVGSVGElement>((props, ref) => (
      <Clear {...props} ref={ref} />
    )),
    Search: forwardRef<SVGSVGElement>((props, ref) => (
      <Search {...props} ref={ref} />
    )),
    SortArrow: forwardRef<SVGSVGElement>((props, ref) => (
      <ArrowUpward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef<SVGSVGElement>((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef<SVGSVGElement>((props, ref) => (
      <ViewColumn {...props} ref={ref} />
    )),
  }
  const dispatch = useDispatch();
  const [entries, setEntries] = useState<courseCertificateProps | any>()
  const [entriesCurriculum, setEntriesCurriculum] = useState<curriculumCertificateProps | any>()
  const im = entries !== undefined && entries.length
  const im2 = entriesCurriculum !== undefined && entriesCurriculum.length
  const token = getCookie('token');
  const platformid = parseJwt(token).unique_name
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`/Platforms/${platformid}/CourseCertificates?max=10000`)
        setEntries(response.data)

      } catch (err) {
        setEntries([])
        console.log(err)
      }
    }
    fetch()
    // eslint-disable-next-line
  }, [im])

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`/Platforms/${platformid}/CurriculumCertificates?max=10000`)
        setEntriesCurriculum(response.data)
      } catch (err) {
        setEntries([])
        console.log(err)
      }
    }
    fetch()
    // eslint-disable-next-line
  }, [im2])
  console.log(entries)
  const { message, severity } = useSelector((state: any) => state.admin);
  const onSubmitCourseCirtificate = async () => {
    const response = await axios.get(`/Platforms/${platformid}/CourseCertificates?max=10000`)
    setEntries(response.data)
  }
  const onSubmitCurriculumCirtificate = async () => {
    const response = await axios.get(`/Platforms/${platformid}/CurriculumCertificates?max=10000`)
    setEntriesCurriculum(response.data)

  }

  return (
    <>
      {
        message !== null && <Snackbar
          message={message
          }
          open={message !== null ? true : false}
          severity={severity}
        />
      }
      <MaterialTable
        icons={tableIcons}
        title="ประกาศนียบัตรรายวิชา"
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 50, 100]
        }}
        actions={[
          {
            icon: () => <RefreshIcon />,
            tooltip: "รีเฟลส",
            isFreeAction: true,
            onClick: onSubmitCourseCirtificate,
          },]}

        columns={[
          { title: "เลขประจำตัวบัตรประชาชน", field: "userId", type: "string" },
          { title: "คำนำหน้าชื่อ", field: "title" },
          { title: "ชื่อ", field: "firstName" },
          { title: "นามสกุล", field: "lastname" },
          { title: "เลขวิชา", field: "courseId", type: "numeric" },
          { title: "วันเปิดเรียน", field: "startDate", type: "date", dateSetting: { locale: "th-TH" } },
          { title: "วันที่สำเร็จการศึกษา", field: "endDate", type: "date", dateSetting: { locale: "th-TH" } },
          { title: "จำนวนชั่วโมง", field: "hour", type: "numeric" },
          { title: "เกรด", field: "grade" },
          { title: "คะแนนความพึงพอใจ", field: "satisfactionScore", type: "numeric", validate: rowData => ((rowData.satisfactionScore <= 5 && rowData.satisfactionScore >= 1) || rowData.satisfactionScore === null || rowData.satisfactionScore === undefined) },
          { title: "วันที่ได้รับข้อมูล", field: "createDate", type: "date", editable: "never", dateSetting: { locale: "th-TH" } },
          { title: "ผลการอนุมัติ", field: "approved", editable: "never" },
        ]}
        data={entries}
        editable={{
          //update
          onRowAdd: (newData: courseCertificateProps) =>

            new Promise((resolve) => {

              setTimeout(() => {
                //@ts-ignore
                resolve()
                const data = entries === undefined ? [] : [...entries]
                data[entries === undefined ? 0 : data.length] = newData
                axios
                  .post(
                    `/Platforms/${platformid}/CourseCertificates`,
                    { courseId: newData.courseId, grade: newData.grade, userId: newData.userId, title: newData.title, firstName: newData.firstName, lastName: newData.lastname, startDate: newData.startDate, endDate: newData.endDate, hour: newData.hour, satisfactionScore: newData.satisfactionScore },
                    { headers }
                  ).catch((error) => {
                    const action = actions.loadMessage(` เกิดข้อผิดพลาด${error.response.status}`, "error")
                    dispatch(action)

                  })


                setEntries(data)
              }, 600)
            }),
          onRowUpdate: (newData: courseCertificateProps, oldData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore
                resolve()

                const data = [...entries]
                data[oldData.tableData.id] = newData
                console.log(newData)
                axios
                  .put(
                    `/Platforms/${platformid}/CourseCertificates/${newData.id}`,
                    { courseId: newData.courseId, grade: newData.grade, userId: newData.userId, title: newData.title, firstName: newData.firstName, lastName: newData.lastname, startDate: newData.startDate, endDate: newData.endDate, hour: newData.hour, satisfactionScore: newData.satisfactionScore },
                    { headers }
                  ).catch((error) => {
                    const action = actions.loadMessage(` เกิดข้อผิดพลาด${error.response.status}`, "error")
                    dispatch(action)

                  })

                setEntries([...data])
              }, 600)
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore
                resolve()
                const data = [...entries]
                console.log(data.splice(data.indexOf(oldData), 1))
                data.splice(data.indexOf(oldData), 1)
                axios
                  .delete(`/Platforms/${platformid}/CourseCertificates/${oldData.id}`, { headers })
                  .catch((error) => {
                    const action = actions.loadMessage(` เกิดข้อผิดพลาด${error.response.status}`, "error")
                    dispatch(action)

                  })


                setEntries(data)
              }, 600)
            }),

        }}
      />
      <MaterialTable
        icons={tableIcons}
        title="ประกาศนียบัตรหลักสูตร"
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 50, 100]
        }}
        columns={[
          { title: "เลขประจำตัวบัตรประชาชน", field: "userId", type: "string" },
          { title: "คำนำหน้าชื่อ", field: "title" },
          { title: "ชื่อ", field: "firstName" },
          { title: "นามสกุล", field: "lastname" },
          { title: "เลขหลักสูตร", field: "curriculumId", type: "numeric" },
          { title: "วันเปิดเรียน", field: "startDate", type: "date", dateSetting: { locale: "th-TH" } },
          { title: "วันที่สำเร็จการศึกษา", field: "endDate", type: "date", dateSetting: { locale: "th-TH" } },
          { title: "จำนวนชั่วโมง", field: "hour", type: "numeric" },
          { title: "เกรด", field: "grade" },
          { title: "คะแนนความพึงพอใจ", field: "satisfactionScore", type: "numeric", validate: rowData => ((rowData.satisfactionScore <= 5 && rowData.satisfactionScore >= 1) || rowData.satisfactionScore === null || rowData.satisfactionScore === undefined) },
          { title: "วันที่ได้รับข้อมูล", field: "createDate", type: "date", editable: "never", dateSetting: { locale: "th-TH" } },
          { title: "ผลการอนุมัติ", field: "approved", editable: "never" },
        ]}
        data={entriesCurriculum}
        actions={[
          {
            icon: () => <RefreshIcon />,
            tooltip: "รีเฟลส",
            isFreeAction: true,
            onClick: onSubmitCurriculumCirtificate,
          },]}

        editable={{
          //update
          onRowAdd: (newData: curriculumCertificateProps) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore
                resolve()
                const data = entriesCurriculum === undefined ? [] : [...entriesCurriculum]
                data[entriesCurriculum === undefined ? 0 : data.length] = newData

                axios
                  .post(
                    `/Platforms/${platformid}/CurriculumCertificates`,
                    { curriculumId: newData.curriculumId, grade: newData.grade, userId: newData.userId, title: newData.title, firstName: newData.firstName, lastName: newData.lastname, startDate: newData.startDate, endDate: newData.endDate, hour: newData.hour, satisfactionScore: newData.satisfactionScore },
                    { headers }
                  )
                  .catch((error) => {
                    const action = actions.loadMessage(` เกิดข้อผิดพลาด${error.response.status}`, "error")
                    dispatch(action)

                  })


                setEntriesCurriculum(data)
              }, 600)
            }),
          onRowUpdate: (newData: curriculumCertificateProps, oldData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore
                resolve()
                const data = [...entriesCurriculum]
                data[oldData.tableData.id] = newData

                axios
                  .put(
                    `/Platforms/${platformid}/CurriculumCertificates/${newData.id}`,
                    { curriculumId: newData.curriculumId, grade: newData.grade, userId: newData.userId, title: newData.title, firstName: newData.firstName, lastName: newData.lastname, startDate: newData.startDate, endDate: newData.endDate, hour: newData.hour, satisfactionScore: newData.satisfactionScore },
                    { headers }
                  )
                  .catch((error) => {
                    const action = actions.loadMessage(` เกิดข้อผิดพลาด${error.response.status}`, "error")
                    dispatch(action)

                  })


                setEntriesCurriculum([...data])
              }, 600)
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore
                resolve()
                const data = [...entriesCurriculum]

                data.splice(data.indexOf(oldData), 1)
                axios
                  .delete(`/Platforms/${platformid}/CurriculumCertificates/${oldData.id}`, { headers })
                  .catch((error) => {
                    const action = actions.loadMessage(` เกิดข้อผิดพลาด${error.response.status}`, "error")
                    dispatch(action)

                  })


                setEntriesCurriculum(data)
              }, 600)
            }),

        }}
      />
    </>
  )
}

