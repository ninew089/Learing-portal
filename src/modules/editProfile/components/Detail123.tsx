import React, { useEffect } from "react";
import { TextField, MenuItem, FormControl } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { DatePickerJob } from "modules/compoenent/atomic/DatePicker";
import * as actions from "modules/infomation/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  formControlInfo: {
    margin: theme.spacing(2),
    paddingRight: theme.spacing(4),
    marginBottom: 0,
    marginTop: 0,
  },
  formControlDate: {
    margin: theme.spacing(2),
  },
  font: {
    color: "rgba(0, 0, 0, 0.54)",
    fontWeight: 500,
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 1,
    marginBottom: 1,
  },
  marginDate: {
    paddingLeft: theme.spacing(2),
    margin: theme.spacing(0),
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 4,
    marginBottom: 4,
  },
  selectInput: {
    "& .MuiInputBase-root.MuiOutlineInput-root": {
      color: "#45A29E",
      borderColor: "#757575",
      fontWeight: 600,
    },
  },
  input: {
    color: "#0f1626",

    "& .MuiInputBase-root.MuiOutlineInput-root": {
      color: "#45A29E",
      borderColor: "#757575",
      fontWeight: 600,
    },
  },
  textfield: {
    marginTop: 10,
  },
  form: {
    marginTop: theme.spacing(4),
    width: "100%", // Fix IE 11 issue.
  },
  menu: {
    fontSize: 12,
    whiteSpace: "normal",
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
  },
}));

export default function SignIn(props: any) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { formProps } = props;

  useEffect(() => {
    const action = actions.loadMinistries();
    dispatch(action);
    // eslint-disable-next-line
  }, []);

  const { Ministries, Departments } = useSelector(
    (state: any) => state.infomation
  );

  const value = formProps.getValues("MinistryId");
  const dep = formProps.getValues("DepartmentId");

  useEffect(() => {
    const value = formProps.getValues("MinistryId");
    const actionDepartments = actions.loadDepartments(value);
    dispatch(actionDepartments);

    if (Departments.length !== 0) {
      const depProps = Departments.filter((member: any) => {
        return member.id === parseInt(dep);
      }).length;
      if (depProps === 0) {
        formProps.setValue("DepartmentId", undefined, { shouldValidate: true });
      }
    }

    // eslint-disable-next-line
  }, [value]);

  return (
    <>
      <FormControl fullWidth>
        <h4>
          สำหรับข้าราชการพลเรือน ข้าราชการประเภทอื่น
          หรือเจ้าหน้าที่ของรัฐในส่วนราชการต่าง ๆ
        </h4>
      </FormControl>

      <DatePickerJob
        title={"วันที่รับราชการ"}
        register={formProps.register}
        name={"jobStartDate"}
      />
      {Ministries?.length !== 0 && (
        <Controller
          as={
            <TextField
              variant="outlined"
              fullWidth
              className={classes.textfield}
              label="กระทรวง"
              defaultValue=""
              InputLabelProps={{
                className: classes.selectInput,
              }}
              select
              helperText={
                formProps.errors.MinistryId &&
                formProps.errors.MinistryId.message
              }
              error={!!formProps.errors.MinistryId}
            >
              {Ministries.map((ministry: any, index: number) => (
                <MenuItem
                  className={classes.menu}
                  key={index}
                  value={ministry.id}
                >
                  {ministry.name}
                </MenuItem>
              ))}
            </TextField>
          }
          name="MinistryId"
          rules={{ required: "กรุณาเลือกประเภทตำแหน่ง" }}
          control={formProps.control}
          defaultValue=""
        />
      )}
      {Departments?.length !== 0 && (
        <Controller
          as={
            <TextField
              variant="outlined"
              fullWidth
              className={classes.textfield}
              label="กรมต้นสังกัด"
              InputLabelProps={{
                className: classes.selectInput,
              }}
              select
              defaultValue=""
              helperText={
                formProps.errors.DepartmentId &&
                formProps.errors.DepartmentId.message
              }
              error={!!formProps.errors.DepartmentId}
            >
              {Departments.map((department: any, index: number) => (
                <MenuItem
                  className={classes.menu}
                  key={index}
                  value={department.id}
                >
                  {department.name}
                </MenuItem>
              ))}
            </TextField>
          }
          name="DepartmentId"
          rules={{ required: "กรุณาเลือกกรมที่สังกัด" }}
          control={formProps.control}
          defaultValue=""
        />
      )}

      <TextField
        fullWidth
        label="ชื่อส่วนราชการที่สังกัด"
        name="Division"
        variant="outlined"
        className={classes.textfield}
        InputProps={{
          className: classes.input,
        }}
        inputRef={formProps.register}
        helperText={
          formProps.errors.Division ? formProps.errors.Division.message : ""
        }
        error={!!formProps.errors.Division}
      />
    </>
  );
}
