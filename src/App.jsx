import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
// import Home from "./components/pages/Home";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio/index";
import Contact from "./pages/Contact/index";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }

export default App;
