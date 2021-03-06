import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
//@ts-ignore
import SwipeableViews from "react-swipeable-views";
import TabPanel from "./TabPlanel";
import axios from "axios";
import Dialog from "./Dialog";
import { twitterTabsStylesHook } from "@mui-treasury/styles/tabs";
import Skeleton from "@material-ui/lab/Skeleton";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 8,
    width: "100%",
  },
  rounded: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: 360,
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  content: {
    fontSize: 14,
    fontWeight: 500,
    alignContent: "center",
  },
  icon: {
    fontSize: 24,
    margin: 4,
  },
  center: {
    alignContent: "center",
  },
  button: {
    "&:hover": {
      color: "white",
    },
  },
}));

export default function VariantAvatars() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState<any>([]);
  const theme = useTheme();
  const tabsStyles = twitterTabsStylesHook.useTabs();
  const tabItemStyles = twitterTabsStylesHook.useTabItem();
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
      {data.length === 0 ? (
        <Skeleton
          width={"80vw"}
          height={"100px"}
          style={{ marginBottom: 10 }}
        />
      ) : (
        <Tabs
          value={value}
          classes={tabsStyles}
          style={{ backgroundColor: "transparent" }}
          onChange={handleChange}
          variant="scrollable"
        >
          {data.map((item: any, index: number) => (
            <Tab
              key={index}
              classes={tabItemStyles}
              onClick={handleClickOpen}
              icon={
                <img
                  width="56px"
                  height="56px"
                  alt={item.name}
                  src={item.thumbnail}
                  className={classes.rounded}
                />
              }
            />
          ))}
        </Tabs>
      )}
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChange}
      >
        {data.map((item: any, index: number) => (
          <TabPanel
            value={value}
            index={index}
            dir={theme.direction}
            key={index}
          >
            <Dialog
              open={open}
              setOpen={setOpen}
              data={item}
              classes={classes}
            />
          </TabPanel>
        ))}
      </SwipeableViews>
    </>
  );
}
