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
  const [entries, setEntries] = useState<any>([])
  const [entriesCurriculum, setEntriesCurriculum] = useState<any>([])

  const token = getCookie('token');
  const platformid = getCookie('platformid');
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  useEffect(() => {
    const fetch = async () => {
      try {

        const response = await axios.get(`/Platforms/${platformid}/CourseProgresses?max=10000`)

        setEntries(response.data)


      } catch (err) {
        console.log(err)
      }

    }
    fetch()
    // eslint-disable-next-line
  }, [entries.length])
  useEffect(() => {
    const fetch = async () => {
      try {
        const responseCurriculum = await axios.get(`/Platforms/${platformid}/CurriculumProgresses?max=10000`)
        setEntriesCurriculum(responseCurriculum.data)

      } catch (err) {
        console.log(err)
      }

    }
    fetch()
    // eslint-disable-next-line
  }, [entriesCurriculum.length])



  return (
    <>


      <MaterialTable
        icons={tableIcons}
        title="ความก้าวหน้าผู้เรียน รายวิชา"
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
          { title: "เปอร์เซ็นความก้าวหน้า", field: "percent", type: "numeric" },
          { title: "วันที่ได้รับข้อมูล", field: "createDate", type: "date", editable: "never", dateSetting: { locale: "th-TH" } },

        ]}
        data={entries}
        editable={{
          //update
          onRowAdd: (newData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore

                resolve()
                const data = [...entries]
                data[entries.length] = newData
                axios
                  .post(
                    `/Platforms/${platformid}/CourseProgresses`,
                    { courseId: newData.courseId, userId: newData.userId, title: newData.title, firstName: newData.firstName, lastName: newData.lastname, startDate: newData.startDate, percent: newData.percent },
                    { headers }
                  )

                setEntries(data)

              }, 600)
            }),
          onRowUpdate: (newData: any, oldData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore
                resolve()
                const data = [...entries]
                data[oldData.tableData.id] = newData
                axios
                  .put(
                    `/Platforms/${platformid}/CourseProgresses/${newData.id}`,
                    { courseId: newData.courseId, userId: newData.userId, title: newData.title, firstName: newData.firstName, lastName: newData.lastname, startDate: newData.startDate, percent: newData.percent },
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
                  .delete(`/Platforms/${platformid}/CourseProgresses/${oldData.id}`, { headers })

                setEntries(data)
              }, 600)
            }),

        }}
      />
      <MaterialTable
        icons={tableIcons}
        title="ความก้าวหน้าผู้เรียน หลักสูตร"
        columns={[
          { title: "เลขประจำตัวบัตรประชาชน", field: "userId", type: "string" },
          { title: "คำนำหน้าชื่อ", field: "title" },
          { title: "ชื่อ", field: "firstName" },
          { title: "นามสกุล", field: "lastname" },
          { title: "รหัสวิชา", field: "curriculumId", type: "numeric" },
          {
            title: "วันเปิดเรียน", field: "startDate", type: "date", dateSetting: { locale: "th-TH" }
          },
          { title: "เปอร์เซ็นความก้าวหน้า", field: "percent", type: "numeric" },
          { title: "วันที่ได้รับข้อมูล", field: "createDate", type: "date", editable: "never", dateSetting: { locale: "th-TH" } },
        ]}
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 50, 100]
        }}
        data={entriesCurriculum}
        editable={{
          //update
          onRowAdd: (newData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore
                resolve()
                const data = [...entriesCurriculum]
                data[entriesCurriculum.length] = newData
                axios
                  .post(
                    `/Platforms/${platformid}/CurriculumProgresses`,
                    { curriculumId: newData.curriculumId, userId: newData.userId, title: newData.title, firstName: newData.firstName, lastName: newData.lastname, startDate: newData.startDate, percent: newData.percent },
                    { headers }
                  )

                setEntriesCurriculum(data)
              }, 600)
            }),
          onRowUpdate: (newData: any, oldData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore
                resolve()
                const data = [...entriesCurriculum]
                data[oldData.tableData.id] = newData
                axios
                  .put(
                    `/Platforms/${platformid}/CurriculumProgresses/${newData.id}`,
                    { curriculumId: newData.curriculumId, userId: newData.userId, title: newData.title, firstName: newData.firstName, lastName: newData.lastname, startDate: newData.startDate, percent: newData.percent },
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
                  .delete(`/Platforms/${platformid}/CurriculumProgresses/${oldData.id}`, { headers })

                setEntriesCurriculum(data)
              }, 600)
            }),

        }}
      />
    </>
  )
}

/*
import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import { CssBaseline } from "@material-ui/core";
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
} from "@material-ui/icons";

export default function MaterialTableDemo(props: any) {
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
  };
  const { useState } = React;
  //เลขประจำตัวประชาชน / คำนำหน้าชื่อ / ชื่อ / นามสกุล / วันเปิดเรียน / วันที่สำเร็จการศึกษา / จำนวนชั่วโมง / เกรด / คะแนนความพึงพอใจ / วันที่ได้รับข้อมูล / อนุมัติ

  const [data, setData] = useState([
    {
      title: "นาย",
      name: "กกกกก",
      surename: "ขขขขข",
      date: "1 มี.ค. 2563",
      id: 1234567891234,
      enddate: "1 มี.ค. 2563",
      hr: "2",
      grade: "3.5",
      fav: "4",
      dateinfo: "1 มี.ค. 2563",
      app: "อนุมัติ",
    },
    {
      title: "นาย",
      name: "กกกกก",
      surename: "ขขขขข",
      date: "1 มี.ค. 2563",
      id: 1234567891234,
      enddate: "1 มี.ค. 2563",
      hr: "2",
      grade: "3.5",
      fav: "4",
      dateinfo: "1 มี.ค. 2563",
      app: "อนุมัติ",
    },
  ]);

  return (
    <div>
      <CssBaseline />
      <MaterialTable
        title="ประกาศนียบัตรรายวิชา"
        columns={[
          { title: "เลขประจำตัวบัตรประชาชน", field: "id", type: "numeric" },

          { title: "คำนำหน้าชื่อ", field: "title" },
          { title: "ชื่อ", field: "name" },
          { title: "นามสกุล", field: "surename" },
          { title: "วันเปิดเรียน", field: "date" },
          { title: "วันที่สำเร็จการศึกษา", field: "enddate" },
          { title: "จำนวนชั่วโมง", field: "hr" },
          { title: "เกรด", field: "grade" },
          { title: "คะแนนความพึงพอใจ", field: "fav" },
          { title: "วันที่ได้รับข้อมูล", field: "dateinfo" },
        ]}
        data={data}
        icons={tableIcons}
        editable={{
          onRowAdd: (newData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData: any, oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />

      <MaterialTable
        title="ประกาศนียบัตรหลักสูตร"
        columns={[
          { title: "เลขประจำตัวบัตรประชาชน", field: "id", type: "numeric" },

          { title: "คำนำหน้าชื่อ", field: "title" },
          { title: "ชื่อ", field: "name" },
          { title: "นามสกุล", field: "surename" },
          { title: "วันเปิดเรียน", field: "date" },
          { title: "วันที่สำเร็จการศึกษา", field: "enddate" },
          { title: "จำนวนชั่วโมง", field: "hr" },
          { title: "เกรด", field: "grade" },
          { title: "คะแนนความพึงพอใจ", field: "fav" },
          { title: "วันที่ได้รับข้อมูล", field: "dateinfo" },
        ]}
        data={data}
        icons={tableIcons}
        editable={{
          onRowAdd: (newData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData: any, oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
}
*/