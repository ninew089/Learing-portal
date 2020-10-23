import React from 'react'
import {IconButton} from '@material-ui/core'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { Grow, Hidden } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import {
  AiOutlineUp,
  AiOutlineDown,
  AiOutlineFolderOpen,
  AiOutlineLogout,
  AiOutlineEdit,
} from 'react-icons/ai'
import { CgPassword } from 'react-icons/cg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(0),
    },
    icon: {
padding:0,
      color: '#FDFDFD',
    },
    popper: {
      marginTop: 20,
    },
    icons: {
      marginRight: 18,
    },
  }),
)

export default function MenuListComposition() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)
  const history = useHistory()
  const path = '/learning-portal'
  const navigatorToeditProfile = () => {
    history.push(`${path}/edit`)
  }
  const navigatorToreset = () => {
    history.push(`${path}/reset`)
  }
  const navigatorTohistory = () => {
    history.push(`${path}/history`)
  }
  const navigatorTologout = () => {
    history.push(`${path}`)
  }
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
    
  }, [open])

  return (
    <div className={classes.root}>
      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <AiOutlineDown size={16} className={classes.icon} />
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          className={classes.popper}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}  
            >
                 
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                    <Hidden smUp>
                      <MenuItem className={classes.icons}>
                        อนุสรา จำปาดี 
                      </MenuItem>
                    </Hidden>

                    <MenuItem onClick={navigatorToeditProfile}>
                      <AiOutlineEdit className={classes.icons} />
                      แก้ไขโปรไฟล์ 
                    </MenuItem>
                    <MenuItem onClick={navigatorToreset}>
                      <CgPassword className={classes.icons} />
                      เปลี่ยนรหัสผ่าน
                    </MenuItem>
                    <MenuItem onClick={navigatorTohistory}>
                      <AiOutlineFolderOpen className={classes.icons} />
                      ประกาศนียบัตร
                    </MenuItem>
                    <MenuItem onClick={navigatorTologout}>
                      <AiOutlineLogout className={classes.icons} />
                      ลงชื่อออก
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  )
}
