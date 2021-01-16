import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import searchNotfound from "assets/gif/somethingbroken.gif"

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    margin: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    container: {

        borderRadius: "10px",
        padding: "10px",
    },
    navlink: {
        color: "inherit",
        textDecoration: "inherit",
    },
    submit: {
        marginTop: "10px",
        background: "lavender",
    },
}));

export default function SignIn() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
            <CssBaseline />

            <div className={classes.paper}>
                <h2>กำลังทำการแก้ไข โปรดรอสักครู่</h2>
                <img src={searchNotfound} alt="" width="400px" height="400px" />

            </div>
        </Container>
    );
}
