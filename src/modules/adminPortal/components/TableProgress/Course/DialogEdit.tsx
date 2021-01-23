import React, { useEffect } from "react";

import {
  createStyles,
  Theme,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import { formatDate } from "utils/dateFormat"
import CloseIcon from "@material-ui/icons/Close";
import Date from "../component/Dateedit"
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
  MenuItem
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { useSelector, useDispatch } from 'react-redux'

import * as actions from "../../../actions"
import { DialogTitleProps } from "../typescript"

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
      startDate: data.startDate

    },
    validationSchema: yup.object().shape({
      userId: yup.string().required(),
      title: yup.string().required(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      startDate: yup.string().required(),
      courseId: yup.number(),
      percent: yup.number().moreThan(-1, "ต้องมากกว่า 0 ").lessThan(101, "ต้องน้อยกว่า 100").nullable(true).transform((_, val) => val === "" ? null : parseInt(val)),
    }),
  });
  const dispatch = useDispatch();
  useEffect(() => {

    const action = actions.getCourse()
    dispatch(action)

    // eslint-disable-next-line
  }, [])

  const { course } = useSelector((state: any) => state.admin);
  const onSubmitData = handleSubmit((info) => {
    console.log(info)
    info.startDate = formatDate(info.startDate)
    const action = actions.loadEditProgress(info, data.id)
    dispatch(action)
    handleClose()

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
                ความก้าวหน้ารายวิชา
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
                    defaultValue={data.lastname}
                  />
                  <Controller
                    style={{ marginTop: 10 }}
                    as={
                      <TextField
                        variant="outlined"
                        label="รายวิชา"
                        select
                        helperText={
                          errors.courseCategoryId && errors.courseCategoryId.message
                        }
                        error={!!errors.courseCategoryId}
                      >
                        {course.map((categorie: any, index: number) => (
                          <MenuItem
                            key={index}
                            value={categorie.id}
                          >
                            {categorie.code}
                          </MenuItem>
                        ))}
                      </TextField>
                    }
                    name="courseId"
                    rules={{ required: "กรุณาเลือกรายวิชา" }}
                    control={control}
                    defaultValue={data.courseId}
                  />

                  <Date title="วันที่เปิดเรียน" register={register} name={"startDate"} value={data.startDate} />
                  <TextField
                    fullWidth
                    multiline
                    label="เปอร์เซ็นความก้าวหน้า"
                    name="percent"
                    type="number"
                    inputRef={register}
                    helperText={errors.percent ? errors.percent.message : ""}
                    error={!!errors.percent}
                    defaultValue={data.percent}
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
