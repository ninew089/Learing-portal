import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Grid,
  Hidden,
  useMediaQuery,
  Container,
  Button,
} from "@material-ui/core";
import Drawer from "./Drawer";
import { useLocation, useHistory } from "react-router-dom";
import MenuList from "./MenuList";
import banner from "assets/images/welearn_logo.webp";
import { NavLink } from "react-router-dom";
import { getCookie } from "cookie/cookie";
import * as actionsEdit from "modules/editProfile/actions";
import { useDispatch, useSelector } from "react-redux";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { useLineNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/line";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 500,
    flexGrow: 1,
    display: "flex",
    marginLeft: 10,
    fontSize: 16,
  },
  appBar: {
    background: "#222",
    color: theme.palette.primary.light,
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
      color: theme.palette.primary.light,
    },
  },

  navMenu: {
    color: `${theme.palette.primary.main}  !important`,
  },
  navItem: {
    color: `${theme.palette.primary.light}  !important`,
  },
  navItemActive: {
    color: `${theme.palette.primary.main}  !important`,
  },
  noDecorationLink: {
    textDecoration: "none !important",
  },
}));
interface NavProps {
  onClick: () => void;
}
export default function PersistentDrawerLeft(props: any) {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();
  const token = getCookie("token");

  const matchesIspad = useMediaQuery(theme.breakpoints.down("md"));
  const [active, setActive] = useState<any>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      const actionProfile = actionsEdit.loadGetProfile();
      dispatch(actionProfile);
    }
    // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    if (
      pathname !== "/learning-portal" &&
      pathname !== "/learning-portal/FAQ"
    ) {
      setActive(null);
    }
  }, [pathname]);

  const { data } = useSelector((state: any) => state.edit);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (token === null) {
      history.push("/learning-portal/login");
    } else {
      setAnchorEl(event.currentTarget);
      setOpen(!open);
    }
  };

  const NavProp = React.memo(
    ({ to, state, title }: { to: any; state: any; title: any }) => {
      return (
        <NavLink to={to} className={classes.noDecorationLink} color="secondary">
          <NavItem
            as={"div"}
            active={active === state}
            className={
              active === state ? classes.navItemActive : classes.navItem
            }
            onClick={() => setActive(state)}
          >
            {title}
          </NavItem>
        </NavLink>
      );
    }
  );

  return (
    <AppBar position="fixed" className={clsx(classes.appBar)} elevation={0}>
      <Container>
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
              >
                <img
                  alt=""
                  src={banner}
                  width={matchesIspad ? "43px" : "60px"}
                  height={"25px"}
                />
              </NavLink>

              <Hidden mdDown>
                <div className={classes.title}>
                  OCSC Learning Portal
                  ศูนย์การเรียนรู้ทางสื่ออิเล็กทรอนิกส์แบบบูรณาการ
                </div>
              </Hidden>
            </Grid>
          </div>
          <NavMenu
            useStyles={useLineNavigationMenuStyles}
            className={classes.navMenu}
          >
            <Hidden xsDown>
              <NavProp to={`/learning-portal`} state={0} title={`หน้าหลัก`} />
              <NavProp
                to={`/learning-portal/FAQ`}
                state={2}
                title={`คำถามที่พบบ่อย`}
              />
              <Button
                variant="contained"
                color="secondary"
                style={{ borderRadius: 40 }}
                aria-label="more"
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                // style={{ padding: 0 }}
                //onClick={handleClick}
                onClick={handleClick}
              >
                {token ? (
                  <>
                    <AccountCircle style={{ marginRight: 8 }} />
                    <div className={classes.name}>{data.firstName}</div>
                    <MenuList
                      open={open}
                      setAnchorEl={setAnchorEl}
                      anchorEl={anchorEl}
                    />
                  </>
                ) : (
                  "เข้าสู่ระบบ"
                )}
              </Button>
            </Hidden>
          </NavMenu>
          <Hidden smUp>
            <Drawer />
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

/*

*/
