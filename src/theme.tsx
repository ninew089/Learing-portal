import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
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
    MuiSelect: {
      selectMenu: {
        display: "inline-flex",
      },
    },
  },
});
