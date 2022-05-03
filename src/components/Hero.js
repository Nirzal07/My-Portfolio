import React from "react";
import hero from "../img/hero.png";
import insta from "../img/insta.png";
import fb from "../img/facebook.png";
import github from "../img/github.png";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="top">Hello, I'm</p>
        <p className="middle">Nirzal Mahat</p>
        <p className="bottom">Your Friendly Neighbourhood Web Developer</p>
        <ul className="social">
          <li>
            <a target="_blank" href="https://www.facebook.com/nirjal.mahat.9">
              <img src={fb} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/its_nirzalmahat/"
            >
              <img src={insta} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Nirzal07">
              <img src={github} />
            </a>
          </li>
        </ul>
      </div>
      <div className="hero-right">
        <img src={hero} alt="Nirzal" className="hero-image" />
      </div>
    </section>
  );
};
