import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
  Button,
  Drawer,
} from "@material-ui/core";

import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { eraseCookie, getCookie } from "cookie/cookie";
import banner from "assets/images/welearn_logo.webp";

import {
  CreateRounded,
  LockRounded,
  ChromeReaderMode,
  Home,
  AccountCircle,
  Help,
  Menu,
  MeetingRoomRounded,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#0f1726",
    color: "#fdfdfd",
    width: "100%",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    background: "#0f1726",
  },
  navLink: {
    color: "inherit",
    textDecoration: "inherit",
  },
  button: {
    color: "#fdfdfd",
  },
  index: {
    fontWeight: 500,
  },
}));

type Anchor = "right" | "top" | "bottom";

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const onLogout = () => {
    eraseCookie("token");
    window.location.reload();
  };
  const { data } = useSelector((state: any) => state.edit);

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)} className={classes.button}>
        <Menu />
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <div
          className={clsx(classes.list)}
          role="presentation"
          onClick={toggleDrawer("right", false)}
          onKeyDown={toggleDrawer("right", false)}
        >
          <List>
            {getCookie("token") ? (
              <React.Fragment>
                <ListItem button dense>
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${data.title}${data.firstName} ${data.lastName}`}
                  />
                </ListItem>

                <Divider />

                <ListItem
                  button
                  component={NavLink}
                  to={`/learning-portal/edit`}
                >
                  <ListItemIcon>
                    <CreateRounded />
                  </ListItemIcon>
                  <ListItemText primary={"แก้ไขข้อมูลส่วนบุคคล"} />
                </ListItem>

                <ListItem
                  button
                  component={NavLink}
                  to={`/learning-portal/reset`}
                >
                  <ListItemIcon>
                    <LockRounded />
                  </ListItemIcon>
                  <ListItemText primary={"เปลี่ยนรหัสผ่าน"} />
                </ListItem>

                <ListItem
                  button
                  component={NavLink}
                  to={`/learning-portal/history`}
                >
                  <ListItemIcon>
                    <ChromeReaderMode />
                  </ListItemIcon>
                  <ListItemText primary={"ประกาศนียบัตร"} />
                </ListItem>

                <Divider />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <ListItem button>
                  <ListItemText
                    primary={<img alt="" src={banner} width={"80%"} />}
                  />
                </ListItem>

                <ListItem
                  button
                  component={NavLink}
                  to={`/learning-portal/login`}
                >
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText primary={"เข้าสู่ระบบ"} />
                </ListItem>
              </React.Fragment>
            )}

            <ListItem button component={NavLink} to={`/learning-portal`}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"หน้าหลัก"} />
            </ListItem>

            <ListItem button component={NavLink} to={`/learning-portal/FAQ`}>
              <ListItemIcon>
                <Help />
              </ListItemIcon>
              <ListItemText primary={"คำถามที่พบบ่อย"} />
            </ListItem>

            <Divider />
            {getCookie("token") ? (
              <ListItem
                button
                onClick={onLogout}
                component={NavLink}
                to={`/learning-portal`}
              >
                <ListItemIcon>
                  <MeetingRoomRounded />
                </ListItemIcon>
                <ListItemText primary={"ออกจากระบบ"} />
              </ListItem>
            ) : (
              ""
            )}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
