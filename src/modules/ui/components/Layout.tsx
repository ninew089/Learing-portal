import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Hidden,
  Box,
  Container,
  Avatar,
  useMediaQuery,
  Button,
} from '@material-ui/core'
import Drawer from './Drawer'
import { useHistory, useRouteMatch } from 'react-router-dom'
import {  useSelector } from 'react-redux'
//import * as actions from '../actions'
import MenuList from './MenuList'
import banner from 'assets/images/OCSC-banner.png'
import { NavLink } from 'react-router-dom'
import Routes from './Routes'
import avatar from 'assets/images/user.svg'
import ScrollTo from 'react-scroll-into-view'
import { useLocation } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    background: '#f5f5f5',
    width: '100%',
    overflowX: "hidden"
  },
  title: {
    fontWeight: 700,
    flexGrow: 1,
    display: 'flex',
    marginLeft: 10,
  },
  appBar: {
    background: '#0f1626',
    color: '#f3f3fb',
    backdropFilter: 'blur(6px)',
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    minHeight: `100vh`,
    background: '#f5f5f5',
  },
  push: {
    height: '120px',
  },
  footer: {

    background: '#0f1626', //transparent
    color: '#f3f3fb',
    backdropFilter: 'blur(6px)',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
    }),
    marginLeft: 0,
  },
  color: {
    color: '#f5f5f5',
    fontWeight: 700,
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 8,
    },
  },
  color1: {
    fontWeight: 700,
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 8,
    },
  },
  name: {
    fontWeight: 700,
    fontSize: 16,
    marginLeft: 10,
  },
  main: {
    fontWeight: 700,
    fontSize: 16,
    [theme.breakpoints.down('sm')]: {
      fontWeight: 700,
      fontSize: 12,
    },
  },
  line: {
    display: 'inline-block',
    borderBottom: '3px solid #f9b122',
    paddingBottom: '2px',
  },
}))

export default function PersistentDrawerLeft(props: any) {
  const classes = useStyles()
  const theme = useTheme()
  const history = useHistory()
  const { path } = useRouteMatch()
  const navigatorToLogin = () => {
    history.push(`${path}/login`)
  }
  const { pathname } = useLocation()
  const login = useSelector((state: any) => state.login.Login)
  const matchesIspad = useMediaQuery(theme.breakpoints.down('md'))
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
                style={{ color: 'inherit', textDecoration: 'inherit' }}
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
                color: 'inherit',
                textDecoration: 'inherit',
                marginLeft: 10,
              }}
            >
              <div className={classes.line}>
                <Box className={classes.main}>หน้าหลัก</Box>
              </div>
            </NavLink>
          </Hidden>
          {pathname === '/learning-portal' ? (
            <>
              <ScrollTo selector={`#หมวดหมู่`}>
                <Button style={{ color: '#fdfdfd' }}>หมวดหมู่</Button>
              </ScrollTo>
              <ScrollTo selector={`#หลักสูตร`}>
                <Button style={{ color: '#fdfdfd' }}>หลักสูตร</Button>
              </ScrollTo>
            </>
          ) : (
            <>
              <NavLink
                to="/learning-portal"
                style={{
                  color: 'inherit',
                  textDecoration: 'inherit',
                }}
              >
                <Button style={{ color: '#fdfdfd' }}>หมวดหมู่</Button>
              </NavLink>
              <NavLink
                to="/learning-portal"
                style={{
                  color: 'inherit',
                  textDecoration: 'inherit',
                }}
              >
                <Button style={{ color: '#fdfdfd' }}>หลักสูตร</Button>
              </NavLink>
            </>
          )}

          <Hidden smUp>
            <Drawer />
          </Hidden>
          {login ? (
            <>
              <Hidden xsDown>
                <Typography
                  style={{
                    borderRight: '0.1em solid white',
                    padding: '1em',
                    marginRight: 10,
                    paddingLeft: 0,
                    marginLeft: 0,
                  }}
                />
                <Avatar alt="Remy Sharp" src={avatar} />
                <Hidden xsDown>
                  <Box className={classes.name}>อนุสรา</Box>
                </Hidden>

                <MenuList />
              </Hidden>
            </>
          ) : (
            <>
              <Hidden xsDown>
                <Button style={{ color: '#fdfdfd' }} onClick={navigatorToLogin}>
                  ลงชื่อเข้าสู่ระบบ
                </Button>
              </Hidden>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Grid className={clsx(classes.content)}>
        <Toolbar />
        <Routes />
      </Grid>
      <div className={classes.push} />
      <Box p={3} className={classes.footer}>
        <Container>
          <Typography
            variant="button"
            display="block"
            align="center"
            gutterBottom
            className={classes.color1}
          >
            สำนักงานคณะกรรมการข้าราชการพลเรือน (สำนักงาน ก.พ.)
          </Typography>
          <Typography
            variant="button"
            display="block"
            align="center"
            gutterBottom
            className={classes.color}
          >
            Copyright © office of the Civil Service Commission (OCSC) 2020
          </Typography>
        </Container>
      </Box>
    </div>
  )
}
