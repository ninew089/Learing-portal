import React from "react";
import { Button } from "@material-ui/core";
import { useHistory, useRouteMatch } from "react-router-dom";

import Routes from "./Router";

export default function ReportTable() {
  const history = useHistory();
  const { path } = useRouteMatch();
  const navTocourse = () => {
    history.push(`${path}`);
  };

  const navTocurriculum = () => {
    history.push(`${path}/curriculum`);
  };
  return (
    <>
      <Button onClick={navTocourse}>รายวิชา</Button>{" "}
      <Button onClick={navTocurriculum}>หลักสูตร</Button>
      <Routes />
    </>
  );
}
