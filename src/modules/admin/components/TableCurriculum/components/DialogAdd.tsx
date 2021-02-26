import React, { useEffect } from "react";

import {
  createStyles,
  Theme,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";

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
} from "@material-ui/core";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import * as actions from "modules/course/actions";
import * as actionsCourse from "../../../actions";
import { couresProps, openProps, DialogTitleProps } from "../typescript";

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

export default function CustomizedDialogs({ open, setOpen }: openProps) {
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm<couresProps>({
    mode: "onChange",

    validationSchema: yup.object().shape({
      code: yup.string().required(),
      name: yup.string().required(),
      learningTopic: yup.string().required(),
      learningObjective: yup.string().required(),
      assessment: yup.string().required(),
      targetGroup: yup.string().required(),
      thumbnail: yup.string().required(),
      link: yup.string().required(),
    }),
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const action = actions.loadCourseCategory();
    dispatch(action);
    // eslint-disable-next-line
  }, []);

  const onSubmitData = handleSubmit(
    ({
      code,
      name,
      learningTopic,
      learningObjective,
      assessment,
      targetGroup,
      thumbnail,
      link,
      courseCategoryId,
      isShown,
    }) => {
      const infoData = {
        code: code,
        name: name,
        learningTopic: learningTopic,
        learningObjective: learningObjective,
        assessment: assessment,
        targetGroup: targetGroup,
        thumbnail: thumbnail,
        link: link,
      };

      const actionCourse = actionsCourse.loadAddCurriculums(infoData);
      dispatch(actionCourse);
      handleClose();
    }
  );
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
          <Typography variant="h6">เพิ่มข้อมูลหลักสูตร</Typography>
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
                ข้อมูลรายวิชา
              </Typography>
              <form className={classes.form} noValidate>
                <FormControl className={classes.formControlInfo} fullWidth>
                  <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="รหัสหลักสูตร"
                    name="code"
                    inputRef={register}
                    helperText={errors.code ? "กรอกหลักสูตร" : ""}
                    error={!!errors.code}
                  />

                  <TextField
                    fullWidth
                    multiline
                    id="input-with-icon-textfield"
                    label="ชื่อหลักสูตร"
                    name="name"
                    inputRef={register}
                    helperText={errors.name ? "กรอกชื่อหลักสูตร" : ""}
                    error={!!errors.name}
                  />

                  <TextField
                    fullWidth
                    multiline
                    id="input-with-icon-textfield"
                    label="กลุ่มเป้าหมาย"
                    name="targetGroup"
                    inputRef={register}
                    helperText={errors.targetGroup ? "กรอกกลุ่มเป้าหมาย" : ""}
                    error={!!errors.targetGroup}
                  />

                  <TextField
                    fullWidth
                    multiline
                    id="input-with-icon-textfield"
                    label="เป้าหมายการเรียนรู้"
                    name="learningObjective"
                    inputRef={register}
                    helperText={
                      errors.learningObjective ? "กรอกเป้าหมายการเรียนรู้" : ""
                    }
                    error={!!errors.learningObjective}
                  />
                  <TextField
                    fullWidth
                    multiline
                    id="input-with-icon-textfield"
                    label="ประเด็นการเรียนรู้"
                    name="learningTopic"
                    inputRef={register}
                    helperText={
                      errors.learningTopic ? "กรอกประเด็นการเรียนรู้" : ""
                    }
                    error={!!errors.learningTopic}
                  />
                  <TextField
                    fullWidth
                    multiline
                    id="input-with-icon-textfield"
                    label="วิธีการประเมิน"
                    name="assessment"
                    inputRef={register}
                    helperText={errors.assessment ? "กรอกวิธีการประเมิน" : ""}
                    error={!!errors.assessment}
                  />
                  <TextField
                    fullWidth
                    multiline
                    id="URL รูปThumbnail"
                    label="URL รูปThumbnail"
                    name="thumbnail"
                    inputRef={register}
                    helperText={errors.thumbnail ? "กรอกรูปThumbnail" : ""}
                    error={!!errors.thumbnail}
                  />
                  <TextField
                    fullWidth
                    multiline
                    id="URL ของหลักสูตร"
                    label="URL ของหลักสูตร"
                    name="link"
                    inputRef={register}
                    helperText={errors.link ? "กรอกรูปThumbnail" : ""}
                    error={!!errors.link}
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
