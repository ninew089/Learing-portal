import React from 'react'
import MaterialTable from 'material-table'
import { forwardRef } from 'react'
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
  SystemUpdateAlt,
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
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, id: 63 },
    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, id: 34 },
  ])
  type Table = { columns: Column[]; data: Data[] }
  type Column = { title: string; field: string; type?: any; lookup?: any }
  type Data = {
    name: string
    surname: string
    birthYear: number
    birthCity: number
  }

  return (
    <MaterialTable
      title="แก้ไขข้อมูลส่วนบุคคล"
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      columns={[
        { title: 'เลขประจำตัวบัตรประชาชน', field: 'id', type: 'numeric' },

        { title: 'คำนำหน้าชื่อ', field: 'title', type: 'string' },
        { title: 'ชื่อ', field: 'name', type: 'string' },
        { title: 'นามสกุล', field: 'surename', type: 'string' },
        { title: 'เบอร์โทร', field: 'tel', type: 'string' },
        { title: 'อีเมลล์', field: 'email', type: 'string' },
      ]}
      data={data}
      icons={tableIcons}
      options={{
        selection: true,
      }}
      actions={[
        {
          tooltip: 'save',
          icon: () => <SystemUpdateAlt />,
          onClick: (evt, data) => {
            console.log(data)
          },
        },
      ]}
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
  )
}
