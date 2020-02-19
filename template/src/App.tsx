import React from "react";
import "./App.css";
import Routes from "./app/core/routes/Routes";
import { ThemeProvider } from "@material-ui/core";
import theme from "./app/config/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
