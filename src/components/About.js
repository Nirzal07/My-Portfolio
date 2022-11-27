import React from "react";
import about from "../img/about.png";
import SectionTitle from "./Common/SectionTitle";

export const About = ({ id }) => {
  return (
    <>
      <section>
        <div className="rounded-lg flex justify-between py-4 px-8 gap-x-8 bg-secondaryBg items-center">
          <img src={about} width="500px" height="400px" />
          <div className="max-w-[800px]">
            <SectionTitle title="About Me" />
            <p className="text-[20px] text-white font-normal text-justify">
              Greetings Folks, My name is Nirzal Mahat. I’m 21 years of age. I
              have a serious passion for WebDevelopment and Coding as a whole.
              My fields of expertise include UI/UX Design, Frontend Development,
              Backend Development, Database Management and Graphics Designing.
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
