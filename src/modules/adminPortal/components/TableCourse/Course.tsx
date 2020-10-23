import React from 'react'
import MaterialTable from 'material-table'
import { forwardRef } from 'react'
import { CssBaseline } from '@material-ui/core'
import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
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

  const [data, setData] = useState([
    { name: 'เศรษฐกิจพอเพียง', id: 'C01' },
    { name: 'เศรษฐกิจพอเพียง', id: 'C01' },
  ])
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
        title="รายวิชา"
        columns={[
          { title: 'รหัสวิชา', field: 'id', type: 'numeric' },

          { title: 'ชื่อวิชา', field: 'name' },
        ]}
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
