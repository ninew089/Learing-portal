import React from "react";
import { Grid, Box, Divider, Link, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Column, Row, Item } from "@mui-treasury/components/flex";
import categoryFormat from 'utils/categoryFormat'

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
    color: theme.palette.primary.main,
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  link: {
    color: "#2281bb",
    padding: "0 0.25rem",
    fontSize: "0.875rem",
  },
  actions: {
    color: "#BDC9D7",
  },
  divider: {
    backgroundColor: "#d9e2ee",
    margin: "0 20px",
  },
  caption: {
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    color: "#59626f",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  category: {
    color: " #59636f",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  name: {
    color: theme.palette.primary.main,
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  items: {
    marginBottom: 4,
    transition: "transform 0.7s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  image: {
    borderRadius: 10,
    boxShadow: "0 4px 4px 0 #BDC9D7",
  }, cardMedia: {
    paddingTop: "75%", // 4:3
    borderRadius: theme.shape.borderRadius,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
}));

export default function SocialCard(props: any) {
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
          {data.map((item: any, index: number) => (
            <Link href={item.link} target="_blank" underline="none" key={index}>
              <Grid
                key={index}
                container
                justify="flex-start"
                alignItems="center"
                spacing={2}
                className={classes.items}

              >
                <Grid item xs={5}>

                  < CardMedia
                    style={{
                      background: `url('${item.thumbnail}')`,
                      backgroundSize: "cover",
                    }}
                    image={item.thumbnail}
                    className={classes.cardMedia}
                    title="Contemplative Reptile"

                  />


                </Grid>
                <Grid item xs={7}>
                  <Box
                    fontSize={12}
                    fontWeight={700}
                    className={classes.category}
                  >
                    {index + 1} • {categoryFormat(item.courseCategoryId)}
                  </Box>

                  <Box fontSize={14} fontWeight={700} className={classes.name}>
                    {item.name}
                  </Box>
                  <Box fontSize={14} fontWeight={700} className={classes.name}>
                    {item.code}
                  </Box>
                  <Box fontSize={12} fontWeight={400} className={classes.caption}>
                    {item.learningTopic}
                  </Box>

                  <Divider />
                </Grid>
              </Grid>
            </Link>
          ))}
        </Grid>

      </Column>
    </>
  );
};
