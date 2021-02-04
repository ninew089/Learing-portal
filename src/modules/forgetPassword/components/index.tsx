import React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  InputAdornment,

} from "@material-ui/core";
import Snackbar from "shared/SnackBar/SnackBar";
import { makeStyles } from "@material-ui/core/styles";
import {Mail,RecentActors} from '@material-ui/icons';

import Dateth from "./DateTh";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions";
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
      borderBottomColor: "#b7b7b7",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#b7b7b7",
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
  paper: {
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(8),
    width: "100%", // Fix IE 11 issue.
    background: "#fdfdfd",
    padding: theme.spacing(4),
    borderRadius: 10,
  },
  submit: {
    marginTop: "10px",
    background: theme.palette.secondary.main,
    borderRadius: 20,
    padding: 8,
    color: "#fdfdfd",
    "&:hover": {
      background: theme.palette.secondary.main,
    },
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
    margin: theme.spacing(0),
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 4,
    marginBottom: 4,
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    validationSchema: yup.object().shape({
      userId: yup.string().required(),
      email: yup
        .string()
        .required("กรุณากรอกอีเมล")
        .email("กรุณากรอกอีเมลให้ถูกต้อง"),
      dob: yup.string().required(),
    }),
  });
  //const { message, status } = useSelector((state: any) => state.forgot);
  const onSubmitData = (data: any) => {
    const predata = JSON.parse(
      `{"email":"${data.email}","birthyear":"${data.dob}"}`
    );
    const action = actions.loadFORGOT(predata, data.userId);
    dispatch(action);
  };
  const { message, severity } = useSelector((state: any) => state.infomation);

  return (
    <Container component="main" maxWidth="xs">
      {message !== null && (
        <Snackbar
          message={message}
          open={message !== null ? true : false}
          severity={severity}
        />
      )}
      <form className={classes.form} onSubmit={handleSubmit(onSubmitData)}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" align="left">
            ลืมรหัสผ่าน
          </Typography>
          <Typography component="h1" variant="subtitle2" align="left">
            &nbsp; &nbsp;หากลืมรหัสผ่านในการลงชื่อเข้าใช้
            กรุณากรอกเลขประจำตัวประชาชน ปีเกิด และ อีเมลที่ใช้สมัคร
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            label="เลขประจำตัวประชาชน"
            name="userId"
            inputRef={register}
            helperText={errors.userId ? "กรุณากรอกเลขประจำตัวประชาชน" : ""}
            error={!!errors.userId}
            className={classes.textfield}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">
                  <RecentActors />
                </InputAdornment>
              ),
            }}
          />
          <Dateth title={"ปีเกิด"} register={register} name={"dob"} />

          <TextField
            variant="outlined"
            className={classes.textfield}
            fullWidth
            id="input-with-icon-textfield"
            label="อีเมลที่ใช้สมัครสมาชิก"
            name="email"
            inputRef={register}
            helperText={errors.email ? errors.email.message : ""}
            error={!!errors.email}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">
                  <Mail  />
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" fullWidth className={classes.submit}>
            ขอรหัสผ่านใหม่
          </Button>
        </div>
      </form>
    </Container>
  );
}
