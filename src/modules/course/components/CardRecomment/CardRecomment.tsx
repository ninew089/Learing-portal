import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Column, Row, Item } from "@mui-treasury/components/flex";

import { CardProps, CardRecommentProps } from "./typescript";

import CardRecProps from "./CardRecProps";
const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "10px",
    width: "95%",
    borderRadius: 16,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  header: {
    fontFamily: "Barlow, san-serif",
  },
  headline: {
    color: theme.palette.primary.dark,
    fontSize: "1.25rem",
    fontWeight: 600,
  },
}));

export default function SocialCard(props: CardRecommentProps) {
  const { title, data } = props;
  const classes = useStyles();

  return (
    <>
      <Column p={0} gap={0} className={classes.card}>
        <Row wrap p={2} alignItems={"baseline"} className={classes.header}>
          <Item stretched className={classes.headline}>
            {title}
          </Item>
        </Row>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {data.map((item: CardProps, index: number) => (
            <CardRecProps data={item} key={index} />
          ))}
        </Grid>
      </Column>
    </>
  );
}
