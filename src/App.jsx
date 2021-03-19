import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio/index";
import Contact from "./pages/Contact/index";
// import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          </Switch>
          {/* <Route path="/resume" component={Resume} /> */}
          <Footer />
        </div>
      </Router>
    );
  }

export default App;
