import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import "./i18n";

function App() {
  const theme = useTheme();

  React.useEffect(() => {}, []);
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
