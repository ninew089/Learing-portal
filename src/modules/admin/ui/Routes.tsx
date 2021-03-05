import React from "react";
import Law from "../components/Main/Main";
import Curriculum from "../components/TableCurriculum/page/index";
import SubCurriculum from "../components/TableSubCurriculum/page/index";
import Course from "../components/TableCourse/page/index";
import Progress from "../components/TableProgress/page/index";
import Person from "../components/Person/index";
import Reset from "../components/Reset/page/Reset";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CourseCertificate from "../components/TableCertificate/page";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Prompt", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#142840",
      light: "#f5f5f5",
    },
    secondary: {
      main: "#f9b122",
    },
  },
  overrides: {
    MuiTab: {
      root: {
        minWidth: 100,
        "@media (min-width: 0px)": {
          minWidth: 80,
        },
      },
    },
  },
});
export default function RouteAdmin() {
  const { path } = useRouteMatch();

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path={`${path}/reset`}>
          <Reset></Reset>
        </Route>
        <Route exact path={`${path}/person`}>
          <Person></Person>
        </Route>
        <Route path={`${path}/progress`}>
          <Progress></Progress>
        </Route>
        <Route exact path={`${path}/curriculm`}>
          <Curriculum></Curriculum>
        </Route>
        <Route exact path={`${path}/subcurriculum`}>
          <SubCurriculum></SubCurriculum>
        </Route>
        <Route exact path={`${path}/course`}>
          <Course></Course>
        </Route>
        <Route exact path={`${path}/course`}>
          <Law />
        </Route>
        <Route path={`${path}/coursecertificate`}>
          <CourseCertificate></CourseCertificate>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
