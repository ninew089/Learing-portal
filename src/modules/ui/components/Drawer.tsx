import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { ListItem, Avatar } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import avatar from "assets/images/user.svg";
import { getCookie } from 'cookie/cookie'
import { parseJwt } from "utils/getDataJWT"
import { eraseCookie } from "cookie/cookie"
import { RecentActors, LockRounded, CardMembership, ExitToApp, Home, AccountCircle, Help } from '@material-ui/icons';
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

  const { path } = useRouteMatch();

  const login = () => {
    const token = getCookie('token');
    if (token === null) {
      return false
    }
    if ((token !== "" || token !== undefined) && parseJwt(token).role === "user") {
      return true
    }

    return false

  }
  const onLogout = () => {

    eraseCookie("token")
    window.location.reload();

  }
  const { data } = useSelector((state: any) => state.edit);
  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {login() ? (
          <>
            <NavLink to={`${path}/login`} className={classes.navLink}>
              <ListItem button dense>
                <ListItemIcon>
                  <Avatar alt="" src={avatar} />
                </ListItemIcon>
                <ListItemText primary={`${data.title}${data.firstName} ${data.lastName}`} />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink to={`${path}/edit`} className={classes.navLink}>
              <ListItem button>
                <ListItemIcon>

                  <RecentActors />

                </ListItemIcon>
                <ListItemText primary={"แก้ไขโปรไฟล์"} />
              </ListItem>
            </NavLink>
            <NavLink to={`${path}/reset`} className={classes.navLink}>

              <ListItem button>
                <ListItemIcon>
                  <LockRounded />
                </ListItemIcon>
                <ListItemText primary={"เปลี่ยนรหัสผ่าน"} />
              </ListItem>
            </NavLink>
            <NavLink to={`${path}/history`} className={classes.navLink}>
              <ListItem button>
                <ListItemIcon>
                  <CardMembership />
                </ListItemIcon>
                <ListItemText primary={"ประกาศนียบัตร"} />
              </ListItem>
            </NavLink>
            <Divider />
          </>
        ) : (
            <>
              <ListItem button>
                <ListItemText primary={`Learning Portal`} />
              </ListItem>
              <NavLink to={`${path}/login`} className={classes.navLink}>
                <ListItem button>
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText primary={"เข้าสู่ระบบ"} />
                </ListItem>
              </NavLink>
            </>
          )}

        <NavLink to={`${path}`} className={classes.navLink}>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={"หน้าหลัก"} />
          </ListItem>
        </NavLink>
        <NavLink to={`${path}/FAQ`} className={classes.navLink}>
          <ListItem button>
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText primary={"คำถามที่พบบ่อย"} />
          </ListItem>
        </NavLink>
        <Divider />
        {login() ? (
          <NavLink to={`${path}`} className={classes.navLink}>
            <ListItem button onClick={onLogout}>

              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary={"ลงชื่อออก"} />
            </ListItem>
          </NavLink>
        ) : (
            ""
          )}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)} className={classes.button}>
        <AiOutlineMenu />
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
