import React, { useEffect } from "react";

import { TextField, MenuItem, FormControl } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";

import * as actions from "modules/infomation/actions";
import { useDispatch, useSelector } from "react-redux";
import { jobTypes2Props, typeProps } from "../typescript";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#0f1626",

    "& .MuiInputBase-root.MuiOutlineInput-root": {
      color: "#45A29E",
      borderColor: "#757575",
      fontWeight: 600,
    },
  },
  selectInput: {
    "& .MuiInputBase-root.MuiOutlineInput-root": {
      color: "#45A29E",
      borderColor: "#757575",
      fontWeight: 600,
    },
  },
  textfield: {
    marginTop: 10,
  },
  menu: {
    fontSize: 12,
    whiteSpace: "normal",
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
  },
}));

export default function SignIn(props: typeProps) {
  const { formProps, name } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const { jobTypes2 } = useSelector((state: any) => state.infomation);

  useEffect(() => {
    const action = actions.loadJobType2();
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <FormControl fullWidth>
        <h4> {name}</h4>
        {jobTypes2.length !== 0 && (
          <Controller
            as={
              <TextField
                variant="outlined"
                className={classes.textfield}
                label="ประเภทข้าราชการ"
                InputLabelProps={{
                  className: classes.selectInput,
                }}
                select
                helperText={
                  formProps.errors.jobtypeId &&
                  formProps.errors.jobtypeId.message
                }
                error={!!formProps.errors.jobtypeId}
              >
                {jobTypes2.map((jobType2: jobTypes2Props, index: number) => (
                  <MenuItem
                    className={classes.menu}
                    key={index}
                    value={jobType2.id}
                  >
                    {jobType2.name}
                  </MenuItem>
                ))}
              </TextField>
            }
            name="jobtypeId"
            rules={{ required: "กรุณาเลือกประเภทตำแหน่ง" }}
            control={formProps.control}
            defaultValue=""
          />
        )}

        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="ตำแหน่ง"
          name="jobTitle"
          variant="outlined"
          className={classes.textfield}
          InputProps={{
            className: classes.input,
          }}
          inputRef={formProps.register}
          helperText={
            formProps.errors.jobTitle && formProps.errors.jobTitle.message
          }
          error={!!formProps.errors.jobTitle}
        />
        <TextField
          fullWidth
          label="ระดับ"
          name="jobLevel"
          variant="outlined"
          className={classes.textfield}
          InputProps={{
            className: classes.input,
          }}
          inputRef={formProps.register}
          helperText={
            formProps.errors.jobLevel && formProps.errors.jobLevel.message
          }
          error={!!formProps.errors.jobLevel}
        />
      </FormControl>
    </>
  );
}
