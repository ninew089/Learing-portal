import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import * as actions from "../../actions";
import { useDispatch } from "react-redux";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "inline-flex",
    },
    title: {
      fontWeight: 700,
      marginRight: 10,
      color: "#222",
    },
  })
);
export default function ResponsiveDialog({
  open,
  setOpen,
  data,
}: {
  open: boolean;
  setOpen: any;
  data: any;
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    const action = actions.loadSignUp(data);
    dispatch(action);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" style={{ fontWeight: 400 }}>
          <Grid container alignItems="center">
            <ChatBubbleOutlineIcon style={{ marginRight: 10 }} />{" "}
            ยืนยันการสมัครสมาชิก
          </Grid>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className={classes.container}>
              <div className={classes.title}>ชื่อ: </div>
              {data.title}
              {data.firstname}
            </div>
          </DialogContentText>
          <DialogContentText>
            <div className={classes.container}>
              <div className={classes.title}>นามสกุล:</div>
              {data.lastname}
            </div>
          </DialogContentText>
          <DialogContentText>
            <div className={classes.container}>
              <div className={classes.title}> เลขที่บัตรประชาชน: </div>
              {data.id}
            </div>
          </DialogContentText>
          <DialogContentText>
            <div className={classes.container}>
              <div className={classes.title}>ปีเกิด: </div>
              {data.birthyear}
            </div>
          </DialogContentText>
          <DialogContentText>
            <div className={classes.container}>
              <div className={classes.title}>อีเมล:</div>
              {data.email}
            </div>
          </DialogContentText>
          <DialogContentText>
            <Alert severity={"warning"}>โปรดตรวจสอบข้อมูลให้ถูกต้อง</Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            color="inherit"
            style={{ color: "#d0473f" }}
            variant="text"
          >
            แก้ไขข้อมูล
          </Button>
          <Button
            onClick={handleSubmit}
            style={{ background: "#009829", color: "white" }}
            autoFocus
            variant="contained"
          >
            ยืนยัน
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
