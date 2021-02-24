import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import { TextField, MenuItem, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "modules/infomation/actions";
import { useDispatch, useSelector } from "react-redux";
import { jobTypes1Props, jobLevelProps, typeProps } from "../typescript";
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

export default function Type1(props: typeProps) {
  const classes = useStyles();
  const { formProps, name } = props;
  const dispatch = useDispatch();
  const { jobTypes1, jobLevels } = useSelector(
    (state: any) => state.infomation
  );

  useEffect(() => {
    const action = actions.loadJobType1();
    dispatch(action);
    const actionJobLevel = actions.loadJobLevel();
    dispatch(actionJobLevel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <FormControl fullWidth>
        <h4> {name}</h4>
        {jobTypes1?.length !== 0 && (
          <Controller
            as={
              <TextField
                variant="outlined"
                fullWidth
                className={classes.textfield}
                label="ประเภทตำแหน่ง"
                InputLabelProps={{
                  className: classes.selectInput,
                }}
                select
                defaultValue=""
                helperText={
                  formProps.errors.jobtypeId &&
                  formProps.errors.jobtypeId.message
                }
                error={!!formProps.errors.jobtypeId}
              >
                {jobTypes1.map((jobType1: jobTypes1Props, index: number) => (
                  <MenuItem key={index} value={jobType1.id}>
                    {jobType1.name}
                  </MenuItem>
                ))}
              </TextField>
            }
            name="jobtypeId"
            defaultValue=""
            rules={{ required: "กรุณาเลือกประเภทตำแหน่ง" }}
            control={formProps.control}
          />
        )}

        <TextField
          fullWidth
          label="ตำแหน่ง"
          name="jobTitle"
          inputRef={formProps.register}
          variant="outlined"
          className={classes.textfield}
          InputProps={{
            className: classes.selectInput,
          }}
          helperText={
            formProps.errors.jobTitle && formProps.errors.jobTitle.message
          }
          error={!!formProps.errors.jobTitle}
        />
        {jobLevels?.length !== 0 && (
          <Controller
            as={
              <TextField
                variant="outlined"
                fullWidth
                className={classes.textfield}
                label="ระดับ"
                InputLabelProps={{
                  className: classes.selectInput,
                }}
                defaultValue=""
                select
                helperText={
                  formProps.errors.jobLevelid &&
                  formProps.errors.jobLevelid.message
                }
                error={!!formProps.errors.jobLevelid}
              >
                {jobLevels.map((jobLevel: jobLevelProps, index: number) => {
                  if (
                    formProps.getValues("jobtypeId") === 1 &&
                    jobLevel.id > 0 &&
                    jobLevel.id < 5
                  ) {
                    return (
                      <MenuItem key={index} value={jobLevel.id}>
                        {jobLevel.name}
                      </MenuItem>
                    );
                  }
                  if (
                    formProps.getValues("jobtypeId") === 2 &&
                    jobLevel.id > 4 &&
                    jobLevel.id < 10
                  ) {
                    return (
                      <MenuItem key={index} value={jobLevel.id}>
                        {jobLevel.name}
                      </MenuItem>
                    );
                  }
                  if (
                    formProps.getValues("jobtypeId") >= 3 &&
                    jobLevel.id > 9
                  ) {
                    return (
                      <MenuItem key={index} value={jobLevel.id}>
                        {jobLevel.name}
                      </MenuItem>
                    );
                  }
                })}
              </TextField>
            }
            name="jobLevelid"
            rules={{ required: "กรุณาเลือกระดับ" }}
            control={formProps.control}
            defaultValue=""
          />
        )}
      </FormControl>
    </>
  );
}
