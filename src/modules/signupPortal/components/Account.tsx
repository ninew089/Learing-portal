import React from "react";
import {
  Typography,
  InputAdornment,
  Button,
  CssBaseline,
  TextField,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineIdcard } from "react-icons/ai";
import * as actions from "modules/infomation/actions";
import { useDispatch } from "react-redux";

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
  form: {
    marginTop: theme.spacing(4),
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    marginTop: "10px",
    background: theme.palette.secondary.main,
    borderRadius: 20,
    padding: 8,
    color: "#fdfdfd",
    "&:hover": {
      background: "#f9b122ab",
    },
  },
}));

export default function SignIn(props: any) {
  const classes = useStyles();
  const dispatch = useDispatch();
  //const [open, setOpen] = useState(false);
  const { formProps } = props;

  //const { message, severity } = useSelector((state: any) => state.infomation);
  const onPresence = () => {
    const value = formProps.getValues("id");
    const action = actions.loadPresence(value);
    dispatch(action);
  };

  return (
    <>
      <CssBaseline />
      {/*
      {message !== null && <Snackbar
        message={message
        }
        open={message !== null ? true : false}
        setOpen={setOpen}
        severity={severity}
      />}
*/}
      <form className={classes.form} noValidate>
        <FormControl className={classes.formControlInfo} fullWidth>
          <Typography component="h1" variant="h5" align="center">
            ลงทะเบียนเข้ารับการอบรมออนไลน์
          </Typography>
          <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="เลขประจำตัวประชาชน"
            name="id"
            inputRef={formProps.register}
            helperText={formProps.errors.id ? formProps.errors.id.message : ""}
            error={!!formProps.errors.id}
            variant="outlined"
            className={classes.textfield}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">
                  <AiOutlineIdcard size={24} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="รหัสผ่าน"
            name="password"
            inputRef={formProps.register}
            helperText={
              formProps.errors.password ? formProps.errors.password.message : ""
            }
            error={!!formProps.errors.password}
            type="password"
            variant="outlined"
            className={classes.textfield}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">
                  <RiLockPasswordLine size={24} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="ยืนยันรหัสผ่าน"
            name="comfirmpassword"
            inputRef={formProps.register}
            helperText={
              formProps.errors.comfirmpassword
                ? formProps.errors.comfirmpassword.message
                : ""
            }
            error={!!formProps.errors.comfirmpassword}
            type="password"
            variant="outlined"
            className={classes.textfield}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">
                  <RiLockPasswordLine size={24} />
                </InputAdornment>
              ),
            }}
          />

          <Button fullWidth className={classes.submit} onClick={onPresence}>
            ตรวจสอบว่ามีผู้ใช้หรือไม่
          </Button>
        </FormControl>
      </form>
    </>
  );
}
