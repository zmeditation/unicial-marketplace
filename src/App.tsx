import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Layout />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
