import React from "react";
import { useHistory } from "react-router-dom"
import {
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineAudit,
  AiOutlineFolderOpen,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useSelector } from 'react-redux'

import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { CgPassword } from "react-icons/cg";
import { useRouteMatch } from "react-router-dom";
import { eraseCookie } from "cookie/cookie"
const useStyles = makeStyles({
  nav: {
    color: "inherit",
    textDecoration: "inherit",
  },
});

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const history = useHistory()
  const { profile } = useSelector((state: any) => state.admin);
  const navigatorTologout = () => {
    history.push(`${path}`);
  };
  const onLogout = () => {
    eraseCookie("role")
    eraseCookie("id")
    eraseCookie("token")
    eraseCookie("platformid")
    navigatorTologout();
    window.location.reload();
  };
  return (
    <div>
      <List>
        <ListItem key={"Admin"}>
          <ListItemIcon>
            <AiOutlineUser size={24} />
          </ListItemIcon>
          <ListItemText primary={`${profile.title}${profile.firstName} ${profile.lastName}`} />
        </ListItem>

        <ListItem key={"mooc"}>
          <ListItemText primary={profile.officialName} />
        </ListItem>
      </List>

      <Divider />
      <List>
        <NavLink to={`${path}`} className={classes.nav}>
          <ListItem button key={"Main"}>
            <ListItemIcon>
              <AiOutlineAudit size={24} />
            </ListItemIcon>
            <ListItemText primary={"หน้าหลัก"} />
          </ListItem>
        </NavLink>
        <NavLink to={`${path}/course`} className={classes.nav}>
          <ListItem button key={"รายวิชา"}>
            <ListItemIcon>
              <AiOutlineFolderOpen size={24} />
            </ListItemIcon>
            <ListItemText primary={"รายวิชา"} />
          </ListItem>
        </NavLink>
        <NavLink to={`${path}/curriculm`} className={classes.nav}>
          <ListItem button key={"หลักสูตร"}>
            <ListItemIcon>
              <AiOutlineFolderOpen size={24} />
            </ListItemIcon>
            <ListItemText primary={"หลักสูตร"} />
          </ListItem>
        </NavLink>
        <NavLink to={`${path}/subcurriculum`} className={classes.nav}>
          <ListItem button>
            <ListItemIcon>
              <AiOutlineFolderOpen size={24} />
            </ListItemIcon>
            <ListItemText primary={"รายวิชาในหลักสูตร"} />
          </ListItem>
        </NavLink>
        <NavLink to={`${path}/progress`} className={classes.nav}>
          <ListItem button key={"ความก้าวหน้า"}>
            <ListItemIcon>
              <AiOutlineFolderOpen size={24} />
            </ListItemIcon>
            <ListItemText primary={"ความก้าวหน้า"} />
          </ListItem>
        </NavLink>

        <NavLink to={`${path}/coursecertificate`} className={classes.nav}>
          <ListItem button key={"person"}>
            <ListItemIcon>
              <AiOutlineFolderOpen size={24} />
            </ListItemIcon>
            <ListItemText primary={"ประกาศนียบัตร"} />
          </ListItem>
        </NavLink>

        <Divider />

        <NavLink to={`${path}/person`} className={classes.nav}>
          <ListItem button key={"person"}>
            <ListItemIcon>
              <AiOutlineUserAdd size={24} />
            </ListItemIcon>
            <ListItemText primary={"แก้ไขข้อมูลส่วนบุคคล"} />
          </ListItem>
        </NavLink>
        <NavLink to={`${path}/reset`} className={classes.nav}>
          <ListItem button key={"เปลี่ยนรหัสผ่าน"}>
            <ListItemIcon>
              <CgPassword size={24} />
            </ListItemIcon>
            <ListItemText primary={"เปลี่ยนรหัสผ่าน"} />
          </ListItem>
        </NavLink>

        <ListItem button key={"ลงชื่ออก"} onClick={onLogout}>
          <ListItemIcon>
            <AiOutlineLogout size={24} />
          </ListItemIcon>
          <ListItemText primary={"ลงชื่อออก"} />
        </ListItem>

      </List>
    </div>
  );
}
