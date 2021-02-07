import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Tabs,Tab,Avatar} from "@material-ui/core";


import axios from "axios";
import Dialog from "./Dialog";
import { appleTabsStylesHook } from '@mui-treasury/styles/tabs';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 8,
    width: "100%",
  },
  rounded: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function VariantAvatars() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState<any>([]);
  const tabsStyles = appleTabsStylesHook.useTabs();
  const tabItemStyles = appleTabsStylesHook.useTabItem();
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("/Platforms");
      setData(data);
    };
    fetch();
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <Tabs
          value={value}
          classes={tabsStyles}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          TabIndicatorProps={{
            style: {
              background: "none",
            },
          }}
          indicatorColor={undefined}
          textColor="primary"
        >
          {data.map((item: any, index: number) => (
            <Tab
              key={index}
              classes={tabItemStyles}
              onClick={handleClickOpen}
              icon={
                <Avatar alt="Remy Sharp" src={item.thumbnail}  className={classes.rounded} />
           
              }
            />
          ))}
        </Tabs>
      </div>
      <Dialog
        open={open}
        setOpen={setOpen}
        data={data !== undefined ? data[value] : null}
      />
    </>
  );
}
