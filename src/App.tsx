import React, { useState } from "react";
import youtube from "./assets/img/youtube-symbol 1.svg";
import instagram from "./assets/img/instagram 1.svg";
import twitter from "./assets/img/twitter 1.svg";
import "./App.scss";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="App">
      {/* header.main-head>nav>h1#logo{Joe Teailor}+ul>li*3>a[href=""]^^^div.burger>span.line$*3 */}
      <header className="main-head">
        <nav>
          <h1 id="logo">Lorem, ipsum.</h1>
          <ul className={isOpenMenu ? "nav-links nav-open" : "nav-links"}>
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
          <div
            className={isOpenMenu ? " burger toggle" : "burger"}
            onClick={() => {
              setIsOpenMenu(!isOpenMenu);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </nav>
      </header>
      <main></main>
      <footer>
        <h4> Lorem, ipsum. &copy; 2023</h4>
        <ul>
          <li>
            <a href="#">
              <img src={youtube} alt="youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
