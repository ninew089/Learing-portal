import React, { useEffect } from "react";

import {
  createStyles,
  Theme,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import { formatDate } from "utils/dateFormat";
import CloseIcon from "@material-ui/icons/Close";
import Date from "../Date";
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
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../../../actions";
import { DialogTitleProps, DialogsProps } from "../typescript";

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

export default function CustomizedDialogs({ open, setOpen }: DialogsProps) {
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const { register, handleSubmit, errors, control } = useForm<any>({
    mode: "onChange",
    validationSchema: yup.object().shape({
      userId: yup.string().required(),
      title: yup.string().required(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      startDate: yup.string().required(),
      curriculumId: yup.number().required("กรุณาเลือกหลักสูตร"),
      endDate: yup.string().required(),
      hour: yup
        .number()
        .moreThan(0, "จำนวนต้องมากกว่า 1 ")
        .nullable(true)
        .transform((_, val) => (val === "" ? null : parseInt(val))),
      grade: yup
        .string()
        .nullable(true)
        .transform((_, val) => (val === "" ? null : val)),
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
    info.startDate = formatDate(info.startDate);
    info.endDate = formatDate(info.endDate);

    const action = actions.loadAddCurriculumCertificate(info);
    dispatch(action);
    handleClose();
    /*
        const infoData = {
          code: code, name: name, learningTopic: learningTopic, learningObjective: learningObjective,
          assessment: assessment, targetGroup: targetGroup, thumbnail: thumbnail,
          link: link, courseCategoryId: parseInt(courseCategoryId)
        }
       const actionCourse = actionsCourse.loadAddCourse(info)
        dispatch(actionCourse)
        handleClose()
    */
  });
  /*
    
  */
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
          <Typography variant="h6">เพิ่ม</Typography>
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
                  />
                  <TextField
                    fullWidth
                    multiline
                    label="คำนำหน้าชื่อ"
                    name="title"
                    inputRef={register}
                    helperText={errors.title ? "กรอกคำนำหน้า" : ""}
                    error={!!errors.title}
                  />
                  <TextField
                    fullWidth
                    multiline
                    label="ชื่อ"
                    name="firstName"
                    inputRef={register}
                    helperText={errors.firstName ? "กรอกชื่อ" : ""}
                    error={!!errors.firstName}
                  />
                  <TextField
                    fullWidth
                    multiline
                    label="นามสกุล"
                    name="lastName"
                    inputRef={register}
                    helperText={errors.lastName ? "กรอกนามสกุล" : ""}
                    error={!!errors.lastName}
                  />
                  <Controller
                    style={{ marginTop: 10 }}
                    as={
                      <TextField
                        variant="outlined"
                        label="หลักสูตร"
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
                    defaultValue=""
                  />

                  <Date
                    title="วันที่เปิดเรียน"
                    register={register}
                    name={"startDate"}
                  />
                  <Date
                    title="วันที่สำเร็จการศึกษา"
                    register={register}
                    name={"endDate"}
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
                  />
                  <TextField
                    fullWidth
                    multiline
                    label="เกรด"
                    name="grade"
                    inputRef={register}
                    helperText={errors.grade ? "กรอกคะแนน" : ""}
                    error={!!errors.grade}
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
