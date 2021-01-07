import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { NavLink } from "react-router-dom";
import notFound from "assets/images/404.gif"
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  container: {

    borderRadius: "10px",
    padding: "10px",
  },
  navlink: {
    color: "inherit",
    textDecoration: "inherit",
  },
  submit: {
    marginTop: "10px",
    background: "lavender",
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />

      <div className={classes.paper}>
        <img src={notFound} width="100%" height="100%" alt="404page" />
        <form className={classes.form} >
          <NavLink to="/learning-portal" className={classes.navlink}>
            <Button type="submit" fullWidth className={classes.submit}>
              กลับสู่หน้าหลัก
            </Button>
          </NavLink>
        </form>
      </div>
    </Container>
  );
}
