import React, { useState } from 'react'
import MaterialTable from 'material-table'
import { forwardRef } from 'react'
import { CssBaseline } from '@material-ui/core'
import {
  AddBox,
  ArrowDownward,
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
} from '@material-ui/icons'
//import axios from "axios"

export default function MaterialTableDemo(props: any) {
  const tableRef = React.createRef()
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
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef<SVGSVGElement>((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef<SVGSVGElement>((props, ref) => (
      <ViewColumn {...props} ref={ref} />
    )),
  }

  // eslint-disable-next-line
  const [data, setData] = useState([
    {
      id: 'A00',
      course: 'การวางแผนกลยุทธ์',

      idcard: '1234567891235',
      title: 'นาย',
      name: 'กกกกก',
      Lname: 'ขขขขข',
      date: '20 ม.ค. 2020',
      dateend: '20 ก.ค. 2020',
      grade: 'A',
      time: '30',
      complete: 'สำนักงาน ก.พ.',
    },
    {
      id: 'A01',
      course: 'การวางแผนกลยุทธ์',

      idcard: '1234567891235',
      title: 'นาย',
      name: 'กกกกก',
      Lname: 'ขขขขข',
      date: '1 มี.ค. 2563',
      dateend: '20 ก.ค. 2563',
      grade: 'A',
      time: '30',
      complete: 'สำนักงาน ก.พ.',
    },
    {
      id: 'A02',
      course: 'การวางแผนกลยุทธ์',

      idcard: '1234567891235',
      title: 'นาย',
      name: 'กกกกก',
      Lname: 'ขขขขข',
      date: '1 มี.ค. 2563',
      dateend: '20 ก.ค. 2563',
      grade: 'A',
      time: '30',
      complete: 'สำนักงาน ก.พ.',
    },
  ])
  // eslint-disable-next-line
  const [data_course, setDatas] = useState([
    {
      id: 'C01',
      course_id: 230124,
      course: 'ฝึกอบรมข้าราชการบรรจุใหม่',
      idcard: '1234567891235',
      title: 'นาย',
      name: 'กกกกก',
      Lname: 'ขขขขข',
      date: '1 มี.ค. 2563',
      dateend: '20 ก.ค. 2563',
      grade: 'A',
      time: '30',
      complete: 'สำนักงาน ก.พ.',
    },
    {
      id: 'C02',
      course_id: 230123,
      course: 'ฝึกอบรมข้าราชการบรรจุใหม่',
      idcard: '1234567891235',
      title: 'นาย',
      name: 'กกกกก',
      Lname: 'ขขขขข',
      date: '1 มี.ค. 2563',
      dateend: '20 ก.ค. 2563',
      grade: 'A',
      time: '30',
      complete: 'สำนักงาน ก.พ.',
    },
  ])

  /*

      useEffect(() => {
    let newArr = [...data_course]
    let num = data_course.length
    for (let i = 0; i < data_cs.length; i++) {
      newArr[num + i] = data_cs[i]
    }
    setDatas(newArr)
    // Should not ever set state during rendering, so do this in useEffect instead.
    // eslint-disable-next-line
  }, [])


  useEffect(()=>{
      const  fetchPost=async()=>{
          const {data} =await axios.get("/history")
          setData(data)
      }
      fetchPost()
  },[])
  
   */

  return (
    <div>
      <CssBaseline />

      <MaterialTable
        icons={tableIcons}
        title="รายวิชา"
        tableRef={tableRef}
        columns={[
          { title: 'รหัสรายวิชา', field: 'id', type: 'numeric' },
          { title: 'ชื่อรายวิชา', field: 'course', type: 'numeric' },

          { title: ' หน่วยงานที่ให้ประกาศนียบัตร', field: 'complete' },
        ]}
        data={data}
        detailPanel={(rowData) => {
          return (
            <div>
              <h4>
                &nbsp;&nbsp;&nbsp;&nbsp; เลขประจำตัวประชาชน: {rowData.idcard}{' '}
              </h4>

              <h4>
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp; ชื่อ: {rowData.title}
                {rowData.name} {rowData.Lname}
              </h4>

              <h4> &nbsp;&nbsp;&nbsp;&nbsp;วันเปิดเรียน: {rowData.date}</h4>

              <h4>
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp;วันที่สำเร็จการศึกษา: {rowData.dateend}
              </h4>

              <h4>
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp;จำนวนชั่วโมงที่เข้าเรียน: {rowData.time}
              </h4>

              <h4> &nbsp;&nbsp;&nbsp;&nbsp;เกรด: {rowData.grade}</h4>
            </div>
          )
        }}
        onRowClick={(event, rowData, togglePanel: any) => togglePanel()}
      />

      <MaterialTable
        icons={tableIcons}
        title="หลักสูตร"
        tableRef={tableRef}
        columns={[
          { title: 'รหัสหลักสูตร', field: 'id', type: 'numeric' },
          { title: 'ชื่อหลักสูตร', field: 'course', type: 'numeric' },

          { title: ' หน่วยงานที่ให้ประกาศนียบัตร', field: 'complete' },
        ]}
        data={data_course}
        detailPanel={(rowData) => {
          return (
            <div>
              <h4>
                &nbsp;&nbsp;&nbsp;&nbsp; เลขประจำตัวประชาชน: {rowData.idcard}{' '}
              </h4>

              <h4>
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp; ชื่อ: {rowData.title}
                {rowData.name} {rowData.Lname}
              </h4>

              <h4> &nbsp;&nbsp;&nbsp;&nbsp;วันเปิดเรียน: {rowData.date}</h4>

              <h4>
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp;วันที่สำเร็จการศึกษา: {rowData.dateend}
              </h4>

              <h4>
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp;จำนวนชั่วโมงที่เข้าเรียน: {rowData.time}
              </h4>

              <h4> &nbsp;&nbsp;&nbsp;&nbsp;เกรด: {rowData.grade}</h4>
            </div>
          )
        }}
        onRowClick={(event, rowData, togglePanel: any) => togglePanel()}
      />
    </div>
  )
}
