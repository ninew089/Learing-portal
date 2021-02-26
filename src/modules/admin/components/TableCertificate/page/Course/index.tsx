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
import { getCookie } from "cookie/cookie";
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Snackbar from "modules/compoenent/atomic/SnackBar";
import { courseCertificateProps } from "../../typescript";
import { forwardRef } from "react";
import * as actions from "../../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { parseJwt } from "utils/getDataJWT";
import DialogAdd from "../../component/Course/DialogAdd";
import DialogEdit from "../../component/Course/DialogEdit";

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
  };
  const dispatch = useDispatch();
  const [entries, setEntries] = useState<courseCertificateProps | any>();

  const token = getCookie("token");
  const platformid = parseJwt(token).unique_name;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const { message, severity } = useSelector((state: any) => state.admin);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `/Platforms/${platformid}/CourseCertificates?max=10000`
        );
        setEntries(response.data);
      } catch (err) {
        setEntries([]);
        console.log(err);
      }
    };
    fetch();
    // eslint-disable-next-line
  }, [message]);

  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<any>([]);
  const [openEdit, setOpenEdit] = useState(false);

  if (entries !== undefined) {
    entries.map(
      (course: any, index: number) =>
        (entries[
          index
        ].courseCodeName = `${course.courseCode} ${course.courseName}`)
    );
  }

  return (
    <>
      {message !== null && (
        <Snackbar
          message={message}
          open={message !== null ? true : false}
          severity={severity}
        />
      )}
      <MaterialTable
        icons={tableIcons}
        title="ประกาศนียบัตรรายวิชา"
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 50, 100],
        }}
        columns={[
          { title: "เลขประจำตัวบัตรประชาชน", field: "userId", type: "string" },
          { title: "คำนำหน้าชื่อ", field: "title" },
          { title: "ชื่อ", field: "firstName" },
          { title: "นามสกุล", field: "lastName" },
          { title: "รหัสวิชา", field: "courseCodeName" },

          {
            title: "วันเปิดเรียน",
            field: "startDate",
            type: "date",
            dateSetting: { locale: "th-TH" },
          },
          {
            title: "วันที่สำเร็จการศึกษา",
            field: "endDate",
            type: "date",
            dateSetting: { locale: "th-TH" },
          },

          {
            title: "ผลการศึกษา",
            field: "pass",
            render: (row) => {
              return row.pass ? (
                <div style={{ color: "#2E5E0B", fontWeight: 700 }}>ผ่าน</div>
              ) : (
                <div style={{ color: "#C52F2F", fontWeight: 700 }}>ไม่ผ่าน</div>
              );
            },
          },
          { title: "หมายเหตุ", field: "note" },
          { title: "จำนวนชั่วโมง", field: "hour", type: "numeric" },
          {
            title: "คะแนนความพึงพอใจ",
            field: "satisfactionScore",
            type: "numeric",
          },
          {
            title: "วันที่ได้รับข้อมูล",
            field: "createDate",
            type: "date",
            editable: "never",
            dateSetting: { locale: "th-TH" },
          },

          {
            title: "ผลการอนุมัติ",
            field: "approve",
            editable: "never",
            render: (row) => {
              return row.approve === 1 ? (
                <div style={{ color: "#2E5E0B", fontWeight: 700 }}>อนุมัติ</div>
              ) : (
                <div style={{ color: "#C52F2F", fontWeight: 700 }}>-</div>
              );
            },
          },
        ]}
        data={entries}
        actions={[
          {
            icon: () => <AddBox />,
            tooltip: "เพิ่ม",
            isFreeAction: true,
            onClick: (event, rowData) => {
              setOpen(true);
            },
          },
          {
            icon: () => <Edit />,
            tooltip: "แก้ไข",
            onClick: (event, rowData) => {
              setOpenEdit(true);
              const save = rowData;
              setEditData(save);
            },
          },
        ]}
        editable={{
          onRowDelete: (oldData: any) =>
            new Promise((resolve) => {
              setTimeout(() => {
                //@ts-ignore
                resolve();
                const data = [...entries];
                data.splice(data.indexOf(oldData), 1);

                try {
                  axios.delete(
                    `/Platforms/${platformid}/CourseCertificates/${oldData.id}`,
                    { headers }
                  );
                } catch (error) {
                  const action = actions.loadMessage(
                    ` เกิดข้อผิดพลาด${error.response.status}`,
                    "error"
                  );
                  dispatch(action);
                }
                setEntries([...data]);
              }, 600);
            }),
        }}
      />

      <DialogAdd open={open} setOpen={setOpen} />
      <DialogEdit open={openEdit} setOpen={setOpenEdit} data={editData} />
    </>
  );
}
