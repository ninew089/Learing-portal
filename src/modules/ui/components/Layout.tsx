import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, useMediaQuery } from "@material-ui/core";
import Routes from "./Routes";
import Nav from "./Nav";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    background: theme.palette.primary.light,
    width: "100%",
    overflowX: "hidden",
  },
  content: {
    flexGrow: 1,
    minHeight: `100vh`,
  },
  push: {
    height: "60px",
  },
  footer: {
    background: "#01000e", //transparent
    color: "#f3f3fb",
    backdropFilter: "blur(6px)",
  },
  question: {
    color: theme.palette.primary.light,
    fontWeight: 600,
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: 10,
    },
  },
  ocsc: {
    color: theme.palette.primary.light,
    fontWeight: 400,
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: 14,
    },
  },

  color: {
    color: theme.palette.secondary.light,
    fontWeight: 400,
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: 10,
    },
  },
  color1: {
    fontWeight: 400,
    fontSize: 16,
    color: theme.palette.primary.light,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: 10,
    },
  },
  name: {
    fontWeight: 700,
    fontSize: 16,
    marginLeft: 10,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "75ch",
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
}));

export default function PersistentDrawerLeft(props: any) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1060px)");

  return (
    <div className={classes.root}>
      <Nav />

      <Grid className={clsx(classes.content)}>
        <Routes />
      </Grid>
      <div className={classes.push} />
      <Box p={5} className={classes.footer}>
        <Grid
          container
          direction="row"
          justify={matches ? "space-around" : "center"}
          alignItems="center"
        >
          <Grid item xs={12} lg={6}>
            <Typography
              display="block"
              align="center"
              component="span"
              className={classes.ocsc}
            >
              สำนักงานคณะกรรมการข้าราชการพลเรือน (สำนักงาน ก.พ.)
            </Typography>
            <Typography
              display="block"
              align="center"
              component="span"
              className={classes.color}
            >
              Copyright © office of the Civil Service Commission (OCSC) 2021
            </Typography>
          </Grid>

          <Typography
            component="span"
            display="block"
            align="center"
            className={classes.color1}
          >
            47/111 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี
            11000
            <Typography
              display="block"
              align="center"
              component="span"
              className={classes.color}
            >
              E-mail : ocsc.hrd@gmail.com
            </Typography>
            <Typography
              display="block"
              align="center"
              component="span"
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
