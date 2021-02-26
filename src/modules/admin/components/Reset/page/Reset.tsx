import React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  InputAdornment,
} from "@material-ui/core";
import { resetPasswordProps } from "../tyscript";
import { makeStyles } from "@material-ui/core/styles";
import { Lock } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../actions";

import Snackbar from "modules/compoenent/atomic/SnackBar/SnackBar";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  margin: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  container: {
    borderRadius: "10px",
    padding: "10px",
  },
  submit: {
    marginTop: "10px",
  },
}));
export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<resetPasswordProps>({
    mode: "onChange",
    validationSchema: yup.object().shape({
      oldPassword: yup.string().required(),
      newPassword: yup.string().required(),
      pwd2: yup
        .string()
        .required()
        .oneOf([yup.ref("newPassword")], "กรุณากรอกรหัสให้เหมือนกัน")
        .required("กรุณากรอกรหัสผ่าน ( 2 )"),
    }),
  });

  const onSubmitData = handleSubmit(({ oldPassword, newPassword }) => {
    const info = { oldPassword: oldPassword, newPassword: newPassword };
    const action = actions.loadPassword(info);
    dispatch(action);
  });
  const { message, severity } = useSelector((state: any) => state.admin);

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      {message !== null && (
        <Snackbar
          message={message}
          open={message !== null ? true : false}
          severity={severity}
        />
      )}
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          เปลี่ยนรหัสผ่าน
        </Typography>
        <form className={classes.form} onSubmit={onSubmitData}>
          <TextField
            className={classes.margin}
            fullWidth
            label="รหัสผ่านเดิม"
            type="password"
            name="oldPassword"
            inputRef={register}
            helperText={errors.oldPassword ? "กรอกรหัสผ่าน" : ""}
            error={!!errors.oldPassword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            className={classes.margin}
            fullWidth
            label="รหัสผ่าน (1)"
            name="newPassword"
            inputRef={register}
            helperText={errors.newPassword ? "กรอกรหัสผ่าน" : ""}
            error={!!errors.newPassword}
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            className={classes.margin}
            fullWidth
            id="input-with-icon-textfield"
            label="รหัสผ่าน (2)"
            name="pwd2"
            inputRef={register}
            helperText={errors.pwd2 ? "กรอกรหัสผ่าน" : ""}
            error={!!errors.pwd2}
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            className={classes.submit}
            variant="outlined"
          >
            ส่งข้อมูล
          </Button>
        </form>
      </div>
    </Container>
  );
}
