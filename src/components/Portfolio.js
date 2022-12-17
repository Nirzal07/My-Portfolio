import React, { useState } from "react";
import studio from "../img/studio.jpg";
import port from "../img/portfolio.jpg";
import imagegallery from "../img/imagegallery.jpg";
import nirjan from "../img/nirjan.PNG";
import kaamxa from "../img/kaamxa.jpg";
import h2h from "../img/h2h.jpg";
import freelancing from "../img/freelancing.jpg";
import bhumi from "../img/bhumi.jpg";
import idea from "../img/idea.PNG";
import SectionTitle from "./Common/SectionTitle";
import lamaandweidt from "../img/portfolio/lamaandweidt.png";
import hearttoheart from "../img/portfolio/hearttoheart.png";
import techwizz from "../img/portfolio/techwizz.png";

export const Portfolio = ({ id }) => {
  const portfolios = [
    ["L&W Consulting", "https://lamaweidt-consulting.com", lamaandweidt],
    ["Heart to Heart Health Care", "https://hearttoheart.com.np", hearttoheart],
    ["Techwizz", "https://techwizz.netlify.app", techwizz],
  ];
  return (
    <section className="portfolio">
      <SectionTitle title="Projects" />

      <div className="grid md:grid-cols-3 gap-y-8 gap-x-4">
        {portfolios.map((portfolio, index) => (
          <div className="hover:-translate-y-2 duration-300">
            <a target="_blank" className="hover:text-white" href={portfolio[1]}>
              <img src={portfolio[2]} className="rounded-lg" />
              <p className="font-medium mt-2 text-[22px] text-white text-center">
                {portfolio[0]}
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
