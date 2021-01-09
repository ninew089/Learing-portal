import React from "react";
import Layout from "./modules/ui/components/Layout";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Admin from "./modules/adminPortal/components/LoginAdmin";
import AdminRoute from "./modules/adminPortal/components/AdminLayout";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from "react-redux";
import configureStore, { history } from "store/configureStore";
import "assets/css/font.css";
import "assets/css/bg.css";
import PriveRouterAdmin from "auth/PrivateRouterAdmin"
import CssBaseline from "@material-ui/core/CssBaseline";

import meta from "assets/logo/logo2.png"

export default function APP() {


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
      MuiFab: {
        root: {
          boxShadow: 'none'
        }
      },
    },
  });
  const store = configureStore();

  return (
    <HelmetProvider>

      <Provider store={store}>
        <Helmet>
          {/* Primary Meta Tags */}
          <title>OCSC Learning Portal</title>
          <meta name="title" content="OCSC Learning Portal" />
          <meta
            name="description"
            content="เรียนออนไลน์ฟรี ที่สำนักงาน ก.พ. เพราะเราเชื่อว่าทุกคนมีสิทธิที่จะเรียนรู้ มาร่วมกันฝึกทักษะทางความคิด ความสามารถ และสติปัญญา เพื่อพัฒนาศักยภาพ ของตนเองได้ที่ OCSC Learning Platform"
          />
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://learn.ocsc.info/learning-portal"
          />
          <meta property="og:title" content="OCSC Learning Portal" />
          <meta
            property="og:description"
            content="เรียนออนไลน์ฟรี ที่สำนักงาน ก.พ. เพราะเราเชื่อว่าทุกคนมีสิทธิที่จะเรียนรู้ มาร่วมกันฝึกทักษะทางความคิด ความสามารถ และสติปัญญา เพื่อพัฒนาศักยภาพ ของตนเองได้ที่ OCSC Learning Platform"
          />
          <meta property="og:image" content={meta} />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://learn.ocsc.info/learning-portal"
          />
          <meta property="twitter:title" content="OCSC Learning Portal" />
          <meta
            property="twitter:description"
            content="เรียนออนไลน์ฟรี ที่สำนักงาน ก.พ. เพราะเราเชื่อว่าทุกคนมีสิทธิที่จะเรียนรู้ มาร่วมกันฝึกทักษะทางความคิด ความสามารถ และสติปัญญา เพื่อพัฒนาศักยภาพ ของตนเองได้ที่ OCSC Learning Platform"
          />
          <meta property="twitter:image" content={meta} />
        </Helmet>

        <ConnectedRouter history={history}>

          <Switch>
            <PriveRouterAdmin path="/learning-portal/admin/main" component={AdminRoute} />

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
    </HelmetProvider>
  );
}
