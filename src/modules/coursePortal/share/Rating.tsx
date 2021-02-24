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
  },
});

export default function HoverRating(props: any) {
  const { vote, point, fontSize } = props;
  //const [value] = React.useState(4.5)

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        readOnly
        size="small"
        value={point}
        precision={0.1}
        style={{ fontSize: fontSize }}
      />

      <h5 className={classes.font}>( {vote} )</h5>
    </div>
  );
}
