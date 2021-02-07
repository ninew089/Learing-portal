import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import {MenuItem,ListItemIcon,ListItemText} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 240,
    },
    dot: {
      height: "10px",
      width: "10px",
      borderRadius: "50%",
      display: "inline-block",
      marginLeft: 10,
      marginRight: 4,
    },
    select:{
        "&.MuiSelect-selectMenu":{
            display:"inline-flex"
        }
    }
  
  })
);

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { platform } = useSelector((state: any) => state.course);
  const [value, setValue] = useState<any>("");


  useEffect(() => {
    const action = actions.paltform();
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
        setValue(event.target.value)
        const action = actions.selectpaltform(event.target.value)
        dispatch(action);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
        {platform?.lenght!==0 &&
        

       
      <FormControl className={classes.formControl}>
        <InputLabel>เลือกหน่วยงาน</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
          value={value}
          defaultValue="ทั้งหมด"
 
        >
          <MenuItem         value={"ทั้งหมด"}>ทั้งหมด</MenuItem>
          {platform.map((item: any, index: number) => (
            <MenuItem value={item.officialName} key={index} >
                     <ListItemIcon>
                     <div
                    style={{
                      backgroundImage: `url('${item.thumbnail}`,
                      backgroundSize: "cover",
                      padding: "10px",
                      backgroundPosition: " center center",
                      margin:8
              
                    }}
                  />  
          </ListItemIcon>
          <ListItemText primary=         {item.officialName} />


            </MenuItem>
          ))}
       
        </Select>
      </FormControl>
}
    </div>
  );
}
