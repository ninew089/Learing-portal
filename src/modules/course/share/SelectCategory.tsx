import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import { MenuItem, ListItemIcon, ListItemText } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import { useHistory } from "react-router-dom";
import FiberManualRecordRounded from "@material-ui/icons/FiberManualRecordRounded";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    dot: {
      height: "10px",
      width: "10px",
      borderRadius: "50%",
      display: "inline-block",
      marginLeft: 10,
      marginRight: 4,
    },
  })
);

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { categories, colorName } = useSelector((state: any) => state.course);
  const [value, setValue] = useState<any>("");
  const history = useHistory();

  useEffect(() => {
    const action = actions.loadCourseCategory();
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    const categoryValue = event.target.value;
    switch (event.target.value) {
      case -2:
        setValue(-2);
        history.push("/learning-portal/courses");

        break;
      case -1:
        setValue(-1);
        history.push("/learning-portal/curriculum?category=หลักสูตร");

        break;

      default:
        setValue(event.target.value);
        history.push(
          `/learning-portal/course?category=${categoryValue.id}&name=${categoryValue.name}`
        );
        break;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      {categories.length !== 0 && (
        <FormControl className={classes.formControl}>
          <InputLabel>เลือกหมวดหมู่</InputLabel>

          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            onChange={handleChange}
            value={value}
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "320px",
            }}
          >
            <MenuItem value={-2} style={{ whiteSpace: "normal" }}>
              <ListItemText primary={"ทังหมด"} />
            </MenuItem>
            {categories.map((item: any, index: number) => (
              <MenuItem value={item} key={index}>
                <ListItemIcon>
                  <FiberManualRecordRounded
                    style={{
                      color:
                        colorName[0][
                          item.name !== undefined ? item.name : "#222"
                        ],
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  style={{ whiteSpace: "normal" }}
                />
              </MenuItem>
            ))}
            <MenuItem value={-1} style={{ whiteSpace: "normal" }}>
              <ListItemIcon>
                <FiberManualRecordRounded
                  style={{
                    color: "#f9b122",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={"หลักสูตร"} />
            </MenuItem>
          </Select>
        </FormControl>
      )}
    </div>
  );
}
