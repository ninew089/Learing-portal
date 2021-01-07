import React from "react";
import Law from "./Main";
import Curriculum from "./TableCurriculum/index";
import SubCurriculum from "./TableSubCurriculum/index";
import Course from "./TableCourse/index";
import Progress from "./TableProgress/index";
import Person from "./Person/index";
import Reset from "./Reset";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CourseCertificate from "./TableCertificate";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";


export default function RouteAdmin() {
  const { path } = useRouteMatch();
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
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path={`${path}/reset`}>
          <Reset></Reset>
        </Route>
        <Route exact path={`${path}/person`}>
          <Person></Person>
        </Route>
        <Route exact path={`${path}/progress`}>
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
        <Route exact path={`${path}/coursecertificate`}>
          <CourseCertificate></CourseCertificate>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
