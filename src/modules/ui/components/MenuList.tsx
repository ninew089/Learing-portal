import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { eraseCookie } from "cookie/cookie";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
//@ts-ignore
import SwitchToggle from "@mui-treasury/components/toggle/switch";
import {
  LockRounded,
  MeetingRoomRounded,
  ChromeReaderMode,
  CreateRounded,
} from "@material-ui/icons";

import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    paper: {
      marginRight: theme.spacing(0),
    },
    icon: {
      padding: 0,
      color: "#FDFDFD",
    },
    popper: {
      marginTop: 20,
    },
    icons: {
      marginRight: 18,
    },
  })
);
export default function LongMenu({
  open,
  setAnchorEl,
  anchorEl,
}: {
  open: any;
  anchorEl: any;
  setAnchorEl: any;
}) {
  const classes = useStyles();

  const history = useHistory();
  const path = "/learning-portal";
  const navigatorToeditProfile = () => {
    history.push(`${path}/edit`);
  };
  const navigatorToreset = () => {
    history.push(`${path}/reset`);
  };
  const navigatorTohistory = () => {
    history.push(`${path}/history`);
  };
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
      <SwitchToggle toggled={open} />

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        PaperProps={{
          style: {
            marginTop: "2.8rem",
          },
        }}
      >
        <MenuItem onClick={navigatorToeditProfile}>
          <CreateRounded className={classes.icons} />
          แก้ไขข้อมูลส่วนบุคคล
        </MenuItem>
        <MenuItem onClick={navigatorToreset}>
          <LockRounded className={classes.icons} />
          เปลี่ยนรหัสผ่าน
        </MenuItem>
        <MenuItem onClick={navigatorTohistory}>
          <ChromeReaderMode className={classes.icons} />
          ประกาศนียบัตร
        </MenuItem>
        <MenuItem onClick={onLogout}>
          <MeetingRoomRounded className={classes.icons} />
          ออกจากระบบ
        </MenuItem>
      </Menu>
    </div>
  );
}
