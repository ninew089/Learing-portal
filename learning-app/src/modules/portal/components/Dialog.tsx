import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function AlertDialog(props: any) {
  const { open, setOpen } = props
  const handleClose = () => {
    setOpen(false)
  }
  const handleAgree = () => {
    window.location.replace('http://www.google.com')
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'กำลังเข้าสู่ www.example.com ?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            คุณกำลังเข้าสู่ เว็บ example.com หากต้องการเข้าสู่เว็บไซต์นี้กดตกลง
            หากไม่ต้องการกดกลับ
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            กลับ
          </Button>
          <Button onClick={handleAgree} color="primary" autoFocus>
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
