import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux'
import * as infoactions from 'modules/infomation/actions'
import * as actionClears from "modules/adminPortal/actions"
import { SnackBarProps } from "./typescript"
function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars(props: SnackBarProps) {
    const { open, severity, message } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        const action = infoactions.clearMessage()
        dispatch(action)
        const actionClear = actionClears.clearMessage()
        dispatch(actionClear)
    };

    return (
        <div className={classes.root}>
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
