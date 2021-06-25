import React from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import hero from "../img/hero.png";
import insta from "../img/insta.png";
import fb from "../img/facebook.png";
import git from "../img/git.png";

export const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-left">
          <p className="top">
            <span className="typing">
              {" "}
              <Typed
                strings={[
                  "Hello",
                  "Namaste",
                  "Bonjour",
                  "Kon'nichiwa",
                  "Nĭhǎo",
                ]}
                typeSpeed={100}
                backSpeed={60}
                loop
              />
            </span>{" "}
            , I'm
          </p>
          <p className="middle">Nirzal Mahat</p>
          <p className="bottom">Your friendly neighbourhood Webdeveloper</p>
          <ul className="social">
            <li>
              <a target='_blank' href="https://www.facebook.com/nirjal.mahat.9">
                <img src={fb} />
              </a>
            </li>
            <li>
              <a target='_blank' href="https://www.instagram.com/its_nirzalmahat/">
                <img src={insta} />
              </a>
            </li>
            <li>
              <a target='_blank' href="https://github.com/Nirzal07">
                <img src={git} />
              </a>
            </li>
          </ul>
        </div>
        <div className="hero-right">
          <img src={hero} alt="Nirzal" className="hero-image" />
        </div>
      </section>
    </div>
  );
};
