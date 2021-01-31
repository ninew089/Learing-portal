import React, { useEffect } from "react";
import * as actions from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { Toolbar, Grid, CircularProgress } from "@material-ui/core";
import Edit from "./Edit";

import * as actionsInfo from "modules/infomation/actions";

export default function Page() {
  const dispatch = useDispatch();

  useEffect(() => {
    const actionProfile = actions.loadGetProfile();
    dispatch(actionProfile);
    const action = actionsInfo.loadOccupations();
    dispatch(action);
    // eslint-disable-next-line
  }, []);

  const { data } = useSelector((state: any) => state.edit);

  return (
    <>
      {data.title !== undefined ? (
        <>
          <Toolbar />
          <Edit data={data} />
        </>
      ) : (
        <Grid container direction="row" justify="center" alignItems="center">
          <CircularProgress color="secondary" />
        </Grid>
      )}
    </>
  );
}
