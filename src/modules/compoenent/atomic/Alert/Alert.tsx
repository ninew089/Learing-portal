import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: 10,
      "& > * + *": {
        marginTop: theme.spacing(6),
      },
    },
  })
);

export default function ActionAlerts({
  text,
  severity,
  handleClose,
}: {
  text: string;
  severity: "success" | "info" | "warning" | "error";
  handleClose: () => void;
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={severity} onClose={handleClose}>
        {text}
      </Alert>
    </div>
  );
}
