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

export default function MaterialTableDemo(props: any) {
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
  const { useState } = React

  const [data, setData] = useState([
    {
      title: 'นาย',
      name: 'กกกกก',
      surename: 'ขขขขข',
      date: '1 มี.ค. 2563',
      id: 1234567891234,
      progress: '20%',
      dateinfo: '1 มี.ค. 2563',
    },
    {
      title: 'นาย',
      name: 'กกกกก',
      surename: 'ขขขขข',
      date: '1 มี.ค. 2563',
      id: 1234567891234,
      progress: '20%',
      dateinfo: '1 มี.ค. 2563',
    },
  ])

  return (
    <div>
      <CssBaseline />
      <MaterialTable
        title="ความก้าวหน้าของผู้เรียนรายวิชา"
        columns={[
          { title: 'เลขประจำตัวบัตรประชาชน', field: 'id', type: 'numeric' },
          { title: 'คำนำหน้าชื่อ', field: 'title' },
          { title: 'ชื่อ', field: 'name' },
          { title: 'นามสกุล', field: 'surename' },
          { title: 'วันเปิดเรียน', field: 'date' },
          { title: 'ความก้าวหน้า', field: 'progress' },
          { title: 'วันที่ได้รับข้อมูล', field: 'dateinfo' },
        ]}
        data={data}
        icons={tableIcons}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData])

                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData, oldData: any) =>
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
        title="ความก้าวหน้าของผู้เรียนหลักสูตร"
        columns={[
          { title: 'เลขประจำตัวบัตรประชาชน', field: 'id', type: 'numeric' },
          { title: 'คำนำหน้าชื่อ', field: 'title' },
          { title: 'ชื่อ', field: 'name' },
          { title: 'นามสกุล', field: 'surename' },
          { title: 'วันเปิดเรียน', field: 'date' },
          { title: 'ความก้าวหน้า', field: 'progress' },
          { title: 'วันที่ได้รับข้อมูล', field: 'dateinfo' },
        ]}
        data={data}
        icons={tableIcons}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData])

                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData, oldData: any) =>
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
