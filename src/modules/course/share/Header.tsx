import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { LocalLibrary } from "@material-ui/icons";
import img from "assets/images/Learning-Space.jpg";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundImage: `url(${img})`,
    width: "100vw",
    minHeight: 370,
    position: "relative",
    backgroundSize: "cover",
    backdropFilter: "blur(1px)",
    zIndex: 1,
    backgroundPosition: "center center",
  },
  headering: {
    position: "absolute",
    top: "50%",
    paddingLeft: "8vw",
    fontSize: 38,
  },
  content: {
    color: "white",
    zIndex: 1,
    textShadow: "2px 2px 5px rgba(141, 144, 144, 0.81)",
  },
  icon: {
    marginRight: 10,
  },
  divider: {
    marginBottom: 20,
  },
}));
export default function GroupCourse(props: any) {
  const { text } = props;
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.headering}>
        <div className={classes.content}>
          <LocalLibrary className={classes.icon} />
          {text}
        </div>
      </div>
    </div>
  );
}
