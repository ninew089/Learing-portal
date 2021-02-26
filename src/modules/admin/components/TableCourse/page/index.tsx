import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import { CssBaseline } from "@material-ui/core";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import DialogAdd from "../components/DialogAdd";
import DialogEdit from "../components/DialogEdit";
import { getCookie } from "cookie/cookie";
import axios from "axios";
import { useSelector } from "react-redux";
import Snackbar from "modules/compoenent/atomic/SnackBar/SnackBar";
import { parseJwt } from "utils/getDataJWT";

export default function MaterialTableDemo() {
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
  const { useState } = React;

  const [entries, setEntries] = useState<any>([]);

  const token = getCookie("token");
  const platformid = parseJwt(token).unique_name;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const { message, severity } = useSelector((state: any) => state.admin);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`/Platforms/${platformid}/Courses`);

        setEntries(response.data);
      } catch (err) {}
    };
    fetch();
    // eslint-disable-next-line
  }, [message]);

  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<any>([]);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div>
      <CssBaseline />
      {message !== null && (
        <Snackbar
          message={message}
          open={message !== null ? true : false}
          severity={severity}
        />
      )}

      <MaterialTable
        title="รายวิชา"
        columns={[
          { title: "เลขวิชา", field: "id", type: "numeric", editable: "never" },
          { title: "รหัสวิชา", field: "code", type: "numeric" },
          { title: "ชื่อวิชา", field: "name" },
        ]}
        data={entries}
        icons={tableIcons}
        options={{
          pageSize: 20,
          pageSizeOptions: [20, 50, 100],
        }}
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
                axios
                  .delete(`/Platforms/${platformid}/Courses/${oldData.id}`, {
                    headers,
                  })
                  .then((res) => res.data);
                setEntries([...data]);
              }, 600);
            }),
        }}
      />
      <DialogAdd open={open} setOpen={setOpen} />
      <DialogEdit open={openEdit} setOpen={setOpenEdit} data={editData} />
    </div>
  );
}
