import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import { CssBaseline, Grid, Button } from "@material-ui/core";
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
import { getCookie } from "cookie/cookie";
import axios from "axios";
import RefreshIcon from "@material-ui/icons/Refresh";
import SeacrchCourse from "../components/SearhCurriculum";
import DialogEdit from "../components/DialogEdit";
import { useSelector } from "react-redux";
import Snackbar from "modules/compoenent/atomic/SnackBar";
import { parseJwt } from "utils/getDataJWT";

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
  };
  const { useState } = React;

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState<any>([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [value, setValue] = useState();
  const [entries, setEntries] = useState<any>([]);
  const token = getCookie("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const { message, severity } = useSelector((state: any) => state.admin);
  const [number, setNumber] = useState(0);

  const platformid = parseJwt(token).unique_name;
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `/Platforms/${platformid}/Curriculums/${value}/Courses`
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
  const onSubmit = async () => {
    if (value !== undefined) {
      try {
        const response = await axios.get(
          `/Platforms/${platformid}/Curriculums/${value}/Courses`
        );
        setEntries(response.data);
      } catch (err) {
        setEntries([]);
        console.log(err);
      }
    }
  };

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
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        style={{ margin: 20 }}
      >
        <SeacrchCourse setValue={setValue} />
        <Button onClick={onSubmit}>ค้นหาหลักสูตร</Button>
      </Grid>

      <MaterialTable
        title="รายวิชาในหลักสูตร"
        columns={[
          { title: "ลำดับที่", field: "no", type: "numeric" },
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
            onClick: handleClickOpen,
          },
          {
            icon: () => <Edit />,
            tooltip: "แก้ไข",
            onClick: (event, rowData) => {
              setOpenEdit(true);
              const save = rowData;
              setNumber(rowData.tableData.id + 1);

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
                  .delete(
                    `/Platforms/${platformid}/Curriculums/${value}/Courses/${oldData.id}`,
                    { headers }
                  )
                  .then((res) => console.log(res.data));
                setEntries(data);
              }, 600);
            }),
        }}
      />
      <DialogEdit
        open={openEdit}
        setOpen={setOpenEdit}
        data={editData}
        valueCurriculun={value}
        numberNo={number}
      />
      <DialogAdd open={open} setOpen={setOpen} valueCurriculun={value} />
    </div>
  );
}
