import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <h1 className="uk-animation-slide-left">Nicole Catapano</h1>
      <div className="logo">
        <p>
          Full<span className="subtitle">Stack</span>Web
          <span className="subtitle">Developer</span>
        </p>
      </div>
    </div>
  );
}
export default Header;
