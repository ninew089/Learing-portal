import React, { useEffect } from "react";
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

import { useDispatch, useSelector } from 'react-redux'
import * as  actions from '../actions'
import { formatDatetoThaiTest } from "utils/dateFormat"
export default function MaterialTableDemo(props: any) {
  const tableRef = React.createRef();
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
  };



  const dispatch = useDispatch();

  useEffect(() => {
    const action = actions.loadCourseCertificates()
    dispatch(action)
    const actionCurriculums = actions.loadCurriculumCertificates()
    dispatch(actionCurriculums)
    // eslint-disable-next-line
  }, [])

  const { coursecertificate, curriculumcertificate } = useSelector((state: any) => state.certificate);
  const predata = [...coursecertificate]
  const predata1 = [...curriculumcertificate]

  return (
    <div>
      <CssBaseline />


      <MaterialTable
        icons={tableIcons}
        title="รายวิชา"
        tableRef={tableRef}
        columns={[

          { title: "รหัสรายวิชา", field: "courseid" },
          { title: "ชื่อรายวิชา", field: "course" },
          { title: "หน่วยงานที่ให้ประกาศนียบัตร", field: "platform" },
        ]}
        data={predata}
        detailPanel={(rowData) => {
          return (
            <div>
              <h4>
                &nbsp;&nbsp;&nbsp;&nbsp; เลขประจำตัวประชาชน: {rowData.coursecertificate.userId}{" "}
              </h4>

              <h4>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp; ชื่อ: {rowData.coursecertificate.title}
                {rowData.coursecertificate.firstName} {rowData.coursecertificate.lastname}
              </h4>

              <h4> &nbsp;&nbsp;&nbsp;&nbsp;วันเปิดเรียน: {formatDatetoThaiTest(rowData.coursecertificate.createDate)}</h4>
              <h4>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;วันที่เริ่มเรียน: {formatDatetoThaiTest(rowData.coursecertificate.startDate)}
              </h4>

              <h4>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;วันที่สำเร็จการศึกษา: {formatDatetoThaiTest(rowData.coursecertificate.endDate)}
              </h4>

              <h4>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;จำนวนชั่วโมงที่เข้าเรียน: {rowData.coursecertificate.hour}
              </h4>
              <h4>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;คะแนนความพึงพอใจ: {rowData.coursecertificate.satisfactionScore}
              </h4>

              <h4> &nbsp;&nbsp;&nbsp;&nbsp;เกรด: {rowData.coursecertificate.grade}</h4>
            </div>
          );
        }}
        onRowClick={(event, rowData, togglePanel: any) => togglePanel()}
      />

      <MaterialTable
        icons={tableIcons}
        title="หลักสูตร"
        tableRef={tableRef}
        columns={[
          { title: "รหัสหลักสูตร", field: "curriculumid" },
          { title: "ชื่อหลักสูตร", field: "curriculum" },

          { title: "หน่วยงานที่ให้ประกาศนียบัตร", field: "platform" },
        ]}
        data={predata1}
        detailPanel={(rowData) => {
          return (
            <div>
              <h4>
                &nbsp;&nbsp;&nbsp;&nbsp; เลขประจำตัวประชาชน: {rowData.curriculumcertificate.userId}{" "}
              </h4>

              <h4>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp; ชื่อ: {rowData.curriculumcertificate.title}
                {rowData.curriculumcertificate.firstName} {rowData.curriculumcertificate.lastname}
              </h4>

              <h4> &nbsp;&nbsp;&nbsp;&nbsp;วันเปิดเรียน: {formatDatetoThaiTest(rowData.curriculumcertificate.createDate)}

              </h4>
              <h4>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;วันที่เริ่มเรียน: {formatDatetoThaiTest(rowData.curriculumcertificate.startDate)}
              </h4>

              <h4>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;วันที่สำเร็จการศึกษา: {formatDatetoThaiTest(rowData.curriculumcertificate.endDate)}
              </h4>

              <h4>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;จำนวนชั่วโมงที่เข้าเรียน: {rowData.curriculumcertificate.hour}
              </h4>
              <h4>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;คะแนนความพึงพอใจ: {rowData.curriculumcertificate.satisfactionScore}
              </h4>

              <h4> &nbsp;&nbsp;&nbsp;&nbsp;เกรด: {rowData.curriculumcertificate.grade}</h4>
            </div>
          );
        }}
        onRowClick={(event, rowData, togglePanel: any) => togglePanel()}
      />
    </div>
  );
}
