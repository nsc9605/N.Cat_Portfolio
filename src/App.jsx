import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navtabs from "./components/Nav/Navtabs";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio/index";
import Contact from "./pages/Contact/index";
import Footer from "./components/Footer/Footer";
import './index.css';

function App() {
    return (
      <Router>
          <Navtabs />
          <Header />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
      </Router>
    );
  }

export default App;
