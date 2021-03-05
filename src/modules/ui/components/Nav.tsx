import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Hidden,
  useMediaQuery,
} from "@material-ui/core";
import Drawer from "./Drawer";
import { useLocation } from "react-router-dom";
import MenuList from "./MenuList";
import banner from "assets/images/welearn_logo.webp";
import { NavLink } from "react-router-dom";
import ScrollTo from "react-scroll-into-view";
import { getCookie, login } from "cookie/cookie";
import { parseJwt } from "utils/getDataJWT";
import * as actionsEdit from "modules/editProfile/actions";
import { useDispatch, useSelector } from "react-redux";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { useLineNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/line";
import amber from "@material-ui/core/colors/amber";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 500,
    flexGrow: 1,
    display: "flex",
    marginLeft: 10,
  },
  appBar: {
    background: "#000000e6",
    color: "#f3f3fb",
    backdropFilter: "blur(6px)",
    filter: "opacity(0.9)",
  },

  name: {
    fontWeight: 500,
    fontSize: 16,
    marginLeft: 10,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "75ch",
  },
  main: {
    fontWeight: 500,
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      fontWeight: 500,
      fontSize: 12,
    },
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  line: {
    display: "inline-block",
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
    paddingBottom: "2px",
  },
  button: {
    color: "#fdfdfd",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  navMenu: {
    color: `${amber[500]}  !important`,
  },
  navItem: {
    color: `${theme.palette.common.white}  !important`,
  },
  navItemActive: {
    color: `${amber[500]}  !important`,
  },
  noDecorationLink: {
    textDecoration: "none !important",
  },
}));
interface NavProps {
  onClick: () => void;
}
export default function PersistentDrawerLeft(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();
  const token = getCookie("token");

  const matchesIspad = useMediaQuery(theme.breakpoints.down("md"));
  const [active, setActive] = useState<any>(0);
  const dispatch = useDispatch();
  const id = parseJwt(token).unique_name;
  useEffect(() => {
    if (login()) {
      const actionProfile = actionsEdit.loadGetProfile();
      dispatch(actionProfile);
    }
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (pathname !== "/learning-portal") {
      setActive(null);
    }
    if (pathname === "/learning-portal/FAQ") {
      setActive(4);
    }
  }, [pathname]);

  const { data } = useSelector((state: any) => state.edit);
  const NavProp = ({
    to,
    state,
    title,
  }: {
    to: any;
    state: any;
    title: any;
  }) => {
    return (
      <NavLink to={to} className={classes.noDecorationLink} color="secondary">
        <NavItem
          as={"div"}
          active={active === state}
          className={active === state ? classes.navItemActive : classes.navItem}
          onClick={() => setActive(state)}
        >
          {title}
        </NavItem>
      </NavLink>
    );
  };

  return (
    <AppBar position="fixed" className={clsx(classes.appBar)} elevation={0}>
      <Toolbar>
        <div className={classes.title}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <NavLink
              to={`/learning-portal`}
              className={classes.noDecorationLink}
              style={{ marginBottom: 4, marginTop: 4 }}
            >
              <img
                alt=""
                src={banner}
                width={matchesIspad ? "63px" : "76px"}
                height={"32px"}
              />
            </NavLink>

            <Hidden mdDown>
              <Typography variant="h6" noWrap className={classes.title}>
                OCSC Learning Portal
                ศูนย์การเรียนรู้ทางสื่ออิเล็กทรอนิกส์แบบบูรณาการ
              </Typography>
            </Hidden>
          </Grid>
        </div>
        <NavMenu
          useStyles={useLineNavigationMenuStyles}
          className={classes.navMenu}
        >
          {pathname === "/learning-portal" ? (
            <React.Fragment>
              <Hidden xsDown>
                <NavProp to={`/learning-portal`} state={0} title={`หน้าหลัก`} />
              </Hidden>
              <ScrollTo selector={`#หมวดหมู่`} smooth>
                <NavProp to={`/learning-portal`} state={1} title={`หมวดหมู่`} />
              </ScrollTo>
              <ScrollTo selector={`#หลักสูตร`} smooth>
                <NavProp to={`/learning-portal`} state={2} title={`หลักสูตร`} />
              </ScrollTo>
              <Hidden xsDown>
                <NavProp
                  to={`/learning-portal/FAQ`}
                  state={4}
                  title={`คำถามที่พบบ่อย`}
                />
              </Hidden>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <NavProp to={`/learning-portal`} state={0} title={`หน้าหลัก`} />
              <NavProp
                to={`/learning-portal/FAQ`}
                state={4}
                title={`คำถามที่พบบ่อย`}
              />
            </React.Fragment>
          )}
        </NavMenu>

        <Hidden smUp>
          <Drawer />
        </Hidden>
        {login() ? (
          <React.Fragment>
            <Hidden xsDown>
              <Typography
                style={{
                  borderRight: "0.1em solid white",
                  padding: "1em",
                  marginRight: 10,
                  paddingLeft: 0,
                  marginLeft: 0,
                }}
              />
              <AccountCircle style={{ color: "#ffa800", fontSize: "32px" }} />
              <div className={classes.name}>{data.firstName}</div>
              <MenuList />
            </Hidden>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Hidden xsDown>
              <NavMenu
                useStyles={useLineNavigationMenuStyles}
                className={classes.navMenu}
              >
                <NavProp
                  to={`/learning-portal/login`}
                  state={null}
                  title={`เข้าสู่ระบบ`}
                />
              </NavMenu>
            </Hidden>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
}
