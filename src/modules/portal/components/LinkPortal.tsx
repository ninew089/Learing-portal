import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Tabs, Tab, Avatar } from "@material-ui/core";
//@ts-ignore
import SwipeableViews from "react-swipeable-views";
import TabPanel from "./TabPlanel";
import axios from "axios";
import Dialog from "./Dialog";
import { appleTabsStylesHook } from "@mui-treasury/styles/tabs";

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
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 900,
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
}));

export default function VariantAvatars() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState<any>([]);
  const theme = useTheme();
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
          style={{ backgroundColor: "transparent" }}
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
                <Avatar
                  alt="Remy Sharp"
                  src={item.thumbnail}
                  className={classes.rounded}
                />
              }
            />
          ))}
        </Tabs>
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
              <Dialog open={open} setOpen={setOpen} data={item} />
            </TabPanel>
          ))}
        </SwipeableViews>
      </div>
    </>
  );
}

/*

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);



  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (


      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
      </SwipeableViews>

  );
}
*/
