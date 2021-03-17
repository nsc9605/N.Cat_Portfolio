import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Home from "./components/pages/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
// import Contact from "./components/Contact/Contact";
import './App.css';

function App() {
    return (
      <Router>
        <div>
          <Navbar />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/about" component={About} />
          <Route exact path="/Project" component={Project} />
          {/* <Route path="/contact" component={Contact} /> */}
        </div>
      </Router>
    );
  }

export default App;
