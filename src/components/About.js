import React from "react";
import about from "../img/about.png";
import SectionTitle from "./Common/SectionTitle";

export const About = ({ id }) => {
  return (
    <>
      <section>
        <div className="md:hidden">
          <SectionTitle title="About Me" />
        </div>

        <div className="rounded-lg flex justify-between flex-col md:flex-row py-4 px-4 md:px-8 gap-x-8 bg-secondaryBg items-center">
          <img src={about} width="500px" height="400px" />
          <div className="max-w-[800px]">
            <div className="hidden md:block">
              <SectionTitle title="About Me" />
            </div>{" "}
            <p className="text-[17px] md:text-[18px] text-white font-normal text-center md:text-justify">
              Greetings Folks, I am Nirjal Mahat. I’m 20 years of age. I have a
              serious passion for WebDevelopment and Coding as a whole. My
              fields of expertise include UI/UX Design, Frontend Development,
              Backend Development and Blockchain Technologies.
              <br />
              <br />
              My speciality you ask? I can convert your dream project into a
              reality.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
