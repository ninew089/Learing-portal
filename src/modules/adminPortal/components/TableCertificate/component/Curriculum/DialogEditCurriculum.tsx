import React, { useEffect } from "react";

import {
  createStyles,
  Theme,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import { formatDate } from "utils/dateFormat";
import CloseIcon from "@material-ui/icons/Close";
import Date from "../Dateedit";
import {
  Container,
  CssBaseline,
  FormControl,
  TextField,
  IconButton,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../../../actions";
import { DialogTitleProps } from "../typescript";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
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
    },
    container: {
      background: "white",
      borderRadius: "10px",
      padding: "10px",
    },
  })
);

const MuiDialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

const MuiDialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(DialogContent);

const MuiDialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(DialogActions);

export default function CustomizedDialogs({ open, setOpen, data }: any) {
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const { register, handleSubmit, errors, control } = useForm<any>({
    mode: "onChange",
    defaultValues: {
      startDate: data.startDate,
    },
    validationSchema: yup.object().shape({
      userId: yup.string().required(),
      title: yup.string().required(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      startDate: yup.string().required(),
      courseId: yup.number(),
      endDate: yup.string().required(),
      pass: yup
        .boolean()
        .required()
        .transform((_, val) => (val === "ผ่าน" ? true : false)),
      hour: yup
        .number()
        .moreThan(0, "จำนวนต้องมากกว่า 1 ")
        .nullable(true)
        .transform((_, val) => (val === "" ? null : parseInt(val))),
      note: yup.string().nullable(),
      satisfactionScore: yup
        .number()
        .moreThan(0, "คะแนนความพึงพอต้องอยู่ระหว่าง 1-5")
        .lessThan(6, "คะแนนความพึงพอต้องอยู่ระหว่าง 1-5")
        .nullable(true)
        .transform((_, val) => (val === "" ? null : parseInt(val))),
    }),
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const action = actions.getCurriculum();
    dispatch(action);

    // eslint-disable-next-line
  }, []);

  const { curriculum } = useSelector((state: any) => state.admin);
  const onSubmitData = handleSubmit((info) => {
    console.log(info);
    info.startDate = formatDate(info.startDate);
    info.endDate = formatDate(info.endDate);

    const action = actions.loadEditCurriculumCertificate(info, data.id);
    dispatch(action);
    handleClose();
  });

  return (
    <div>
      <Dialog
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <MuiDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant="h6">แก้ไข</Typography>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Container
            component="main"
            maxWidth="lg"
            className={classes.container}
          >
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                ประกาศนียบัตรหลักสูตร
              </Typography>
              <form className={classes.form} noValidate>
                <FormControl className={classes.formControlInfo} fullWidth>
                  <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="เลขประจำตัวประชาชน"
                    name="userId"
                    inputRef={register}
                    helperText={errors.userId ? "กรอกเลขประจำตัวประชน" : ""}
                    error={!!errors.userId}
                    defaultValue={data.userId}
                  />
                  <TextField
                    fullWidth
                    multiline
                    label="คำนำหน้าชื่อ"
                    name="title"
                    inputRef={register}
                    helperText={errors.title ? "กรอกคำนำหน้า" : ""}
                    error={!!errors.title}
                    defaultValue={data.title}
                  />
                  <TextField
                    fullWidth
                    multiline
                    label="ชื่อ"
                    name="firstName"
                    inputRef={register}
                    helperText={errors.firstName ? "กรอกชื่อ" : ""}
                    error={!!errors.firstName}
                    defaultValue={data.firstName}
                  />
                  <TextField
                    fullWidth
                    multiline
                    label="นามสกุล"
                    name="lastName"
                    inputRef={register}
                    helperText={errors.lastName ? "กรอกนามสกุล" : ""}
                    error={!!errors.lastName}
                    defaultValue={data.lastName}
                  />
                  <Controller
                    style={{ marginTop: 10 }}
                    as={
                      <TextField
                        variant="outlined"
                        label="รายวิชา"
                        select
                        error={!!errors.curriculumId}
                      >
                        {curriculum.map((categorie: any, index: number) => (
                          <MenuItem key={index} value={categorie.id}>
                            {categorie.code} {categorie.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    }
                    name="curriculumId"
                    rules={{ required: "กรุณาเลือกรายวิชา" }}
                    control={control}
                    defaultValue={data.curriculumId}
                  />

                  <Date
                    title="วันที่เปิดเรียน"
                    register={register}
                    name={"startDate"}
                    value={data.startDate}
                  />
                  <Date
                    title="วันที่สำเร็จการศึกษา"
                    register={register}
                    name={"endDate"}
                    value={data.endDate}
                  />

                  {!!errors.pass ? (
                    <label style={{ color: "red" }}> กรอกผลการศึกษา</label>
                  ) : (
                    <label> ผลการศึกษา</label>
                  )}
                  <Controller
                    as={
                      <RadioGroup aria-label="pass">
                        <FormControlLabel
                          value={"ผ่าน"}
                          control={<Radio />}
                          label="ผ่าน"
                        />
                        <FormControlLabel
                          value={"ไม่ผ่าน"}
                          control={<Radio />}
                          label="ไม่ผ่าน"
                        />
                      </RadioGroup>
                    }
                    name="pass"
                    control={control}
                    defaultValue={data.pass ? "ผ่าน" : "ไม่ผ่าน"}
                  />

                  <TextField
                    fullWidth
                    multiline
                    label="จำนวนชั่วโมง"
                    name="hour"
                    type="number"
                    inputRef={register}
                    helperText={errors.hour ? "กรอกจำนวนชั่วโมง" : ""}
                    error={!!errors.hour}
                    defaultValue={data.hour}
                  />

                  <TextField
                    fullWidth
                    multiline
                    label="หมายเหตุ"
                    name="note"
                    inputRef={register}
                    helperText={errors.note ? "กรอกหมายเหตุ" : ""}
                    error={!!errors.note}
                    defaultValue={data.note}
                  />
                  <TextField
                    fullWidth
                    multiline
                    label="คะแนนความพึงพอใจ"
                    name="satisfactionScore"
                    inputRef={register}
                    helperText={
                      errors.satisfactionScore
                        ? errors.satisfactionScore.message
                        : ""
                    }
                    error={!!errors.satisfactionScore}
                    defaultValue={data.satisfactionScore}
                  />
                </FormControl>
              </form>
            </div>
          </Container>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button color="primary" fullWidth onClick={onSubmitData}>
            ส่งข้อมูล
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}
