import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "modules/compoenent/atomic/Alert";
import img from "assets/images/welearn_logo.webp";
import {
  Visibility,
  VisibilityOff,
  Lock,
  AccountCircle,
} from "@material-ui/icons";
import {
  Container,
  InputAdornment,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Toolbar,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import * as actions from "../actions";

import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#0f1626",
    fontWeight: 700,
    letterSpacing: 1,
    "& .MuiInputBase-root.MuiOutlineInput-root": {
      color: "#45A29E",
      borderColor: "#757575",
      fontWeight: 700,
    },
  },
  textfield: {
    marginTop: 10,
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),

    backgroundColor: theme.palette.secondary.main,
  },

  submit: {
    marginTop: "10px",
    background: "#ff533dcf",
    borderRadius: 20,
    margin: 4,
    padding: 8,
    color: "#fdfdfd",
    "&:hover": {
      background: "#ff533d",
    },
  },
  etda: {
    marginTop: "10px",
    background: "#4d74bbba",
    borderRadius: 20,
    padding: 8,
    color: "#fdfdfd",
    "&:hover": {
      background: "#4d74bb",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
  },

  border: {
    borderBottom: "1px solid darkgray",
    width: "100%",
  },

  content: {
    padding: " 0 10px 0 10px",
  },
  divider: {
    marginTop: "20px",
  },
  textdivider: {
    color: "royalblue",
  },
  nav: {
    color: "inherit",
    textDecoration: "inherit",
  },
  form: {
    // background: "white",
    borderRadius: "10px",
    height: "100%",
    marginTop: "20px",
  },
  font: {
    fontWeight: 600,
    color: "#0f1726",
  },
  image: {
    margin: 10,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  messageLogin: {
    fontWeight: 600,
    fontSize: 14,
    margin: 2,
  },
  warring: {
    color: "red",
    textAlign: "center",
    margin: 8,
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    validationSchema: yup.object().shape({
      userId: yup
        .string()
        .required("กรุณากรอกเลขประจำตัวประจำตัวประชาชน")
        .matches(/^[0-9]{13}$/, "กรุณากรอกเป็นตัวเลข 13 หลัก")
        .test(
          "ตรวจสอบรหัสบัตรประชาชน",
          "กรอกเลขประจำตัวประชาชนผิด กรุณากรอกใหม่",

          function (item: any) {
            var i, sum;
            for (i = 0, sum = 0; i < 12; i++)
              sum += parseFloat(item.charAt(i)) * (13 - i);
            if ((11 - (sum % 11)) % 10 !== parseFloat(item.charAt(12))) {
              return false;
            }
            return true;
          }
        ),
      password: yup.string().required(),
    }),
  });

  const { messageLogin } = useSelector((state: any) => state.login);
  const onLogin = (loginInfo: object) => {
    const info = { ...loginInfo, role: "user" };
    const actionLogin = actions.loadLogin(info);
    dispatch(actionLogin);
  };
  const [visible, setVisible] = useState(true);
  function randomState(length: any) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /*use this function when click the button "sign in with EDTA Connect"*/
  function redirect() {
    var res = "response_type=code";
    var clientId = "&client_id=105c7cf7-a02d-48aa-84ba-1a861633ea7a";
    var uri = "&redirect_uri=https://welearn.ocsc.go.th/etda/callback.html";
    var scope = "&scope=openid%20profile";
    var state = "&state=";
    var random = randomState(11);
    var prompt = "&prompt=login%20consent";

    document.cookie = "state=" + random;
    window.open(
      "https://proxy1.auth.teda.th/proxy/v1/list.htm?" +
        res +
        clientId +
        uri +
        scope +
        state +
        random +
        prompt
    );
  }

  const handleClose = () => {
    const action = actions.clearMessageLogin();
    dispatch(action);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Toolbar />
      <div className={classes.form}>
        <CssBaseline />
        <div className={classes.paper}>
          <img alt="banner" src={img} className={classes.image} />
          <Typography component="h1" variant="h5" className={classes.font}>
            OCSC Learning Portal
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              label="เลขประจำตัวประชาชน"
              name="userId"
              inputRef={register}
              variant="outlined"
              className={classes.textfield}
              InputProps={{
                className: classes.input,
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              fullWidth
              helperText={errors.userId ? "กรุณากรอกรหัสผู้ใช้" : ""}
              error={!!errors.userId}
            />
            <TextField
              className={classes.textfield}
              label="รหัสผ่าน"
              type={visible ? "password" : "string"}
              name="password"
              autoComplete="on"
              inputRef={register}
              fullWidth
              variant="outlined"
              helperText={errors.password ? "กรุณากรอกรหัสผ่าน" : ""}
              error={!!errors.password}
              InputProps={{
                className: classes.input,
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <Button
                    style={{ borderRadius: 100 }}
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? <Visibility /> : <VisibilityOff />}
                  </Button>
                ),
              }}
            />

            {messageLogin && (
              <Alert
                text={messageLogin}
                severity={"error"}
                handleClose={handleClose}
              />
            )}
            <Button
              type="submit"
              fullWidth
              className={classes.submit}
              onClick={handleSubmit(onLogin)}
            >
              เข้าสู่ระบบ
            </Button>

            <Grid container>
              <Grid item xs>
                <NavLink
                  id="router-forgot"
                  to="/learning-portal/forget"
                  className={classes.nav}
                >
                  ลืมรหัสผ่าน?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink
                  id="router-signup"
                  to="/learning-portal/signup"
                  className={classes.nav}
                >
                  สมัครสมาชิก
                </NavLink>
              </Grid>
            </Grid>
            <div className={classes.container}>
              <div className={classes.border} />
              <span className={classes.content}>
                <h3 className={classes.textdivider}>OR</h3>
              </span>
              <div className={classes.border} />
            </div>

            <Button fullWidth className={classes.etda} onClick={redirect}>
              LOGIN WITH ETDA CONNECT
            </Button>
            <div className={classes.warring}>
              ต้องสมัครสมาชิกก่อนใช้งาน ETDA CONNECT
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
