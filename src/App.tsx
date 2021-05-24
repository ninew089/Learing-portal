import React from "react";
import LayoutRoute from "modules/ui/components/Layout";

import Admin from "modules/admin/components/Login";
import AdminRoute from "modules/admin/ui/AdminLayout";
import { ThemeProvider } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore, { history } from "store/configureStore";
import "assets/css/font.css";
import PriveRouterAdmin from "auth/PrivateRouterAdmin";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "./theme";

export default function APP() {
  const store = configureStore();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <PriveRouterAdmin
              path="/learning-portal/admin/main"
              component={AdminRoute}
            />
            <Route exact path="/learning-portal/admin" component={Admin} />
            <LayoutRoute />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  );
}
