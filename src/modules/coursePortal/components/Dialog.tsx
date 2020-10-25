import React from 'react'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'

import CloseIcon from '@material-ui/icons/Close'

import {
  Grid,
  IconButton,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,
} from '@material-ui/core'

import { BsLink } from 'react-icons/bs'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  })

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
}

const MuiDialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props
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
  )
})

const MuiDialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(DialogContent)

const MuiDialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(DialogActions)

export interface CustomizedDialogsProps {
  open: boolean
  setOpen: any
}

export default function CustomizedDialogs({
  open,
  setOpen,
}: CustomizedDialogsProps) {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <MuiDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant="h6">ชื่อคอร์สเรียน</Typography>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Grid container dir="row">
            <Grid item xs={12}></Grid>
          </Grid>
          <h3>เป้าหมายการเรียนรู้</h3>

          <Typography gutterBottom>
            เข้าใจหลักการต่างๆของระบบ โครงสร้าง เเละการบริหารจัดการ
            เพื่อเพิ่มประสิทฑิภาพการทำงานเเละ การจัดระบบทรัพยากร และ
            เพื่อเสริมสร้างความรู้ความเข้าใจให้เกิดประโยชน์สูงสุดให้เท่าทันยุคสมัยปัจจุบัน
          </Typography>
          <h3>ประเด็นการเรียนรู้</h3>

          <Typography gutterBottom>
            1. เพื่อเสริมสร้างความรู้ความเข้าใจ
            <br />
            2. เพื่อเพิ่มประสิทฑิภาพการทำงานเเละ การจัดระบบทรัพยากร
          </Typography>
          <h3>กลุ่มเป้าหมาย</h3>

          <Typography gutterBottom>ข้าราชการระดับความชำนาญขึ้นไป</Typography>
          <h3>วิธีการประเมินผล</h3>

          <Typography gutterBottom>
            เข้าเรียนมากกว่า 30 ชั่วโมงและมี คะแนนมากกว่า 80%
          </Typography>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            <BsLink size={24} />
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  )
}
