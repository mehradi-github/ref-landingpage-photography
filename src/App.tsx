import React, { useState } from "react";
import instagram from "./assets/img/instagram 1.svg";
import twitter from "./assets/img/twitter 1.svg";
import "./App.scss";
import youtube from "./assets/img/youtube-symbol 1.svg";
import elena from "./assets/img/elena-joy.png";
import plant1 from "./assets/img/plant1.png";
import plant2 from "./assets/img/plant2.png";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpenMenu((current) => !current);
  };
  return (
    <div className="App">
      <header className="main-head">
        <nav>
          <h1 id="logo">Lorem, ipsum.</h1>
          <ul className={isOpenMenu ? "nav-links nav-open" : "nav-links"}>
            <li>
              <a href="#about" onClick={handleClick}>
                About
              </a>
            </li>
            <li>
              <a href="#work" onClick={handleClick}>
                Work
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleClick}>
                Contact
              </a>
            </li>
          </ul>
          <div
            className={isOpenMenu ? " burger toggle" : "burger"}
            onClick={handleClick}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-introduction flex">
            <h2>
              Lorem, ipsum.
              <br />
              Photography
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              corporis laborum nihil!
            </p>
            <a href="#gallery">Gallery</a>
          </div>
          <div className="hero-images">
            <img className="hero-elena" src={elena} alt="" />
            <img src={plant1} alt="" className="plant1 plant" />
            <img src={plant2} alt="" className="plant2 plant" />
          </div>
        </section>
      </main>
      <footer>
        <h4> Lorem, ipsum. &copy; 2023</h4>
        <ul>
          <li>
            <a href="#youtube">
              <img src={youtube} alt="youtube" />
            </a>
          </li>
          <li>
            <a href="#instagram">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="#twitter">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
