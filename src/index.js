import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
    fontWeightBold: 900,
  },
  palette: {
    type: "light",
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#4e4e4e",
    },
    error: {
      main: "#bb0f03",
      light: "#d50000",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ThemeProvider>,

  document.getElementById("root")
);
