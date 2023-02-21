import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* header.main-head>nav>h1#logo{Joe Teailor}+ul>li*3>a[href=""]^^^div.burger>span.line$*3 */}
      <header className="main-head">
        <nav>
          <h1 id="logo">Lorem, ipsum.</h1>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="burger">
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </header>
    </div>
  );
}

export default App;
