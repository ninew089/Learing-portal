import React, { useEffect,useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../actions"
import { useHistory } from 'react-router-dom';
import colorCategory from "utils/categoryColorCode"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            display: 'block',
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
    }),
);

export default function ControlledOpenSelect() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const { categories } = useSelector((state: any) => state.course);
    const [value,setValue]= useState<any>('')
    const history = useHistory()

    useEffect(() => {
        const action = actions.loadCourseCategory()
        dispatch(action)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        switch (event.target.value) {
            case 0:
                setValue(0)
                history.push("/learning-portal/courses")
           
                break;
            case -1:
                setValue(-1)
                history.push("/learning-portal/curriculum?category=หลักสูตร")
               
                break;

            default:
                setValue(event.target.value)
                history.push(`/learning-portal/course?category=${event.target.value}`)

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

            <FormControl className={classes.formControl}>
                <InputLabel>เลือกหมวดหมู่</InputLabel>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    onChange={handleChange}
                    value={value}
                >
                    <MenuItem value={0}>
               
ทังหมด
                   
                    </MenuItem>
                    {categories.map((item: any, index: number) =>
                        <MenuItem value={index + 1} key={index}>
                            <div className={classes.dot} style={{ background: colorCategory(index + 1) }} />  {item.name}
                        </MenuItem>
                    )}
                    <MenuItem value={-1} > <div className={classes.dot} style={{ background: colorCategory(9) }} /> หลักสูตร</MenuItem>

                </Select>
            </FormControl>
        </div>
    );
}
