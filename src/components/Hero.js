import React from "react";
import hero from "../img/hero.png";

import fb from "../img/socials/fb.svg";
import linkedn from "../img/socials/linkedn.svg";
import github from "../img/socials/github.png";
import arrow from "../img/svgs/down-arrow.svg";
import mail from "../img/svgs/mail.svg";

export const Hero = () => {
  const iconSize = "40px";
  return (
    <section className="flex items-center justify-between">
      <div className="">
        <p className="text-[20px] text-white">Hello, I'm</p>
        <p className="text-[60px] font-semibold text-green">Nirzal Mahat</p>
        <p className="text-[24px] font-semibold text-white">
          Your Friendly Neighbourhood Web Developer
        </p>
        <div className="flex gap-x-4 my-4 items-center">
          <button className="bg-green/90 hover:bg-green duration-300 border-2 border-green text-[20px] text-primaryBg py-2 px-4 rounded-full flex items-center gap-x-2">
            Download CV
            <img src={arrow} width={iconSize} height={iconSize} />
          </button>
          <button className="bg-transparent hover:bg-white duration-300 border-2 border-green text-[20px] text-green py-2 px-4 rounded-full flex items-center gap-x-2">
            Contact Now
            <img src={mail} width={iconSize} height={iconSize} />
          </button>
        </div>
        <div className="flex gap-x-4 items-center">
          <a href="" target="_blank">
            <img src={linkedn} width={iconSize} height={iconSize} />
          </a>
          <a href="" target="_blank">
            <img src={github} width={iconSize} height={iconSize} />
          </a>
          <a href="" target="_blank">
            <img src={fb} width={iconSize} height={iconSize} />
          </a>
        </div>
      </div>
      <div className="bg-green rounded-[100%] overflow-hidden">
        <img src={hero} alt="Nirzal" className="object-cover" />
      </div>
    </section>
  );
};
