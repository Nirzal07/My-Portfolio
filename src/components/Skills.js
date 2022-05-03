import React from "react";
import uiux from "../img/uiux.png";
import backend from "../img/backend.png";
import seo from "../img/seo.png";
import python from "../img/python.png";
import git from "../img/git.png";
import js from "../img/js.png";
import django from "../img/django.png";
import react from "../img/react.png";
import next from "../img/next.png";
import firebase from "../img/firebase.png";
import html from "../img/html.png";
import css from "../img/css.png";
import mui from "../img/mui.png";
import bootstrap from "../img/bootstrap.png";
import dart from "../img/dart.png";
import flutter from "../img/flutter.png";
import wordpress from "../img/wordpress.png";
import linux from "../img/linux.png";

export const Skills = ({ id }) => {
  return (
    <>
      <p className="section-title" id={id}>
        My Skills
      </p>

      <section className="skills">
        <div className="pl">
          <img src={python} />
          <img src={js} />
          <img src={dart} />
        </div>
        <div className="frameworks">
          <img src={react} />
          <img src={django} />
          <img src={next} />
          <img src={flutter} />
        </div>
        <div className="libraries">
          <img src={mui} />
          <img src={bootstrap} />
          <img src={html} />
          <img src={css} />
        </div>
        <div className="other-skills">
          <img src={firebase} />
          <img src={wordpress} />
          <img src={git} />
          <img src={linux} />
        </div>
      </section>
    </>
  );
};

{
  /* <div className='skill'>
<div className='skill-title'> <p>HTML</p> <p>90%</p> </div>
<div className='html blue-line'></div>
<div className='white-line'></div>
</div>
<div className='skill'>
<div className='skill-title'> <p>CSS</p> <p>85%</p> </div>
<div className='css blue-line'></div>
<div className='white-line'></div>
</div>
<div className='skill'>
<div className='skill-title'> <p>JAVASCRIPT</p> <p>85%</p> </div>
<div className='javascript blue-line'></div>
<div className='white-line'></div>
</div>
<div className='skill'>
<div className='skill-title'> <p>REACT</p> <p>80%</p> </div>
<div className='html blue-line'></div>
<div className='white-line'></div>
</div>
<div className='skill'>
<div className='skill-title'> <p>PYTHON</p> <p>100%</p> </div>
<div className='python blue-line'></div>
<div className='white-line'></div>
</div>
<div className='skill'>
<div className='skill-title'> <p>DJANGO</p> <p>95%</p> </div>
<div className='django blue-line'></div>
<div className='white-line'></div>
</div>
<div className='skill'>
<div className='skill-title'> <p>MYSQL</p> <p>85%</p> </div>
<div className='mysql blue-line'></div>
<div className='white-line'></div>
</div> */
}
