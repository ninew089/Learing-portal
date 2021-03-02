import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
export default function AlertDialog(props: any) {
  const { open, setOpen, data } = props;
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
          {`กำลังเข้าสู่แพล็ตฟอร์มการเรียนรู้ ${
            data ? data.officialName : "กำลังโหลดข้อมูล"
          }`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`คุณกำลังเข้าสู่ เว็บ ${
              data ? data.link : ""
            } หากต้องการเข้าสู่เว็บไซต์นี้กดตกลงหากไม่ต้องการกดกลับ`}
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
          >
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
