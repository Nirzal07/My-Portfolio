import React from "react";
import js from "../img/skills/js.png";
import python from "../img/skills/python.png";
import solidity from "../img/skills/solidity.png";
import wp from "../img/skills/wp.png";
import ts from "../img/skills/ts.png";
import git from "../img/skills/git.png";
import bootstrap from "../img/skills/bootstrap.png";
import mui from "../img/skills/mui.png";
import next from "../img/skills/next.png";
import django from "../img/skills/django.png";
import react from "../img/skills/react.png";
import tailwind from "../img/skills/tailwind.png";
import sass from "../img/skills/sass.png";
import linux from "../img/skills/linux.png";
import figma from "../img/skills/figma.svg";
import firebase from "../img/skills/firebase.png";

import SectionTitle from "./Common/SectionTitle";

export const Skills = ({ id }) => {
  // add web3 like Hardhat, ethersjs, web3js

  const skills = {
    Languages: [
      [js, "Javascript"],
      [python, "Python"],
      [solidity, "Solidity"],
      [ts, "Typescript"],
    ],
    Frameworks: [
      [react, "ReactJS"],
      [next, "NextJS"],
      [django, "Django"],
      [firebase, "Firebase"],
    ],
    "UI Libraries": [
      [tailwind, "Tailwind CSS"],
      [mui, "Material UI"],
      [bootstrap, "Bootstrap"],
      [sass, "SASS"],
    ],
    Others: [
      [figma, "Figma"],
      [wp, "Wordpress"],
      [linux, "Linux"],
      [git, "Git"],
    ],
  };
  return (
    <section>
      <SectionTitle title="Skills" />
      {Object.entries(skills).map(([key, value], index) => (
        <div className="flex flex-col md:flex-row gap-y-2 mb-16 md:mb-4 gap-x-8 w-full items-center justify-between">
          <h4 className="font-semibold w-full flex items-center justify-center rounded-lg text-[24px] bg-secondaryBg text-white md:w-[250px] md:h-[180px] h-[140px]">
            {key}
          </h4>
          <div className="grid md:grid-cols-4 py-8 md:py-2 gap-y-8 rounded-lg w-full bg-secondaryBg/50 md:h-[180px] h-[680px] items-center justify-center md:justify-around">
            {value.map((item, index) => (
              <div className="md:w-[150px]">
                <img
                  src={item[0]}
                  className="h-[80px] object-contain mb-2 mx-auto"
                />
                <p className="text-white text-center text-[18px]">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
