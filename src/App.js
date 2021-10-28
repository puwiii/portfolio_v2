import React from "react";
import GlobalStyles from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { FloatLinks, Navbar } from "./components";

import { lightTheme, darkTheme } from "./components/themes";
import { useStateValue } from "./context/StateProvider";
import { THEME_STATE } from "./context/reducer";
import Home from "./pages/HomePage/Home";
import Contact from "./pages/Contact";
import Timeline from "./pages/TimelinePage/Timeline";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [{ theme }] = useStateValue();

  return (
    <ThemeProvider theme={theme === THEME_STATE.LIGHT ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
        <ScrollToTop />
        <Navbar />
        <FloatLinks />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/timeline" component={Timeline} exact />
          <Route path="/projects" component={ProjectsPage} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
