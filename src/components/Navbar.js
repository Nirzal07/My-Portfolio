import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <li>
        {" "}
        <a href="#home"> Home </a>{" "}
      </li>
      <li>
        <a href="#about"> About </a>
      </li>
      <li>
        <a href="#skills"> Skills </a>
      </li>
      <li>
        <a href="#portfolio"> Portfolio </a>
      </li>
      <li>
        {" "}
        <button>
          {" "}
          <a href="tel:+9779860735798"> Hire Me</a>{" "}
        </button>{" "}
      </li>
    </nav>
  );
};
