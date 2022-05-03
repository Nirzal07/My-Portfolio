import React, { useState } from "react";
import studio from "../img/studio.jpg";
import port from "../img/portfolio.jpg";
import imagegallery from "../img/imagegallery.jpg";
import nirjan from "../img/nirjan.PNG";
import kaamxa from "../img/kaamxa.jpg";
import h2h from "../img/h2h.jpg";
import freelancing from "../img/freelancing.jpg";
import bhumi from "../img/bhumi.jpg";
import techwizz from "../img/techwizz.jpg";
import idea from "../img/idea.PNG";

export const Portfolio = ({ id }) => {
  return (
    <>
      <p className="section-title" id={id}>
        My Portfolio
      </p>

      <section className="portfolio">
        <div className="portfolio-inner">
          <a target="_blank" href="https://freelancing-three.vercel.app/">
            <div className="each-portfolio">
              <img src={freelancing} className="portfolio-image" />
              <p className="portfolio-title"> Freelancing Website </p>
            </div>
          </a>
          <a target="_blank" href="https://kaamxa.netlify.app/">
            <div className="each-portfolio">
              <img src={kaamxa} className="portfolio-image" />
              <p className="portfolio-title"> Job Portal </p>
            </div>
          </a>
          <a target="_blank" href="https://techwizz.netlify.app/">
            <div className="each-portfolio">
              <img src={techwizz} className="portfolio-image" />
              <p className="portfolio-title"> Web Dev Agency </p>
            </div>
          </a>
        </div>
        <div className="portfolio-inner">
          <a target="_blank" href="https://idea100studios.com/">
            <div className="each-portfolio">
              <img src={studio} className="portfolio-image" />
              <p className="portfolio-title"> Production House </p>
            </div>
          </a>
          <a target="_blank" href="https://hearttoheart.com.np/">
            <div className="each-portfolio">
              <img src={h2h} className="portfolio-image" />
              <p className="portfolio-title"> Healthcare </p>
            </div>
          </a>
          <a target="_blank" href="https://bhumisuppliers.com.np/">
            <div className="each-portfolio">
              <img src={bhumi} className="portfolio-image" />
              <p className="portfolio-title"> Machinary Production </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};
