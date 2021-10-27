import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navtabs from "./components/Nav/Navtabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio/index";
import Contact from "./pages/Contact/index";
import ScrollButton from "./components/ScrollButton/ScrollButton"
import './index.css';

function App() {
    return (
      <Router >
        <div>
          <Navtabs />
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          <ScrollButton />
          </div>
      </Router>
    );
  }

export default App;
