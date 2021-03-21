import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#1959bd",
    color: "#f3f3fb",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  ocsc: {
    textAlign: "center",
    color: theme.palette.primary.light,
    fontWeight: 500,
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  color: {
    textAlign: "center",
    color: theme.palette.secondary.light,
    fontWeight: 500,
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
  color1: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 14,
    color: theme.palette.primary.light,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
}));

export default function PersistentDrawerLeft(props: any) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1060px)");

  return (
    <div className={classes.footer}>
      <Container>
        <Grid
          container
          direction="row"
          justify={matches ? "space-around" : "center"}
          alignItems="center"
        >
          <Grid item xs={12} lg={6}>
            <div className={classes.ocsc}>
              สำนักงานคณะกรรมการข้าราชการพลเรือน (สำนักงาน ก.พ.)
            </div>
            <div className={classes.color}>
              Copyright © office of the Civil Service Commission (OCSC) 2021
            </div>
          </Grid>

          <div className={classes.color1}>
            47/111 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี
            11000
            <div className={classes.color}>E-mail : ocsc.hrd@gmail.com</div>
            <div className={classes.color1}>
              โทร. 02-547-1795 , 02-547-1807 (ภายในเวลาราชการ)
            </div>
          </div>
        </Grid>
      </Container>
    </div>
  );
}
