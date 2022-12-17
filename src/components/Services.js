import React from "react";
import web3 from "../img/services/web3.jpg";
import backend from "../img/services/backend.jpg";
import frontend from "../img/services/frontend.jpg";
import metamask from "../img/skills/metamask.png";
import solidity from "../img/skills/solidity.png";
import hardhat from "../img/skills/hardhat.png";
import SectionTitle from "./Common/SectionTitle";

export const Services = ({ id }) => {
  const services = [
    {
      image: frontend,
      title: "Frontend Development",
      desc: "I design and develop well crafted and visually appaling website that will take your customers on an amazing journey from the very first second of using it.",
      keySkills: [[metamask, "Metamask"]],
    },
    {
      image: backend,
      title: "Backend Development",
      desc: "With my backend skills I make client-focused, customer-centric website solutions that deliver tangible results on time and within budget.",
      keySkills: [[metamask, "Metamask"]],
    },
    {
      image: web3,
      title: "Web3",
      desc: "I write both SmartContracts as well as create interactive frontend for it. I can develop and handle all the necessary steps required to run a dApp.",
      keySkills: [
        [metamask, "Metamask"],
        [solidity, "Solidity"],
        [hardhat, "Hardhat"],
      ],
    },
  ];

  return (
    <>
      <section>
        <SectionTitle title="Services" />
        <div className="flex justify-between flex-wrap gap-y-8">
          {services.map((service, index) => (
            <article className="flex w-[450px] flex-col items-center bg-secondaryBg text-center rounded-xl">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-t-xl p-1"
              />

              <div className="px-8 pt-4 mb-12">
                <h3 className="text-white font-semibold text-[30px] mb-3">
                  {service.title}
                </h3>
                <p className="text-[18px] font-normal text-white/80">
                  {service.desc}
                </p>
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
