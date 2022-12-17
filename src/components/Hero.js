import React from "react";
import hero from "../img/hero.png";

import fb from "../img/socials/fb.svg";
import linkedn from "../img/socials/linkedn.svg";
import github from "../img/socials/github.png";
import arrow from "../img/svgs/down-arrow.svg";
import mail from "../img/svgs/mail.svg";
import cv from "../cv.pdf";
export const Hero = () => {
  const iconSize = "40px";
  return (
    <section className="flex items-center justify-between">
      <div className="w-full md:w-auto text-center md:!text-left">
        <p className="text-[14px] md:text-[20px] font-normal md:-mb-3 text-white">
          Hello, I'm
        </p>
        <p className="text-[40px] md:text-[64px]  md:-mb-1 font-semibold text-green">
          Nirjal Mahat
        </p>
        <div className="md:hidden block bg-green rounded-[100%] mx-auto w-[200px] md:w-auto overflow-hidden">
          <img src={hero} alt="Nirzal" className="object-cover" />
        </div>
        <p className="text-[17px] md:text-[25px] font-semibold text-white">
          Your Friendly Neighbourhood Web Developer
        </p>
        <div className="flex gap-x-4 my-4 justify-center md:justify-start items-center">
          <a href={cv} target="_blank">
            <button
              className="bg-green/90 hover:bg-green 
          duration-300 border-2 border-green text-[14px] md:text-[20px] text-primaryBg py-2 px-4 rounded-full flex items-center gap-x-2"
            >
              Download CV
              <img
                src={arrow}
                className="w-[25px] h-[25px] md:w-[40px] md:h-[40px]"
              />
            </button>
          </a>
          <a href="mailto:nirjalmahat17@gmail.com">
            <button className="bg-transparent text-green/80 border-green/80 duration-300 border-2 hover:border-green text-[14px] md:text-[20px] hover:text-green py-2 px-4 rounded-full flex items-center gap-x-2">
              Contact Now
              <img
                src={mail}
                className="w-[25px] h-[25px] md:w-[40px] md:h-[40px]"
              />
            </button>
          </a>
        </div>
        <div className="flex gap-x-4 justify-center md:justify-start items-center">
          <a
            href="https://www.linkedin.com/in/nirjal-mahat/"
            target="_blank"
            className="hover:-translate-y-1 duration-300"
          >
            <img src={linkedn} width={iconSize} height={iconSize} />
          </a>
          <a
            href="https://github.com/Nirzal07"
            target="_blank"
            className="hover:-translate-y-1 duration-300"
          >
            <img src={github} width={iconSize} height={iconSize} />
          </a>
          <a
            href="https://www.facebook.com/nirjal.mahat.9/"
            target="_blank"
            className="hover:-translate-y-1 duration-300"
          >
            <img src={fb} width={iconSize} height={iconSize} />
          </a>
        </div>
      </div>
      <div className="hidden md:block bg-green rounded-[100%] overflow-hidden">
        <img src={hero} alt="Nirzal" className="object-cover" />
      </div>
    </section>
  );
};
