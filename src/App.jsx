import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navtabs from "./components/Nav/Navtabs";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio/index";
import Contact from "./pages/Contact/index";
// import Footer from "./components/Footer/Footer";
// import Container from "react-bootstrap/Container";
import './index.css';

function App() {
    return (
      <Router >
        <div>
          <Navtabs />
          <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          {/* <Footer /> */}
          </div>
      </Router>
    );
  }

export default App;
