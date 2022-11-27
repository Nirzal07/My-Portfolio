import React from "react";
import uiux from "../img/uiux.png";
import web3 from "../img/services/web.jpg";
import metamask from "../img/skills/metamask.png";
import solidity from "../img/skills/solidity.png";
import hardhat from "../img/skills/hardhat.png";
import backend from "../img/backend.png";
import seo from "../img/seo.png";
import SectionTitle from "./Common/SectionTitle";

export const Services = ({ id }) => {
  const services = [
    {
      image: web3,
      title: "Web3",
      desc: " I design well crafted and visually appaling Interface for your website/app that will take your customers on an amazing journey from the very first second of ",
      keySkills: [
        [metamask, "Metamask"],
        [solidity, "Solidity"],
        [hardhat, "Hardhat"],
      ],
    },
    {
      image: web3,
      title: "Web3",
      desc: " I design well crafted and visually appaling Interface for your website/app that will take your customers on an amazing journey from the very first second of ",
      keySkills: [[metamask, "Metamask"]],
    },
    {
      image: web3,
      title: "Web3",
      desc: " I design well crafted and visually appaling Interface for your website/app that will take your customers on an amazing journey from the very first second of ",
      keySkills: [[metamask, "Metamask"]],
    },
    {
      image: web3,
      title: "Web3",
      desc: " I design well crafted and visually appaling Interface for your website/app that will take your customers on an amazing journey from the very first second of ",
      keySkills: [[metamask, "Metamask"]],
    },
    {
      image: web3,
      title: "Web3",
      desc: " I design well crafted and visually appaling Interface for your website/app that will take your customers on an amazing journey from the very first second of ",
      keySkills: [[metamask, "Metamask"]],
    },
    {
      image: web3,
      title: "Web3",
      desc: " I design well crafted and visually appaling Interface for your website/app that will take your customers on an amazing journey from the very first second of ",
      keySkills: [[metamask, "Metamask"]],
    },
  ];

  return (
    <>
      <section>
        <SectionTitle title="Services" />
        <div className="flex justify-between flex-wrap gap-y-8">
          {services.map((service, index) => (
            <article className="flex w-[450px] flex-col items-center bg-secondaryBg text-center rounded-3xl">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-t-3xl p-1"
              />

              <div className="px-8 pt-4 mb-12">
                <h3 className="text-white font-semibold text-[32px] mb-3">
                  {service.title}
                </h3>
                <p className="text-[18px] text-white">{service.desc}</p>
              </div>
              {/* <div className="mb-4">
                <h5 className="text-white font-semibold mb-3">Tools</h5>
                <div className="flex gap-x-8">
                  {service?.keySkills.map((skill, index) => (
                    <div className="flex flex-col justify-center items-center">
                      <div className="w-[40px] h-[40px]">
                        <img
                          src={skill[0]}
                          alt={skill[1]}
                          className="object-contain mx-auto max-w-[100%] max-h-[100%]"
                        />
                      </div>
                      <p className="text-white text-[14px] mt-1">{skill[1]}</p>
                    </div>
                  ))}
                </div>
              </div> */}
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
