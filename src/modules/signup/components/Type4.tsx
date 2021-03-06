import React, { useEffect } from "react";

import { TextField, MenuItem, FormControl } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "modules/infomation/actions";
import { useDispatch, useSelector } from "react-redux";
import { OccupationsProps, typeProps } from "../typescript";

const useStyles = makeStyles((theme) => ({
  input: {
    "& .MuiInputBase-root.MuiOutlineInput-root": {
      color: "#45A29E",
      borderColor: "#757575",
      fontWeight: 600,
    },
  },
  selectInput: {
    "& .MuiInputBase-root.MuiOutlineInput-root": {
      color: "#45A29E",
      borderColor: "#757575",
      fontWeight: 600,
    },
  },
  textfield: {
    marginTop: 10,
  },
}));

export default function SignIn(props: typeProps) {
  const classes = useStyles();

  const { formProps, name } = props;
  const dispatch = useDispatch();

  const { Occupations } = useSelector((state: any) => state.infomation);

  useEffect(() => {
    const action = actions.loadOccupations();
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <FormControl fullWidth>
        <h4> {name}</h4>
        <Controller
          as={
            <TextField
              variant="outlined"
              fullWidth
              defaultValue=""
              className={classes.textfield}
              label="อาชีพ"
              InputLabelProps={{
                className: classes.selectInput,
              }}
              select
              helperText={
                formProps.errors.OccupationId &&
                formProps.errors.OccupationId.message
              }
              error={!!formProps.errors.OccupationId}
            >
              {Occupations.map(
                (Occupation: OccupationsProps, index: number) => (
                  <MenuItem key={index} value={Occupation.id}>
                    {Occupation.name}
                  </MenuItem>
                )
              )}
            </TextField>
          }
          name="OccupationId"
          rules={{ required: "กรุณาเลือกอาชีพ" }}
          control={formProps.control}
          defaultValue=""
        />

        <FormControl fullWidth>
          <TextField
            fullWidth
            label="ตำแหน่ง"
            name="jobTitle"
            variant="outlined"
            className={classes.textfield}
            InputProps={{
              className: classes.input,
            }}
            inputRef={formProps.register}
            helperText={
              formProps.errors.jobTitle && formProps.errors.jobTitle.message
            }
            error={!!formProps.errors.jobTitle}
          />
          <TextField
            fullWidth
            label="ชื่อหน่วยงาน"
            name="workPlace"
            inputRef={formProps.register}
            variant="outlined"
            className={classes.textfield}
            InputProps={{
              className: classes.input,
            }}
            helperText={
              formProps.errors.workPlace && formProps.errors.workPlace.message
            }
            error={!!formProps.errors.workPlace}
          />
        </FormControl>
      </FormControl>
    </>
  );
}
