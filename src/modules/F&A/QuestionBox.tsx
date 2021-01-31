import React from "react";
import amber from "@material-ui/core/colors/amber";
import { Avatar, Grid, Typography, Divider } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 10,
    },
    answer: {
      textDecoration: "underline",
    },
    amber: {
      color: theme.palette.getContrastText(amber[500]),
      backgroundColor: amber[500],
    },
    divider: {
      marginTop: theme.spacing(2),
    },
    container: {
      padding: theme.spacing(1.5),
    },
  })
);

export default function ItemComponent({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={2}
        className={classes.root}
      >
        <Grid item>
          <Avatar className={classes.amber}>Q</Avatar>
        </Grid>
        <Grid item>
          <Typography
            component="h1"
            variant="h6"
            align="center"
            style={{ fontSize: "1rem", fontWeight: 600 }}
          >
            {question}?
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />

      <Grid className={classes.container} container spacing={0}>
        <Grid item xs={12} className={classes.answer}>
          คำตอบ
        </Grid>
        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={{ __html: ` ${answer}` }} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
