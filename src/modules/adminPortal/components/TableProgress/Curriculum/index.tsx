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
//import { tableProps, DataProps } from '../tyscript'
import { forwardRef } from 'react';
import * as actions from "../../../actions"
import { useDispatch, useSelector } from "react-redux"
import Snackbar from "shared/SnackBar/SnackBar"
import { parseJwt } from "utils/getDataJWT"




import DialogAddCurriculum from "../Curriculum/DialogAddCurriculum"
import DialogEditCurriculum from "../Curriculum/DialogEditCurriculum"

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

  const [entriesCurriculum, setEntriesCurriculum] = useState<any>([])


  const token = getCookie('token');
  const platformid = parseJwt(token).unique_name
  const headers = {
    Authorization: `Bearer ${token}`,
  }


  const [openCurriculum, setOpenCurriculum] = useState(false);
  const [editDataCurriculum, setEditDataCurriculum] = useState<any>([])
  const [openEditCurriculum, setOpenEditCurriculum] = useState(false);
  const { message, severity } = useSelector((state: any) => state.admin);

  useEffect(() => {
    const fetch = async () => {
      try {
        const responseCurriculum = await axios.get(`/Platforms/${platformid}/CurriculumProgresses?max=10000`)

        setEntriesCurriculum(responseCurriculum.data)


      } catch (err) {
        console.log(err)
        setEntriesCurriculum([])
      }

    }
    fetch()
    // eslint-disable-next-line
  }, [message])
  entriesCurriculum.map((curriculum: any, index: number) => (entriesCurriculum[index].curriculumCodeName = `${curriculum.curriculumCode} ${curriculum.curriculumName}`))
  const dispatch = useDispatch();




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
        title="ความก้าวหน้าผู้เรียน หลักสูตร"
        actions={[
          {
            icon: () => <AddBox />,
            tooltip: "เพิ่ม",
            isFreeAction: true,
            onClick: (event, rowData) => {
              setOpenCurriculum(true)

            },

          },
          {
            icon: () => <Edit />,
            tooltip: "แก้ไข",
            onClick: (event, rowData) => {
              setOpenEditCurriculum(true)
              const save = rowData
              setEditDataCurriculum(save)
            },
          },
        ]}
        columns={[
          { title: "เลขประจำตัวบัตรประชาชน", field: "userId", type: "string" },
          { title: "คำนำหน้าชื่อ", field: "title" },
          { title: "ชื่อ", field: "firstName" },
          { title: "นามสกุล", field: "lastName" },
          { title: "รหัสหลักสูตร", field: "curriculumCodeName" },

          {
            title: "วันเปิดเรียน", field: "startDate", type: "date", dateSetting: { locale: "th-TH" }
          },
          { title: "เปอร์เซ็นความก้าวหน้า", field: "percent", type: "numeric", validate: rowData => rowData.percent <= 100 && rowData.percent >= 0 },
          { title: "วันที่ได้รับข้อมูล", field: "createDate", type: "date", editable: "never", dateSetting: { locale: "th-TH" } },
        ]}
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 50, 100]
        }}
        data={entriesCurriculum}
        editable={{

          onRowDelete: (oldData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore
                resolve()
                const data = [...entriesCurriculum]
                data.splice(data.indexOf(oldData), 1)
                axios
                  .delete(`/Platforms/${platformid}/CurriculumProgresses/${oldData.id}`, { headers })
                  .catch((error) => {
                    const action = actions.loadMessage(` เกิดข้อผิดพลาด${error.response.status}`, "error")
                    dispatch(action)

                  })
                setEntriesCurriculum(data)
              }, 600)
            }),

        }}
      />

      <DialogAddCurriculum open={openCurriculum} setOpen={setOpenCurriculum} />
      <DialogEditCurriculum open={openEditCurriculum} setOpen={setOpenEditCurriculum} data={editDataCurriculum} />
    </>
  )
}

