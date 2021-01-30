import React, { useState } from "react";
import { Grid, Box, Divider, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "../../share/DialogCourse";
import { useSelector } from "react-redux";
import Rating from "../../share/Rating";
import numberFormat from "utils/numberFormat";

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
  },
  cardMedia: {
    paddingTop: "75%", // 4:3
    borderRadius: theme.shape.borderRadius,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  dot: {
    height: "10px",
    width: "10px",
    backgroundColor: "#cfcde6",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: 2,
    marginRight: 4,
  },
  author: {
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    fontSize: "14px",
    fontWeight: 700,
    color: "#132740",
    padding: 3,
    width: 190,
    marginLeft: 8,
    marginBottom: 2,
  },
  rating: {
    paddingLeft: 8,
  },
  box: {
    padding: 8,
    marginLeft: 6,
  },
  logo: {
    margin: 8,
  },
  view: {
    fontSize: "8px",
  },
}));

export default function SocialCard(props: any) {
  const { data } = props;
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const { colorName } = useSelector((state: any) => state.course);
  const onSelected = () => {
    setOpen(true);
  };

  return (
    <>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        spacing={2}
        className={classes.items}
        onClick={onSelected}
      >
        <Grid item xs={5}>
          <CardMedia
            style={{
              background: `url('${data.thumbNail}')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
            image={data.thumbNail}
            className={classes.cardMedia}
            title={data.name}
          />
        </Grid>

        <Grid item xs={7}>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            direction="row"
          >
            <Grid item>
              <div className={classes.logo}>
                <div
                  style={{
                    backgroundImage: `url('${data.platformlogo}`,
                    backgroundSize: "cover",
                    padding: "18px",
                    backgroundPosition: " center center",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.author}>{data.platformName}</div>
              <div className={classes.rating}>
                <Rating
                  vote={data.satisfactionCount}
                  point={data.satisfactionSum / data.satisfactionCount}
                />
              </div>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                className={classes.box}
              >
                <Typography
                  variant="caption"
                  align="left"
                  component="span"
                  color={"textSecondary"}
                  className={classes.view}
                >
                  การดู {numberFormat(data.viewCount)} ครั้ง
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Box fontSize={14} fontWeight={700} className={classes.name}>
            {data.name}
          </Box>
          <Box fontSize={14} fontWeight={700} className={classes.name}>
            {data.code}
          </Box>
          <Box fontSize={12} fontWeight={700} className={classes.category}>
            <div
              className={classes.dot}
              style={{
                background:
                  colorName[0][
                    data.courseCategory !== undefined ? data.courseCategory : 0
                  ],
              }}
            />
            {data.courseCategory}
          </Box>

          <Divider />
        </Grid>
      </Grid>

      <Dialog open={open} setOpen={setOpen} data={data} isCurriculum={false} />
    </>
  );
}
