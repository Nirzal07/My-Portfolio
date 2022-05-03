import React from "react";
import about from "../img/about.jpg";

export const About = ({ id }) => {
  return (
    <>
      <p className="section-title" id={id}>
        Let me introduce myself
      </p>
      <section>
        <div className="about">
          <img src={about} className="about-image" />
          <div className="about-inner">
            <p className="intro">
              Greetings Folks, My name is Nirzal Mahat. I’m 21 years of age. I
              have a serious passion for WebDevelopment and Coding as a whole.
              My fields of expertise include UI/UX Design, Frontend Development,
              Backend Development, Database Management and Graphics Designing.
              My speciality you ask? I can convert your dream project into a
              reality.{" "}
            </p>
            <div className="extra-about-info">
              <div className="experience">
                <p className="extra-about-heading">Experience</p>
                <p className="extra-about-text">2 years+</p>
              </div>
              <div className="clients">
                <p className="extra-about-heading">Clients</p>
                <p className="extra-about-text">6+</p>
              </div>
              <div className="projects">
                <p className="extra-about-heading">Projects</p>
                <p className="extra-about-text">10+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
