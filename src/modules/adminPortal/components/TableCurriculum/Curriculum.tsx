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
import DialogAdd from './DialogAdd'
import DialogEdit from './DialogEdit'

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

  const [columns] = useState([
    { title: 'รหัสหลักสูตร', field: 'id' },
    { title: 'ชื่อหลักสูตร', field: 'course' },
  ])

  const [data, setData] = useState([
    {
      id: 'A01',
      course: 'หลักสูตรฝึกอบรมข้าราชการบรรจุใหม่',
    },

    {
      id: 'A02',

      course: 'หลักสูตรผู้นำทีมที่มีประสิทธิภาพ',
    },
    {
      id: 'A03',

      course: 'หลักสูตรเสริมทักษะด้านอาเซียน',
    },
  ])
  // const [id, setId] = React.useState('')
  // const handleChange = (event) => {
  //  setId(event.target.value)
  //}
  // const tableRef = React.createRef()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const [openEdit, setOpenEdit] = useState(false)

  const handleClickOpenEdit = () => {
    setOpenEdit(true)
  }
  return (
    <div>
      <CssBaseline />

      <MaterialTable
        title="หลักสูตร"
        columns={columns}
        data={data}
        icons={tableIcons}
        actions={[
          {
            icon: () => <AddBox />,
            tooltip: 'เพิ่ม',
            isFreeAction: true,
            onClick: handleClickOpen,
          },
          {
            icon: () => <Edit />,
            tooltip: 'แก้ไข',
            onClick: handleClickOpenEdit,
          },
        ]}
        editable={{
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
      <DialogAdd open={open} setOpen={setOpen} />
      <DialogEdit open={openEdit} setOpen={setOpenEdit} />
    </div>
  )
}
