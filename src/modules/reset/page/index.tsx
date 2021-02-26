import React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  InputAdornment,
  Toolbar,
} from "@material-ui/core";
import Snackbar from "modules/compoenent/atomic/SnackBar";
import { makeStyles } from "@material-ui/core/styles";
import { LockRounded } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
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
  },
  paper: {
    display: "flex",
    flexDirection: "column",
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
}));

export default function SignIn() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    validationSchema: yup.object().shape({
      pwd: yup.string().required(),
      pwd1: yup.string().required(),
      pwd2: yup
        .string()
        .required()
        .oneOf([yup.ref("pwd2")], "กรุณากรอกรหัสให้เหมือนกัน")
        .required("กรุณากรอกรหัสผ่านใหม่"),
    }),
  });
  const dispatch = useDispatch();
  // const { message } = useSelector((state: any) => state.reset);
  const onSubmitData = (data: any) => {
    const predata = JSON.parse(
      `{"oldPassword":"${data.pwd}","newPassword":"${data.pwd1}"}`
    );
    const action = actions.loadPUT(predata);
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
      <CssBaseline />
      <Toolbar />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmitData)}>
          <Typography component="h1" variant="h5">
            เปลี่ยนรหัสผ่าน
          </Typography>
          <TextField
            fullWidth
            label="รหัสผ่านเดิม"
            type="password"
            name="pwd"
            variant="outlined"
            className={classes.textfield}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">
                  <LockRounded />
                </InputAdornment>
              ),
            }}
            inputRef={register}
            helperText={errors.pwd ? "กรอกรหัสผ่าน" : ""}
            error={!!errors.pwd}
          />

          <TextField
            variant="outlined"
            className={classes.textfield}
            fullWidth
            label="รหัสผ่านใหม่"
            name="pwd1"
            inputRef={register}
            helperText={errors.pwd1 ? "กรอกรหัสผ่าน" : ""}
            error={!!errors.pwd1}
            type="password"
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">
                  <LockRounded />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            className={classes.textfield}
            fullWidth
            id="input-with-icon-textfield"
            label="รหัสผ่านใหม่"
            name="pwd2"
            inputRef={register}
            helperText={errors.pwd2 ? "กรอกรหัสผ่าน" : ""}
            error={!!errors.pwd2}
            type="password"
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">
                  <LockRounded />
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" fullWidth className={classes.submit}>
            ส่งข้อมูล
          </Button>
        </form>
      </div>
    </Container>
  );
}
