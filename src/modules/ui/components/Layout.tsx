import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles'
import {

  CssBaseline,
  AppBar,
  Toolbar,
  Grid,
  Typography,

  Hidden,
  Box,Container,
  Avatar,
} from '@material-ui/core'

import MenuList from './MenuList'
import banner from 'assets/images/OCSC-banner.png'

import { NavLink } from 'react-router-dom'

import Routes from './Routes'

import avatar from 'assets/images/user.svg'
import 'assets/css/bg.css'
const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',

    // background: '#FAFAFA',
  },
  title: {
    fontWeight: 900,
    flexGrow: 1,
    display: 'flex',
    marginLeft: 10,
  },
  appBar: {
    //  transition: theme.transitions.create(['margin', 'width'], {
    //easing: theme.transitions.easing.sharp,
    // duration: theme.transitions.duration.leavingScreen,
    // }),
    background: '#0f1626', //transparent
    color: '#f3f3fb',
    backdropFilter: 'blur(6px)',
  },

  appBarShift: {
    // width: `calc(100% - ${drawerWidth}px)`,
    //  marginLeft: drawerWidth,
    // transition: theme.transitions.create(['margin', 'width'], {
    // easing: theme.transitions.easing.easeOut,
    //duration: theme.transitions.duration.enteringScreen,
    // }),
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
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    minHeight: ` ${window.screen.height - 180}px`,
    background:'#f5f5f5'
  },
  push: {
    height: '90px',
  },
  footer: {
    height: '90px',
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
    fontWeight: 900,
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 6,
    },
  },
  color1: {
    fontWeight: 900,
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 6,
    },
  },
  name: {
    fontWeight: 900,
    fontSize: 16,
    marginLeft: 10,
  },
  main: {
    fontWeight: 900,
    fontSize: 16,


  },line:{
    display:'inline-block',
    borderBottom:'3px solid #f9b122',
    paddingBottom:'2px'
  }
  
}))

export default function PersistentDrawerLeft(props: any) {
  const classes = useStyles()

 



  

  let themes = createMuiTheme({
    typography: {
      fontFamily: ['Prompt', 'sans-serif'].join(','),
    },
    overrides: {
      MuiTab: {
        root: {
          minWidth: 100,
          '@media (min-width: 0px)': {
            minWidth: 80,
          },
        },
      },
    },
  })
  themes = responsiveFontSizes(themes)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={themes}>

               
          <AppBar
            position="fixed"
            className={clsx(classes.appBar)}
            elevation={0}
          >
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
                      <img alt="" src={banner} width={140} />
                    </NavLink>

                    <Hidden smDown>
                      <Typography variant="h6" noWrap className={classes.title}>
                        ศูนย์รวมหลักสูตร/รายวิชาที่เรียนรู้ทางสื่ออิเล็กทรอนิกส์
                      </Typography>
                    </Hidden>
                  </Grid>
                </div>
         
     
              <NavLink
                      to="/learning-portal"
                      style={{ color: 'inherit', textDecoration: 'inherit' }}
                    >
              <div className={classes.line}>
              <Box className={classes.main}>หน้าหลัก</Box>
              </div>
              </NavLink>
             
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
            gutterBottom
            className={classes.color1}
          >
            สำนักงานคณะกรรมการข้าราชการพลเรือน (สำนักงาน ก.พ.)
          </Typography>
          <Typography
            variant="button"
            display="block"
            gutterBottom
            className={classes.color}
          >
            Copyright © office of the Civil Service Commission (OCSC) 2020
          </Typography>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  )
}
