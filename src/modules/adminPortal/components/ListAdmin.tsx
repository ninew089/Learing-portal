import React from 'react'

import {
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineAudit,
  AiOutlineFolderOpen,
  AiOutlineLogout,
} from 'react-icons/ai'
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { CgPassword } from 'react-icons/cg'

const useStyles = makeStyles({
  nav: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
})

export default function PersistentDrawerLeft() {
  const classes = useStyles()
  return (
    <div>
      <List>
        <ListItem key={'Admin'}>
          <ListItemIcon>
            <AiOutlineUser size={24} />
          </ListItemIcon>
          <ListItemText primary={'นาย กกกก ขขขข'} />
        </ListItem>

        <ListItem key={'mooc'}>
          <ListItemText primary={'สำนักงาน ก.พ.'} />
        </ListItem>
      </List>

      <Divider />
      <List>
        <NavLink to="/learning-portal/admins/main" className={classes.nav}>
          <ListItem button key={'Main'}>
            <ListItemIcon>
              <AiOutlineAudit size={24} />
            </ListItemIcon>
            <ListItemText primary={'หน้าหลัก'} />
          </ListItem>
        </NavLink>
        <NavLink
          to="/learning-portal/admins/main/course"
          className={classes.nav}
        >
          <ListItem button key={'รายวิชา'}>
            <ListItemIcon>
              <AiOutlineFolderOpen size={24} />
            </ListItemIcon>
            <ListItemText primary={'รายวิชา'} />
          </ListItem>
        </NavLink>
        <NavLink
          to="/learning-portal/admins/main/curriculm"
          className={classes.nav}
        >
          <ListItem button key={'หลักสูตร'}>
            <ListItemIcon>
              <AiOutlineFolderOpen size={24} />
            </ListItemIcon>
            <ListItemText primary={'หลักสูตร'} />
          </ListItem>
        </NavLink>
        <NavLink
          to="/learning-portal/admins/main/subcurriculum"
          className={classes.nav}
        >
          <ListItem button>
            <ListItemIcon>
              <AiOutlineFolderOpen size={24} />
            </ListItemIcon>
            <ListItemText primary={'รายวิชาในหลักสูตร'} />
          </ListItem>
        </NavLink>
        <NavLink
          to="/learning-portal/admins/main/progress"
          className={classes.nav}
        >
          <ListItem button key={'ความก้าวหน้า'}>
            <ListItemIcon>
              <AiOutlineFolderOpen size={24} />
            </ListItemIcon>
            <ListItemText primary={'ความก้าวหน้า'} />
          </ListItem>
        </NavLink>

        <NavLink
          to="/learning-portal/admins/main/coursecertificate"
          className={classes.nav}
        >
          <ListItem button key={'person'}>
            <ListItemIcon>
              <AiOutlineFolderOpen size={24} />
            </ListItemIcon>
            <ListItemText primary={'ประกาศนียบัตร'} />
          </ListItem>
        </NavLink>

        <Divider />

        <NavLink
          to="/learning-portal/admins/main/person"
          className={classes.nav}
        >
          <ListItem button key={'person'}>
            <ListItemIcon>
              <AiOutlineUserAdd size={24} />
            </ListItemIcon>
            <ListItemText primary={'แก้ไขข้อมูลส่วนบุคคล'} />
          </ListItem>
        </NavLink>
        <NavLink
          to="/learning-portal/admins/main/reset"
          className={classes.nav}
        >
          <ListItem button key={'เปลี่ยนรหัสผ่าน'}>
            <ListItemIcon>
              <CgPassword size={24} />
            </ListItemIcon>
            <ListItemText primary={'เปลี่ยนรหัสผ่าน'} />
          </ListItem>
        </NavLink>
        <NavLink to="/learning-portal/admins" className={classes.nav}>
          <ListItem button key={'ลงชื่ออก'}>
            <ListItemIcon>
              <AiOutlineLogout size={24} />
            </ListItemIcon>
            <ListItemText primary={'ลงชื่อออก'} />
          </ListItem>
        </NavLink>
      </List>
    </div>
  )
}
