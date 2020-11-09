import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { ListItem, Avatar } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import avatar from 'assets/images/user.svg'
import ScrollTo from 'react-scroll-into-view'

const useStyles = makeStyles({
  root: {
    background: '#0f1726',
    color: '#fdfdfd',
    width: '100%',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    background: '#0f1726',
  },
  navLink: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  button: {
    color: '#fdfdfd',
  },
})

type Anchor = 'right' | 'top' | 'bottom'

export default function TemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  const history = useHistory()
  const { path } = useRouteMatch()

  const login = useSelector((state: any) => state.login.Login)

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {login ? (
          <>
            <NavLink to={`${path}/login`} className={classes.navLink}>
              <ListItem button>
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src={avatar} />
                </ListItemIcon>
                <ListItemText primary={'นางสาวอนุสรา'} />
              </ListItem>
            </NavLink>
            <NavLink to={`${path}/edit`} className={classes.navLink}>
              <ListItem button>
                <ListItemText primary={'แก้ไขโปรไฟล์'} />
              </ListItem>
            </NavLink>
            <NavLink to={`${path}/reset`} className={classes.navLink}>
              <ListItem button>
                <ListItemText primary={'เปลี่ยนรหัสผ่าน'} />
              </ListItem>
            </NavLink>
            <NavLink to={`${path}/history`} className={classes.navLink}>
              <ListItem button>
                <ListItemText primary={'ประกาศนียบัตร'} />
              </ListItem>
            </NavLink>
            <Divider />
          </>
        ) : (
          <NavLink to={`${path}/login`} className={classes.navLink}>
            <ListItem button>
              <ListItemText primary={'เข้าสู่ระบบ'} />
            </ListItem>
          </NavLink>
        )}

        <NavLink to={`${path}`} className={classes.navLink}>
          <ListItem button>
            <ListItemText primary={'หน้าหลัก'} />
          </ListItem>
        </NavLink>
        <Divider />
        {login ? (
          <NavLink to={`${path}`} className={classes.navLink}>
            <ListItem button>
              <ListItemText primary={'ลงชื่อออก'} />
            </ListItem>
          </NavLink>
        ) : (
          ''
        )}
      </List>
    </div>
  )

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)} className={classes.button}>
        <AiOutlineMenu />
      </Button>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </div>
  )
}
