import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Routes from "./Routes";
import Nav from "./Nav";
import Dialog from "modules/course/share/DialogGobal";
import { useSelector } from "react-redux";
import Footer from "./Footer";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    background: "#fff",
    width: "100%",
    overflowX: "hidden",
  },
  content: {
    flexGrow: 1,
    minHeight: `calc(100vh - 146px)`,
    [theme.breakpoints.only("xs")]: {
      minHeight: `100vh-56px`,
    },
  },
  push: {
    height: "60px",
  },
}));

export default function PersistentDrawerLeft(props: any) {
  const classes = useStyles();
  const { dialog, dialogData, isCurriculum } = useSelector(
    (state: any) => state.course
  );
  return (
    <div className={classes.root}>
      <Nav />
      <div className={classes.content}>
        <Routes />
        {dialog && (
          <Dialog open={dialog} data={dialogData} isCurriculum={isCurriculum} />
        )}
      </div>
      <div className={classes.push} />

      <Footer />
    </div>
  );
}
