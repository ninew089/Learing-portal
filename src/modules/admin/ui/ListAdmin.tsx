import React from "react";
import { useHistory } from "react-router-dom";

import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import {
  Lock,
  MeetingRoom,
  Home,
  PersonAdd,
  AccountCircle,
  CollectionsBookmark,
  LibraryBooks,
  MenuBook,
  BarChart,
  CardMembership,
} from "@material-ui/icons";
import { useRouteMatch } from "react-router-dom";
import { eraseCookie } from "cookie/cookie";
const useStyles = makeStyles({
  nav: {
    color: "inherit",
    textDecoration: "inherit",
  },
});

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const history = useHistory();
  const { profile } = useSelector((state: any) => state.admin);
  const navigatorTologout = () => {
    history.push(`${path}`);
  };
  const onLogout = () => {
    eraseCookie("token");

    navigatorTologout();
    window.location.reload();
  };
  return (
    <div>
      <List>
        <ListItem key={"Admin"}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText
            primary={`${profile.title}${profile.firstName} ${profile.lastName}`}
          />
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
              <Home />
            </ListItemIcon>
            <ListItemText primary={"หน้าหลัก"} />
          </ListItem>
        </NavLink>
        <NavLink to={`${path}/course`} className={classes.nav}>
          <ListItem button key={"รายวิชา"}>
            <ListItemIcon>
              <LibraryBooks />
            </ListItemIcon>
            <ListItemText primary={"รายวิชา"} />
          </ListItem>
        </NavLink>
        <NavLink to={`${path}/curriculm`} className={classes.nav}>
          <ListItem button key={"หลักสูตร"}>
            <ListItemIcon>
              <CollectionsBookmark />
            </ListItemIcon>
            <ListItemText primary={"หลักสูตร"} />
          </ListItem>
        </NavLink>
        <NavLink to={`${path}/subcurriculum`} className={classes.nav}>
          <ListItem button>
            <ListItemIcon>
              <MenuBook />
            </ListItemIcon>
            <ListItemText primary={"รายวิชาในหลักสูตร"} />
          </ListItem>
        </NavLink>
        <NavLink to={`${path}/progress`} className={classes.nav}>
          <ListItem button key={"ความก้าวหน้า"}>
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary={"ความก้าวหน้า"} />
          </ListItem>
        </NavLink>

        <NavLink to={`${path}/coursecertificate`} className={classes.nav}>
          <ListItem button key={"person"}>
            <ListItemIcon>
              <CardMembership />
            </ListItemIcon>
            <ListItemText primary={"ประกาศนียบัตร"} />
          </ListItem>
        </NavLink>

        <Divider />

        <NavLink to={`${path}/person`} className={classes.nav}>
          <ListItem button key={"person"}>
            <ListItemIcon>
              <PersonAdd />
            </ListItemIcon>
            <ListItemText primary={"แก้ไขข้อมูลส่วนบุคคล"} />
          </ListItem>
        </NavLink>
        <NavLink to={`${path}/reset`} className={classes.nav}>
          <ListItem button key={"เปลี่ยนรหัสผ่าน"}>
            <ListItemIcon>
              <Lock />
            </ListItemIcon>
            <ListItemText primary={"เปลี่ยนรหัสผ่าน"} />
          </ListItem>
        </NavLink>

        <ListItem button key={"ออกจากระบบ"} onClick={onLogout}>
          <ListItemIcon>
            <MeetingRoom />
          </ListItemIcon>
          <ListItemText primary={"ออกจากระบบ"} />
        </ListItem>
      </List>
    </div>
  );
}
