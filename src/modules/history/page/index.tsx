import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import { CssBaseline, Toolbar, Container } from "@material-ui/core";
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

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import { formatDatetoThaiTest } from "utils/dateFormat";
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
    const action = actions.loadCourseCertificates();
    dispatch(action);
    const actionCurriculums = actions.loadCurriculumCertificates();
    dispatch(actionCurriculums);
    // eslint-disable-next-line
  }, []);

  const { coursecertificate, curriculumcertificate } = useSelector(
    (state: any) => state.certificate
  );
  const predata = [...coursecertificate];
  const predata1 = [...curriculumcertificate];

  return (
    <Container>
      <Toolbar />

      <CssBaseline />

      <MaterialTable
        icons={tableIcons}
        title="รายวิชา"
        tableRef={tableRef}
        localization={{
          toolbar: {
            searchPlaceholder: "ค้นหารายวิชา",
            searchTooltip: "ค้นหารายวิชา",
          },
          body: { emptyDataSourceMessage: "ไม่พบข้อมูล" },
        }}
        columns={[
          { title: "รหัสรายวิชา", field: "courseid" },
          { title: "ชื่อรายวิชา", field: "course" },
          { title: "หน่วยงานที่ให้ประกาศนียบัตร", field: "platform" },
          {
            title: "ผลการศึกษา",
            field: "pass",
            render: (row) => {
              return row.pass ? (
                <div style={{ color: "#2E5E0B", fontWeight: 600 }}>ผ่าน</div>
              ) : (
                <div style={{ color: "#C52F2F", fontWeight: 600 }}>ไม่ผ่าน</div>
              );
            },
          },
        ]}
        data={predata}
        detailPanel={(rowData) => {
          return (
            <div style={{ margin: 20 }}>
              <div style={{ fontSize: "12px" }}>
                เลขประจำตัวประชาชน: {rowData.userid}
              </div>

              <div style={{ fontSize: "12px" }}>
                ชื่อ: {rowData.title}
                {rowData.firstname} {rowData.lastname}
              </div>

              <div style={{ fontSize: "12px" }}>
                วันเปิดเรียน:
                {formatDatetoThaiTest(rowData.startdate)}
              </div>
              <div style={{ fontSize: "12px" }}>
                วันที่สำเร็จการศึกษา:
                {formatDatetoThaiTest(rowData.enddate)}
              </div>

              <div style={{ fontSize: "12px" }}>หมายเหตุ: {rowData.note}</div>
            </div>
          );
        }}
        onRowClick={(event, rowData, togglePanel: any) => togglePanel()}
      />

      <MaterialTable
        icons={tableIcons}
        title="หลักสูตร"
        tableRef={tableRef}
        localization={{
          toolbar: {
            searchPlaceholder: "ค้นหาหลักสูตร",
            searchTooltip: "ค้นหาหลักสูตร",
          },
          body: { emptyDataSourceMessage: "ไม่พบข้อมูล" },
        }}
        columns={[
          { title: "รหัสหลักสูตร", field: "curriculumid" },
          { title: "ชื่อหลักสูตร", field: "curriculum" },
          { title: "หน่วยงานที่ให้ประกาศนียบัตร", field: "platform" },
          {
            title: "ผลการศึกษา",
            field: "pass",
            render: (row) => {
              return row.pass ? (
                <div style={{ color: "#2E5E0B", fontWeight: 600 }}>ผ่าน</div>
              ) : (
                <div style={{ color: "#C52F2F", fontWeight: 600 }}>ไม่ผ่าน</div>
              );
            },
          },
        ]}
        data={predata1}
        detailPanel={(rowData) => {
          return (
            <div style={{ margin: 20 }}>
              <div style={{ fontSize: "12px" }}>
                เลขประจำตัวประชาชน: {rowData.userid}
              </div>

              <div style={{ fontSize: "12px" }}>
                {" "}
                ชื่อ: {rowData.title}
                {rowData.firstname} {rowData.lastname}
              </div>

              <div style={{ fontSize: "12px" }}>
                {" "}
                วันเปิดเรียน: {formatDatetoThaiTest(rowData.startdate)}
              </div>

              <div style={{ fontSize: "12px" }}>
                {" "}
                วันที่สำเร็จการศึกษา: {formatDatetoThaiTest(rowData.enddate)}
              </div>

              <div style={{ fontSize: "12px" }}> หมายเหตุ: {rowData.note}</div>
            </div>
          );
        }}
        onRowClick={(event, rowData, togglePanel: any) => togglePanel()}
      />
    </Container>
  );
}
