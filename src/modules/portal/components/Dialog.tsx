import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog(props: any) {
  const { open, setOpen, data, classes } = props;
  const handleClose = () => {
    setOpen(false);
  };
  const handleAgree = () => {
    if (data !== null) {
      window.open(`${data.link}`, "_blank");
      setOpen(false);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`กำลังเข้าสู่แพลตฟอร์มการเรียนรู้ ${
            data ? data.officialName : "กำลังโหลดข้อมูล"
          }`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`คุณกำลังเข้าสู่  ${data ? data.link : ""}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            กลับ
          </Button>
          <Button
            onClick={handleAgree}
            color="primary"
            variant="contained"
            autoFocus
            className={classes.button}
          >
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
