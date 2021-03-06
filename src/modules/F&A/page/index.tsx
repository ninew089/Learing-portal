import React from "react";
import { Box, Divider, Container, Paper } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import QuestionBox from "../QuestionBox";
import { data } from "../data";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
  })
);
export default function FAQ() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm">
        <Paper variant="outlined" className={classes.root}>
          <Box fontWeight={600} fontSize={24} margin={4}>
            คำถามที่พบบ่อย ?
          </Box>

          {data.map((item: any, index: number) => (
            <div key={item.question}>
              <Divider />
              <QuestionBox question={item.question} answer={item.answer} />
            </div>
          ))}
        </Paper>
      </Container>
    </>
  );
}
