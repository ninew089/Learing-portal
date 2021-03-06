import React, { useEffect } from "react";
import Type1 from "./Type1";
import Type2 from "./Type2";
import Type3 from "./Type3";
import Type4 from "./Type4";
import Type5 from "./Type5";
import Detail123 from "./Detail123";

import {
  Typography,
  TextField,
  MenuItem,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Controller } from "react-hook-form";

import * as actions from "modules/infomation/actions";
import { useDispatch, useSelector } from "react-redux";
import { userTypeProps, typeUserProps } from "../typescript";
const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    width: "100%", // Fix IE 11 issue.
  },
  input: {
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
}));

export default function SignIn(props: typeUserProps) {
  const { formProps } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    const action = actions.loadUserTypes();
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { userTypes } = useSelector((state: any) => state.infomation);

  function renderTypeProps() {
    const value = formProps.getValues("usertypeid");
    switch (value) {
      case 1:
        return (
          <div>
            <Type1 formProps={formProps} name={userTypes[0].name} />
            <Detail123 formProps={formProps} />
          </div>
        );
      case 2:
        return (
          <div>
            <Type2 formProps={formProps} name={userTypes[1].name} />
            <Detail123 formProps={formProps} />
          </div>
        );
      case 3:
        return (
          <div>
            <Type3 formProps={formProps} name={userTypes[2].name} />
            <Detail123 formProps={formProps} />
          </div>
        );
      case 5:
        return <Type4 formProps={formProps} name={userTypes[4].name} />;
      case 4:
        return <Type5 formProps={formProps} name={userTypes[3].name} />;
    }
  }

  return (
    <>
      <CssBaseline />
      <div className={classes.form}>
        <Typography component="h1" variant="h5" align="center">
          ข้อมูลการทำงาน
        </Typography>
        <Controller
          as={
            <TextField
              variant="outlined"
              fullWidth
              className={classes.textfield}
              label="ประเภทข้าราชการ/เจ้าหน้าที่"
              InputLabelProps={{
                className: classes.selectInput,
              }}
              select
              helperText={
                formProps.errors.usertypeid &&
                formProps.errors.usertypeid.message
              }
              error={!!formProps.errors.usertypeid}
            >
              {userTypes.map((userType: userTypeProps, index: number) => (
                <MenuItem key={index} value={userType.id}>
                  {userType.name}
                </MenuItem>
              ))}
            </TextField>
          }
          name="usertypeid"
          rules={{ required: "กรุณาเลือกประเภท" }}
          control={formProps.control}
          defaultValue=""
        />

        {renderTypeProps()}
      </div>
    </>
  );
}
