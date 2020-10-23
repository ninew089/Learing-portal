import React from 'react'
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

export default function MaterialTableDemo(props:any) {
  const tableIcons = {
    Add: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <AddBox {...props} ref={ref} />
    )),
    Check: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <Check {...props} ref={ref} />
    )),
    Clear: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <Clear {...props} ref={ref} />
    )),
    Delete: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <DeleteOutline {...props} ref={ref} />
    )),
    DetailPanel: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <Edit {...props} ref={ref} />
    )),
    Export: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <SaveAlt {...props} ref={ref} />
    )),
    Filter: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <FilterList {...props} ref={ref} />
    )),
    FirstPage: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <FirstPage {...props} ref={ref} />
    )),
    LastPage: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <LastPage {...props} ref={ref} />
    )),
    NextPage: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <ChevronRight {...props} ref={ref} />
    )),
    PreviousPage: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <Clear {...props} ref={ref} />
    )),
    Search: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <Search {...props} ref={ref} />
    )),
    SortArrow: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef<SVGSVGElement>((props: any, ref: any) => (
      <ViewColumn {...props} ref={ref} />
    )),
  }
  const { useState } = React
  //เลขประจำตัวประชาชน / คำนำหน้าชื่อ / ชื่อ / นามสกุล / วันเปิดเรียน / วันที่สำเร็จการศึกษา / จำนวนชั่วโมง / เกรด / คะแนนความพึงพอใจ / วันที่ได้รับข้อมูล / อนุมัติ

  const [data, setData] = useState([
    {
      title: 'นาย',
      name: 'กกกกก',
      surename: 'ขขขขข',
      date: '1 มี.ค. 2563',
      id: 1234567891234,
      enddate: '1 มี.ค. 2563',
      hr: '2',
      grade: '3.5',
      fav: '4',
      dateinfo: '1 มี.ค. 2563',
      app: 'อนุมัติ',
    },
    {
      title: 'นาย',
      name: 'กกกกก',
      surename: 'ขขขขข',
      date: '1 มี.ค. 2563',
      id: 1234567891234,
      enddate: '1 มี.ค. 2563',
      hr: '2',
      grade: '3.5',
      fav: '4',
      dateinfo: '1 มี.ค. 2563',
      app: 'อนุมัติ',
    },
  ])

  return (
    <div>
      <CssBaseline />
      <MaterialTable
        title="ประกาศนียบัตรรายวิชา"
        columns={[
          { title: 'เลขประจำตัวบัตรประชาชน', field: 'id', type: 'numeric' },

          { title: 'คำนำหน้าชื่อ', field: 'title' },
          { title: 'ชื่อ', field: 'name' },
          { title: 'นามสกุล', field: 'surename' },
          { title: 'วันเปิดเรียน', field: 'date' },
          { title: 'วันที่สำเร็จการศึกษา', field: 'enddate' },
          { title: 'จำนวนชั่วโมง', field: 'hr' },
          { title: 'เกรด', field: 'grade' },
          { title: 'คะแนนความพึงพอใจ', field: 'fav' },
          { title: 'วันที่ได้รับข้อมูล', field: 'dateinfo' },
        ]}
        data={data}
        icons={tableIcons}
        editable={{
          onRowAdd: (newData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData])

                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData: any, oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data]
                const index = oldData.tableData.id
                dataUpdate[index] = newData
                setData([...dataUpdate])

                resolve()
              }, 1000)
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data]
                const index = oldData.tableData.id
                dataDelete.splice(index, 1)
                setData([...dataDelete])

                resolve()
              }, 1000)
            }),
        }}
      />

      <MaterialTable
        title="ประกาศนียบัตรหลักสูตร"
        columns={[
          { title: 'เลขประจำตัวบัตรประชาชน', field: 'id', type: 'numeric' },

          { title: 'คำนำหน้าชื่อ', field: 'title' },
          { title: 'ชื่อ', field: 'name' },
          { title: 'นามสกุล', field: 'surename' },
          { title: 'วันเปิดเรียน', field: 'date' },
          { title: 'วันที่สำเร็จการศึกษา', field: 'enddate' },
          { title: 'จำนวนชั่วโมง', field: 'hr' },
          { title: 'เกรด', field: 'grade' },
          { title: 'คะแนนความพึงพอใจ', field: 'fav' },
          { title: 'วันที่ได้รับข้อมูล', field: 'dateinfo' },
        ]}
        data={data}
        icons={tableIcons}
        editable={{
          onRowAdd: (newData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData])

                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData: any, oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data]
                const index = oldData.tableData.id
                dataUpdate[index] = newData
                setData([...dataUpdate])

                resolve()
              }, 1000)
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data]
                const index = oldData.tableData.id
                dataDelete.splice(index, 1)
                setData([...dataDelete])

                resolve()
              }, 1000)
            }),
        }}
      />
    </div>
  )
}
