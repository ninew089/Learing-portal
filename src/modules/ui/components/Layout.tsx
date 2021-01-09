import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Hidden,
  Box,
  Avatar,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import Drawer from "./Drawer";
import { useHistory, useRouteMatch } from "react-router-dom";
import MenuList from "./MenuList";
import banner from "assets/images/OCSC-banner.png";
import { NavLink } from "react-router-dom";
import Routes from "./Routes";
import avatar from "assets/images/user.svg";
import ScrollTo from "react-scroll-into-view";
import { useLocation } from "react-router-dom";
import { getCookie } from 'cookie/cookie'
import { parseJwt } from "utils/getDataJWT"
import * as actionsEdit from "modules/editProfile/actions";
import { useDispatch, useSelector } from 'react-redux'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    background: theme.palette.primary.light,
    width: "100%",
    overflowX: "hidden",
  },
  title: {
    fontWeight: 700,
    flexGrow: 1,
    display: "flex",
    marginLeft: 10,
  },
  appBar: {
    background: "#0f1626",
    color: "#f3f3fb",
    backdropFilter: "blur(6px)",
    filter: "opacity(0.9)",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 3),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    minHeight: `100vh`,
    background: theme.palette.primary.light,
  },
  push: {
    height: "120px",
  },
  footer: {
    background: "#0f1626", //transparent
    color: "#f3f3fb",
    backdropFilter: "blur(6px)",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
    }),
    marginLeft: 0,
  },
  color: {

    color: theme.palette.secondary.light,
    fontWeight: 400,
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: 10,
    }
  },
  color1: {
    fontWeight: 400,
    fontSize: 16,
    color: theme.palette.primary.light,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: 10,
    }
  },
  name: {
    fontWeight: 700,
    fontSize: 16,
    marginLeft: 10,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "75ch"
  },
  main: {
    fontWeight: 700,
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      fontWeight: 700,
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
  selected: {
    color: theme.palette.secondary.main,
  },
  selectedMain: {
    fontWeight: 700,
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      fontWeight: 700,
      fontSize: 12,
    },
    color: theme.palette.secondary.main,
  },
}));
interface NavProps {
  onClick: () => void;
}
export default function PersistentDrawerLeft(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { path } = useRouteMatch();
  const navigatorToLogin = () => {
    setActive(3);
    history.push(`${path}/login`);
  };
  const { pathname } = useLocation();
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
  const matchesIspad = useMediaQuery(theme.breakpoints.down("md"));
  const [active, setActive] = useState<number>(0);

  const dispatch = useDispatch();
  const id = getCookie('id')
  useEffect(() => {
    const actionProfile = actionsEdit.loadGetProfile()
    dispatch(actionProfile)
    // eslint-disable-next-line
  }, [id])

  const { data } = useSelector((state: any) => state.edit);

  return (
    <div className={classes.root}>
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
                to="/learning-portal"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <img alt="" src={banner} width={matchesIspad ? 100 : 140} />
              </NavLink>

              <Hidden smDown>
                <Typography variant="h6" noWrap className={classes.title}>
                  ศูนย์รวมหลักสูตร/รายวิชาที่เรียนรู้ทางสื่ออิเล็กทรอนิกส์
                </Typography>
              </Hidden>
            </Grid>
          </div>

          <Hidden smDown>
            <NavLink
              to="/learning-portal"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                marginLeft: 10,
              }}
            >
              <div className={classes.line}>
                <Box
                  className={active === 0 ? classes.selectedMain : classes.main}
                  onClick={() => setActive(0)}
                >
                  หน้าหลัก
                </Box>
              </div>
            </NavLink>
          </Hidden>
          {pathname === "/learning-portal" ? (
            <>
              <ScrollTo selector={`#หมวดหมู่`} smooth >
                <Button
                  className={active === 1 ? classes.selected : classes.button}
                  onClick={() => setActive(1)}
                >
                  หมวดหมู่
                </Button>
              </ScrollTo>
              <ScrollTo selector={`#หลักสูตร`} smooth>
                <Button
                  className={active === 2 ? classes.selected : classes.button}
                  onClick={() => setActive(2)}
                >
                  หลักสูตร
                </Button>
              </ScrollTo>
            </>
          ) :
            ""
          }

          <Hidden smUp>
            <Drawer />
          </Hidden>
          {login() ? (
            <>
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
                <Avatar alt="Remy Sharp" src={avatar} />
                <Hidden xsDown>
                  <Box className={classes.name}>{data.firstName}</Box>
                </Hidden>

                <MenuList />
              </Hidden>
            </>
          ) : (
              <>
                <Hidden xsDown>
                  <Button
                    className={active === 3 ? classes.selected : classes.button}
                    onClick={navigatorToLogin}
                  >
                    ลงชื่อเข้าสู่ระบบ
                </Button>
                </Hidden>
              </>
            )}
        </Toolbar>
      </AppBar>

      <Grid className={clsx(classes.content)}>
        <Routes />


      </Grid>
      <div className={classes.push} />
      <Box p={3} className={classes.footer}>
        <Grid container direction="row" justify="space-around" alignItems="center">

          <Typography
            variant="button"
            display="block"
            align="justify"
            gutterBottom
            className={classes.color1}
          >
            สำนักงานคณะกรรมการข้าราชการพลเรือน (สำนักงาน ก.พ.)
                   <Typography
              variant="button"
              display="block"
              align="justify"
              gutterBottom
              className={classes.color}
            >
              Copyright © office of the Civil Service Commission (OCSC) 2020
          </Typography>
          </Typography>
          <Typography

            display="block"
            align="justify"

            className={classes.color1}
          >
            47/111 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000
                  <Typography

              display="block"
              align="justify"

              className={classes.color}
            >
              E-mail : ocsc.hrd@gmail.com
          </Typography>

            <Typography

              display="block"
              align="justify"
              gutterBottom
              className={classes.color1}
            >
              โทร. 02-547-1795 , 02-547-1807 (ภายในเวลาราชการ)
          </Typography>



          </Typography>
        </Grid>
      </Box>
    </div>
  );
}
