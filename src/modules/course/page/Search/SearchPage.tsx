import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Search } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  input: {
    color: "#0f1626",
    background: "white",
    fontWeight: 600,
    borderRadius: 100,
    "& .MuiInputBase-root.MuiOutlineInput-root": {
      color: "#45A29E",
      borderColor: "#757575",
      fontWeight: 600,
    },
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      padding: "0 !important",
    },
  },
  text: {},
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState("");
  useEffect(() => {
    if (value !== "") {
      history.push(`/learning-portal/search?q=${value.toLowerCase()}`);
    }
    // eslint-disable-next-line
  }, [value]);

  const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <TextField
        label="ค้นหารายวิชา"
        name="userId"
        variant="outlined"
        value={value || ""}
        className={classes.text}
        onChange={handlerSearch}
        InputProps={{
          className: classes.input,
          endAdornment: (
            <IconButton color="secondary" aria-label="search">
              <Search />
            </IconButton>
          ),
        }}
      />
    </Grid>
  );
}
