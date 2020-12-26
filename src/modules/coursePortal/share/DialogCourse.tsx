import React from 'react'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  makeStyles
} from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import {
  IconButton,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,
} from '@material-ui/core'
import { BsLink } from 'react-icons/bs'

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiPaper-root": {
      background: '#ffffff94',
      backdropFilter: 'blur(8px)',
      color: '#1b1a1a',

    }
  }
}));
const styles = (theme: Theme) =>
  createStyles({
    root: {
      zIndex:2,
      margin: 0,
      padding: theme.spacing(2),
      //background: '#182437',
      color: '#1b1a1a',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    subtitle: {
      color: '#1b1a1a',
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
    //background: '#182437',
    color: '#1b1a1a',
  },
}))(DialogContent)

const MuiDialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    //background: '#182437',
    color: '#1b1a1a',
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
  const classes=useStyles()
  return (
    <div>
      <Dialog
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        className={classes.root}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <MuiDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant="h6">ชื่อคอร์สเรียน</Typography>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <h3>เป้าหมายการเรียนรู้</h3>

          <Typography gutterBottom className={`color:'#90a0aa',fontWeigth:300`}>
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
          <Button autoFocus onClick={handleClose}>
            <BsLink size={24} style={{ color: '#1b1a1a' }} />
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  )
}
