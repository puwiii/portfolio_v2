import React from "react";
import GlobalStyles from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { Navbar } from "./components";

import { lightTheme, darkTheme } from "./components/themes";
import { useStateValue } from "./context/StateProvider";
import { THEME_STATE } from "./context/reducer";
import Home from "./pages/HomePage/Home";

const App = () => {
  const [{ theme }] = useStateValue();

  return (
    <ThemeProvider theme={theme === THEME_STATE.LIGHT ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
