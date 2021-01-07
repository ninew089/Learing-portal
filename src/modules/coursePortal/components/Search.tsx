import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    TextField,
    IconButton
} from "@material-ui/core";

import { Search } from '@material-ui/icons'
const useStyles = makeStyles((theme) => ({
    input: {
        color: "#0f1626",
        background: "white",
        fontWeight: 700,
        borderRadius: 100,
        "& .MuiInputBase-root.MuiOutlineInput-root": {
            color: "#45A29E",
            borderColor: "#757575",
            fontWeight: 700,

        },
        "& .MuiInputBase-root.MuiOutlinedInput-root": {
            padding: "0 !important",
        },
    },
    textfield: {
        minWidth: "120px",
        "& .MuiInputBase-root.MuiOutlinedInput-root": {
            padding: "0 !important",
        },

        "& label.MuiFormLabel-root": {
            fontWeight: 700,
            "&:after .Mui-error": {
                borderColor: "#ff533d",
                borderWidth: "3px",
            },
        },
        "& label.Mui-focused": {
            color: "#132740",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#ffae0c",
        },
        "& .MuiOutlinedInput-root": {
            borderWidth: "3px",
            "& fieldset": {
                borderColor: "#ffae0c",
                borderWidth: "2px",
            },
            "&:hover fieldset": {
                borderColor: theme.palette.secondary.main,
                borderWidth: "3px",
            },
            "&.Mui-focused fieldset": {
                borderColor: theme.palette.secondary.main,
                borderWidth: "3px",
            },

        },
    },


}));

export default function SignIn() {
    const classes = useStyles();
    /*
          <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
    */
    return (
        <Grid container direction="row" justify="center" alignItems="center">

            <TextField
                label="ค้นหารายวิชา"
                name="userId"
                variant="outlined"
                className={classes.textfield}
                InputProps={{
                    className: classes.input,
                    endAdornment: <IconButton color="secondary" aria-label="add" >
                        <Search />
                    </IconButton>
                }}
            />


        </Grid >
    );
}
