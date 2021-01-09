import React, { useEffect, useState } from "react";

import {
  createStyles,
  Theme,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";

import Search from "./SearchCourse"

import {
  Container,
  CssBaseline,
  IconButton,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,

} from "@material-ui/core";


import { useDispatch } from 'react-redux'
import * as actions from "modules/coursePortal/actions"
import * as actionsCourse from "../../actions"
import { openProps, DialogTitleProps } from "./typescript"

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

export default function CustomizedDialogs({
  open,
  setOpen,
  valueCurriculun

}: openProps) {
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {

    const action = actions.loadCourseCategory()
    dispatch(action)

    // eslint-disable-next-line
  }, [])

  const [value, setValue] = useState()
  const onSubmitData = () => {

    const actionCourse = actionsCourse.loadAddSubCurriculums(valueCurriculun, value)
    dispatch(actionCourse)



  };
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
          <Typography variant="h6">เพิ่มรายวิชาในหลักสูตร</Typography>
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
              <Search setValue={setValue} />
            </div>
          </Container>
        </MuiDialogContent>
        <MuiDialogActions>
          {value !== undefined &&
            <Button color="primary" fullWidth onClick={onSubmitData}>
              ส่งข้อมูล
          </Button>
          }
        </MuiDialogActions>

      </Dialog>
    </div>
  );
}
