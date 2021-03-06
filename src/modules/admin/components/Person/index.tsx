import React, { useEffect, useState } from "react";
import axios from "axios";
import { personProps } from "./tyscript";
import { useForm } from "react-hook-form";
import { Button, Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { getCookie } from "cookie/cookie";
import { parseJwt } from "utils/getDataJWT";
import * as actions from "../../actions";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "modules/compoenent/atomic/SnackBar";

const useStyles = makeStyles((theme) => ({
  root: { marginTop: "2rem", background: theme.palette.primary.light },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    margin: 10,
    color: "#132740",
  },
  submit: {
    background: "#ff533d",
    color: theme.palette.primary.light,
    margin: theme.spacing(3, 0, 2),
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
    margin: theme.spacing(1),

    padding: theme.spacing(1),
    "& .MuiFormHelperText-root.Mui-error ": {
      color: "ff533d",
      fontWeight: 600,
      borderWidth: "3px",
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderColor: "ff533d",
      borderWidth: "3px",
    },
    "& label.MuiFormLabel-root": {
      fontWeight: 600,
      "&:after .Mui-error": {
        borderColor: "#ff533d",
        borderWidth: "3px",
      },
    },
    "& label.Mui-focused": {
      color: "#132740",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ffae0c",
    },
    "& .MuiOutlinedInput-root": {
      borderWidth: "3px",
      "& fieldset": {
        borderColor: "#ffae0c",
        borderWidth: "2px",
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
        borderWidth: "3px",
      },
    },
  },
  box: {
    width: "100%",
    borderRadius: 10,
  },
  title: {
    fontWeight: 600,
    margin: 10,
  },
  image: {
    margin: 10,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  container: {
    background: theme.palette.primary.light,
    borderRadius: 10,
    padding: 10,
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [entries, setEntries] = useState<personProps[]>([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`/Platforms/${platformid}`);
        setEntries([response.data]);
      } catch (err) {
        console.log(err);
        setEntries([]);
      }
    };
    fetch();
    // eslint-disable-next-line
  }, []);

  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    validationSchema: yup.object().shape({
      identNo: yup.string().required(),
      title: yup.string().required(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      phone: yup.string().required(),
      email: yup.string().required().email(),
    }),
  });

  const token = getCookie("token");
  const platformid = parseJwt(token).unique_name;
  const dispatch = useDispatch();

  const submit = async (personInfo: object) => {
    const preInfo = {
      ...personInfo,
      id: entries[0]?.id,
      officialName: entries[0]?.officialName,
      abbreviation: entries[0]?.abbreviation,
      thumbnail: entries[0]?.thumbnail,
      link: entries[0]?.link,
      curriculum: entries[0]?.curriculum,
      course: entries[0]?.course,
    };
    const action = actions.putPerson(preInfo);
    dispatch(action);
  };
  const { message, severity } = useSelector((state: any) => state.admin);

  return (
    <div className={classes.root}>
      {entries.length !== 0 && (
        <Container component="main" maxWidth="xs" className={classes.container}>
          {message !== null && (
            <Snackbar
              message={message}
              open={message !== null ? true : false}
              severity={severity}
            />
          )}
          <Box>
            <Box className={classes.box}>
              <form className={classes.form} onSubmit={handleSubmit(submit)}>
                <CssBaseline />
                <div className={classes.paper}>
                  <Typography
                    component="h1"
                    variant="h5"
                    className={classes.title}
                  >
                    ข้อมูลส่วนบุคคล
                  </Typography>

                  <TextField
                    variant="outlined"
                    margin="normal"
                    className={classes.textfield}
                    InputProps={{
                      className: classes.input,
                    }}
                    name="identNo"
                    inputRef={register}
                    helperText={errors.identNo ? "เลขประจำตัวประชาชน" : ""}
                    error={!!errors.identNo}
                    fullWidth
                    label="เลขประจำตัวประชาชน"
                    autoComplete="identNo"
                    defaultValue={entries[0]?.identNo}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    className={classes.textfield}
                    InputProps={{
                      className: classes.input,
                    }}
                    name="title"
                    inputRef={register}
                    helperText={errors.title ? "กรุณากรอกคำนำหน้าชื่อ" : ""}
                    error={!!errors.title}
                    fullWidth
                    label="คำนำหน้าชื่อ"
                    defaultValue={entries[0]?.title}
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    className={classes.textfield}
                    InputProps={{
                      className: classes.input,
                    }}
                    name="firstName"
                    inputRef={register}
                    helperText={errors.firstName ? "กรุณากรอกชื่อ" : ""}
                    error={!!errors.firstName}
                    fullWidth
                    label="ชื่อ"
                    defaultValue={entries[0]?.firstName}
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    className={classes.textfield}
                    InputProps={{
                      className: classes.input,
                    }}
                    name="lastName"
                    inputRef={register}
                    helperText={errors.lastName ? "กรุณากรอกนามสกุล" : ""}
                    error={!!errors.lastName}
                    fullWidth
                    label="นามสกุล"
                    defaultValue={entries[0]?.lastName}
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    className={classes.textfield}
                    InputProps={{
                      className: classes.input,
                    }}
                    name="phone"
                    inputRef={register}
                    helperText={errors.phone ? "กรุณากรอกเบอร์โทร" : ""}
                    error={!!errors.phone}
                    fullWidth
                    label="เบอร์โทร"
                    defaultValue={entries[0]?.phone}
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    className={classes.textfield}
                    InputProps={{
                      className: classes.input,
                    }}
                    name="email"
                    inputRef={register}
                    helperText={errors.email ? "กรุณากรอกอีเมล" : ""}
                    error={!!errors.email}
                    fullWidth
                    label="อีเมล"
                    defaultValue={entries[0]?.email}
                    autoFocus
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                  >
                    ส่งข้อมูล
                  </Button>
                </div>
              </form>
            </Box>
          </Box>
        </Container>
      )}
    </div>
  );
}
