import React from 'react'
import Layout from './modules/ui/components/Layout'
import Admin from './modules/adminPortal/components/LoginAdmin'
import AdminRoute from './modules/adminPortal/components/AdminLayout'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import './assets/css/fonts/font.css'
export default function APP() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Prompt', 'sans-serif'].join(','),
    },
    overrides: {
      MuiTab: {
        root: {
          minWidth: 100,
          '@media (min-width: 0px)': {
            minWidth: 80,
          },
        },
      },
    },
  })
  const store = configureStore()

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/learning-portal/admins/main">
              <ThemeProvider theme={theme}>
                <AdminRoute></AdminRoute>
              </ThemeProvider>
            </Route>
            <Route exact path="/learning-portal/admins">
              <ThemeProvider theme={theme}>
                <Admin/>
              </ThemeProvider>
            </Route>
            <Route path="/learning-portal">
              <ThemeProvider theme={theme}>
                <Layout />
              </ThemeProvider>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}
