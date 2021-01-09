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
import { personProps } from './tyscript'
import { forwardRef } from 'react';


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

  const [entries, setEntries] = useState<personProps[]>([])
  const token = getCookie('token');
  const platformid = getCookie('platformid');
  const headers = {
    Authorization: `Bearer ${token}`,
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`/Platforms/${platformid}`)
        setEntries([response.data])
      } catch (err) {
        console.log(err)
        setEntries([])
      }

    }
    fetch()
    // eslint-disable-next-line
  }, [])


  return (
    <>


      <MaterialTable
        icons={tableIcons}
        title="ข้อมูลส่วนบุคคล"
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 50, 100]
        }}
        columns={[
          { title: "เลขประจำตัวบัตรประชาชน", field: "identNo", type: "numeric", editable: 'never' },

          { title: "คำนำหน้าชื่อ", field: "title", type: "string" },
          { title: "ชื่อ", field: "firstName", type: "string" },
          { title: "นามสกุล", field: "lastName", type: "string" },
          { title: "เบอร์โทร", field: "phone", type: "string" },
          { title: "อีเมลล์", field: "email", type: "string" },
        ]}
        data={entries}
        editable={{
          onRowUpdate: (newData: personProps, oldData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore
                resolve()
                const data = [...entries]
                data[oldData.tableData.id] = newData

                axios
                  .put(
                    `/Platforms/${platformid}`,
                    { id: data[oldData.tableData.id].id, officialName: data[oldData.tableData.id].officialName, abbreviation: data[oldData.tableData.id].abbreviation, thumbnail: data[oldData.tableData.id].thumbnail, link: data[oldData.tableData.id].link, curriculum: data[oldData.tableData.id].curriculum, course: data[oldData.tableData.id].course, identNo: newData.identNo, title: newData.title, firstName: newData.firstName, lastName: newData.lastName, phone: newData.phone, email: newData.email },
                    { headers }
                  )
                  .then((res) => console.log(res.data))
                setEntries([...data])
              }, 600)
            }),
        }}
      />
    </>
  )
}
