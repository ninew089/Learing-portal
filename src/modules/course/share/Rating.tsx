import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    height: 1,
  },
  font: {
    whiteSpace: "nowrap",
    fontSize: 8,
  },
});

export default function HoverRating(props: any) {
  const { vote, point, fontSize } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating readOnly value={point} style={{ fontSize: fontSize }} />
      <div className={classes.font} style={{ fontSize: 8 }}>
        ( {vote} )
      </div>
    </div>
  );
}
