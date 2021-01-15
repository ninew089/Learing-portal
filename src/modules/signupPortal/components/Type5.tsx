import React, { useEffect } from "react";

import { TextField, MenuItem, FormControl } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Date from "./DatePickerJob";

import * as actions from "modules/infomation/actions";
import { useDispatch, useSelector } from "react-redux";
import { stateEnterpriseProps, typeProps } from "../typescript"
const useStyles = makeStyles((theme) => ({
  input: {
    color: "#0f1626",
    fontWeight: 600,
    "& .MuiInputBase-root.MuiOutlineInput-root": {
      color: "#45A29E",
      borderColor: "#757575",
      fontWeight: 600,
    },
  },
  selectInput: {
    color: "#757575",
    fontWeight: 600,
    "& .MuiInputBase-root.MuiOutlineInput-root": {
      color: "#45A29E",
      borderColor: "#757575",
      fontWeight: 600,
    },
  },
  textfield: {
    marginTop: 10,
    "& .MuiFormHelperText-root.Mui-error ": {
      color: "ff533d",
      fontWeight: 600,
      borderWidth: "1px",
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderColor: "ff533d",
      borderWidth: "1px",
    },
    "& label.MuiFormLabel-root": {
      fontWeight: 600,
      "&:after .Mui-error": {
        borderColor: "#ff533d",
        borderWidth: "1px",
      },
    },
    "& label.Mui-focused": {
      color: "#132740",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.secondary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.secondary.main,
        borderWidth: "1px",
      },
      "&:hover fieldset": {
        borderColor: "#a8c6ff",
        borderWidth: "3px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#a8c6ff",
        borderWidth: "3px",
      },
      "&.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ff533d",
        borderWidth: "1px",
      },
    },
  },
}));

export default function SignIn(props: typeProps) {
  const { formProps, name } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const { StateEnterprises } = useSelector((state: any) => state.infomation);

  useEffect(() => {
    const action = actions.loadStateEnterprises();
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <FormControl fullWidth>
        <h4> {name}</h4>
        <Controller
          as={
            <TextField
              variant="outlined"
              fullWidth
              className={classes.textfield}
              label="รัฐวิสากิจ"
              InputLabelProps={{
                className: classes.selectInput,
              }}
              select
              helperText={
                formProps.errors.stateEnterprisid &&
                formProps.errors.stateEnterprisid.message
              }
              error={!!formProps.errors.stateEnterprisid}
            >
              {StateEnterprises.map((stateEnterprise: stateEnterpriseProps, index: number) => (
                <MenuItem value={stateEnterprise.id} key={index}>
                  {stateEnterprise.name}
                </MenuItem>
              ))}
            </TextField>
          }
          name="stateEnterprisid"
          rules={{ required: "กรุณาเลือกอาชีพ" }}
          control={formProps.control}
          defaultValue=""
        />

        <Date
          title={"วันที่เริ่มทำงาน"}
          register={formProps.register}
          name={"jobStartDate"}
        />

        <TextField
          fullWidth
          label="ตำแหน่ง"
          name="jobTitle"
          inputRef={formProps.register}
          variant="outlined"
          className={classes.textfield}
          InputProps={{
            className: classes.input,
          }}
          helperText={
            formProps.errors.jobTitle && formProps.errors.jobTitle.message
          }
          error={!!formProps.errors.jobTitle}
        />
      </FormControl>
    </>
  );
}
