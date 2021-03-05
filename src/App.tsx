import React from "react";
import Layout from "modules/ui/components/Layout";

import Admin from "modules/admin/components/Login";
import AdminRoute from "modules/admin/ui/AdminLayout";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore, { history } from "store/configureStore";
import "assets/css/font.css";
import PriveRouterAdmin from "auth/PrivateRouterAdmin";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Prompt", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#ffc107",
      light: "#f5f5f5",
      dark: "#142840",
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
    MuiFab: {
      root: {
        boxShadow: "none",
      },
    },
    MuiSelect: {
      selectMenu: {
        display: "inline-flex",
      },
    },
  },
});
export default function APP() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <PriveRouterAdmin
            path="/learning-portal/admin/main"
            component={AdminRoute}
          />

          <Route exact path="/learning-portal/admin">
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Admin />
            </ThemeProvider>
          </Route>
          <Route path="/learning-portal">
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Layout />
            </ThemeProvider>
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}
