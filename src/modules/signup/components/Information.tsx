import React, { useEffect } from "react";

import { DateTh } from "modules/compoenent/atomic/DatePicker";
import { Controller } from "react-hook-form";
import {
  Typography,
  MenuItem,
  FormControl,
  CssBaseline,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "modules/infomation/actions";
import { useDispatch, useSelector } from "react-redux";

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
  selectInput: {
    "& .MuiInputBase-root.MuiOutlineInput-root": {
      color: "#45A29E",
      borderColor: "#757575",
      fontWeight: 600,
    },
  },
  input: {
    "& .MuiInputBase-root.MuiOutlineInput-root": {
      color: "#45A29E",
      borderColor: "#757575",
      fontWeight: 600,
    },
  },
  textfield: {
    marginTop: 10,
  },
  form: {
    marginTop: theme.spacing(4),
    width: "100%", // Fix IE 11 issue.
  },
}));

export default function SignIn(props: any) {
  const classes = useStyles();

  const { formProps } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    const action = actions.loadEducation();
    dispatch(action);
    // eslint-disable-next-line
  }, []);
  const { educations } = useSelector((state: any) => state.infomation);

  return (
    <>
      <CssBaseline />

      <div className={classes.form}>
        <Typography component="h1" variant="h5" align="center">
          ข้อมูลส่วนบุคคล
        </Typography>
        <FormControl className={classes.formControlInfo} fullWidth>
          <TextField
            fullWidth
            label="คำนำหน้าชื่อ"
            name="title"
            variant="outlined"
            className={classes.textfield}
            InputProps={{
              className: classes.input,
            }}
            inputRef={formProps.register}
            helperText={
              formProps.errors.title && formProps.errors.title.message
            }
            error={!!formProps.errors.title}
          />
          <TextField
            fullWidth
            label="ชื่อ"
            name="name"
            inputRef={formProps.register}
            variant="outlined"
            className={classes.textfield}
            InputProps={{
              className: classes.input,
            }}
            helperText={formProps.errors.name && formProps.errors.name.message}
            error={!!formProps.errors.name}
          />
          <TextField
            fullWidth
            label="นามสกุล"
            name="lastname"
            inputRef={formProps.register}
            variant="outlined"
            className={classes.textfield}
            InputProps={{
              className: classes.input,
            }}
            helperText={
              formProps.errors.lastname && formProps.errors.lastname.message
            }
            error={!!formProps.errors.lastname}
          />
        </FormControl>

        <div className={classes.formControlDate}>
          <DateTh
            title={"ปีเกิด"}
            register={formProps.register}
            name={"birthyear"}
          />
        </div>
        {/*@ts-ignore*/}
        <div className={classes.formControlDate}>
          <Controller
            as={
              <TextField
                variant="outlined"
                fullWidth
                className={classes.textfield}
                label="เพศ"
                InputLabelProps={{
                  className: classes.selectInput,
                }}
                select
                helperText={
                  formProps.errors.gender && formProps.errors.gender.message
                }
                error={!!formProps.errors.gender}
              >
                {" "}
                <MenuItem value={"m"}>ชาย</MenuItem>
                <MenuItem value={"f"}>หญิง</MenuItem>
              </TextField>
            }
            name="gender"
            rules={{ required: "กรุณาเลือกเพศ" }}
            control={formProps.control}
            defaultValue=""
          />
        </div>
        <div className={classes.formControlDate}>
          <Controller
            as={
              <TextField
                variant="outlined"
                fullWidth
                className={classes.textfield}
                label="ระดับการศึกษา"
                InputLabelProps={{
                  className: classes.selectInput,
                }}
                select
                helperText={
                  formProps.errors.educationid &&
                  formProps.errors.educationid.message
                }
                error={!!formProps.errors.educationid}
              >
                {educations.map((education: any, index: number) => (
                  <MenuItem key={index} value={education.id}>
                    {education.name}
                  </MenuItem>
                ))}
              </TextField>
            }
            name="educationid"
            rules={{ required: "กรุณาเลือกระดับการศึกษา" }}
            control={formProps.control}
            defaultValue=""
          />
        </div>

        <FormControl className={classes.formControlInfo} fullWidth>
          <TextField
            fullWidth
            label="อีเมล"
            name="email"
            inputRef={formProps.register}
            variant="outlined"
            className={classes.textfield}
            InputProps={{
              className: classes.input,
            }}
            helperText={
              formProps.errors.email && formProps.errors.email.message
            }
            error={!!formProps.errors.email}
          />
        </FormControl>
      </div>
    </>
  );
}
