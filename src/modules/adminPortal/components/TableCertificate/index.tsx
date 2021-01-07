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
import { getCookie } from "cookie/cookie"
import MaterialTable from 'material-table'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { curriculumCertificateProps, courseCertificateProps } from './typescript'
import { forwardRef } from 'react';
import { formatDatetoApi } from "utils/dateFormat"

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
  const [entries, setEntries] = useState<courseCertificateProps | any>()
  const [entriesCurriculum, setEntriesCurriculum] = useState<curriculumCertificateProps | any>()
  const im = entries !== undefined && entries.length
  const im2 = entriesCurriculum !== undefined && entriesCurriculum.length
  const token = getCookie('token');
  const platformid = getCookie('platformid');
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`/Platforms/${platformid}/CourseCertificates?max=10000`)
        setEntries(response.data)

      } catch (err) {
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
        console.log(err)
      }
    }
    fetch()
    // eslint-disable-next-line
  }, [im2])



  return (
    <>
      <MaterialTable
        icons={tableIcons}
        title="ประกาศนีบัตร รายวิชา"
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 50, 100]
        }}
        columns={[
          { title: "เลขประจำตัวบัตรประชาชน", field: "userId", type: "string" },
          { title: "คำนำหน้าชื่อ", field: "title" },
          { title: "ชื่อ", field: "firstName" },
          { title: "นามสกุล", field: "lastname" },
          { title: "รหัสวิชา", field: "courseId", type: "numeric" },
          { title: "วันเปิดเรียน", field: "startDate", type: "date", dateSetting: { locale: "th-TH" } },
          { title: "วันที่สำเร็จการศึกษา", field: "endDate", type: "date", dateSetting: { locale: "th-TH" } },
          { title: "จำนวนชั่วโมง", field: "hour", type: "numeric" },
          { title: "เกรด", field: "grade" },
          { title: "คะแนนความพึงพอใจ", field: "satisfactionScore", type: "numeric" },
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
                const data = [...entries]
                data[data.length] = newData
                axios
                  .post(
                    `/Platforms/${platformid}/CourseCertificates`,
                    { courseId: newData.courseId, grade: newData.grade, userId: newData.userId, title: newData.title, firstName: newData.firstName, lastName: newData.lastname, startDate: formatDatetoApi(newData.startDate), endDate: formatDatetoApi(newData.endDate), hour: newData.hour, satisfactionScore: newData.satisfactionScore },
                    { headers }
                  )

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
                    { courseId: newData.courseId, grade: newData.grade, userId: newData.userId, title: newData.title, firstName: newData.firstName, lastName: newData.lastname, startDate: formatDatetoApi(newData.startDate), endDate: formatDatetoApi(newData.endDate), hour: newData.hour, satisfactionScore: newData.satisfactionScore },
                    { headers }
                  )

                setEntries([...data])
              }, 600)
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore
                resolve()
                const data = [...entries]
                data.splice(data.indexOf(oldData), 1)
                axios
                  .delete(`/Platforms/${platformid}/CourseCertificates/${oldData.id}`, { headers })

                setEntries(data)
              }, 600)
            }),

        }}
      />
      <MaterialTable
        icons={tableIcons}
        title="ประกาศนีบัตร หลักสูตร"
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 50, 100]
        }}
        columns={[
          { title: "เลขประจำตัวบัตรประชาชน", field: "userId", type: "string" },
          { title: "คำนำหน้าชื่อ", field: "title" },
          { title: "ชื่อ", field: "firstName" },
          { title: "นามสกุล", field: "lastname" },
          { title: "รหัสหลักสูตร", field: "curriculumId", type: "numeric" },
          { title: "วันเปิดเรียน", field: "startDate", type: "date", dateSetting: { locale: "th-TH" } },
          { title: "วันที่สำเร็จการศึกษา", field: "endDate", type: "date", dateSetting: { locale: "th-TH" } },
          { title: "จำนวนชั่วโมง", field: "hour", type: "numeric" },
          { title: "เกรด", field: "grade" },
          { title: "คะแนนความพึงพอใจ", field: "satisfactionScore", type: "numeric" },
          { title: "วันที่ได้รับข้อมูล", field: "createDate", type: "date", editable: "never", dateSetting: { locale: "th-TH" } },
          { title: "ผลการอนุมัติ", field: "approved", editable: "never" },
        ]}
        data={entriesCurriculum}
        editable={{
          //update
          onRowAdd: (newData: curriculumCertificateProps) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore
                resolve()
                const data = [...entriesCurriculum]
                data[data.length] = newData
                axios
                  .post(
                    `/Platforms/${platformid}/CurriculumCertificates`,
                    { curriculumId: newData.curriculumId, grade: newData.grade, userId: newData.userId, title: newData.title, firstName: newData.firstName, lastName: newData.lastname, startDate: formatDatetoApi(newData.startDate), endDate: formatDatetoApi(newData.endDate), hour: newData.hour, satisfactionScore: newData.satisfactionScore },
                    { headers }
                  )

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
                    { curriculumId: newData.curriculumId, grade: newData.grade, userId: newData.userId, title: newData.title, firstName: newData.firstName, lastName: newData.lastname, startDate: formatDatetoApi(newData.startDate), endDate: formatDatetoApi(newData.endDate), hour: newData.hour, satisfactionScore: newData.satisfactionScore },
                    { headers }
                  )

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

                setEntriesCurriculum(data)
              }, 600)
            }),

        }}
      />
    </>
  )
}
