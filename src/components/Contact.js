import React from "react";

export const Contact = ({ id }) => {
  return (
    <>
      <p className="section-title" id={id}>
        Contact Me
      </p>
      <section className="contact">
        <div className="inner-contact">
          <p className="top">You've got a project?</p>
          <p className="mid">Let's work together</p>
          <address className="contact-options">
            <div className="phone">
              <a href="tel:+9779860735798">
              <i  style={{fontSize:2+ 'em'}} class="fas fa-phone-alt"></i> <br />
                  +977-9860735798 
              </a>
            </div>
            <div className="email">
              <a href="mailto:nirjalmahat17@gmail.com">
              <i style={{fontSize:2+ 'em'}} class="fas fa-envelope"></i> <br/>
                nirjalmahat17@gmail.com
              </a>
            </div>
          </address>
          <button>
            {" "}
            <a href="tel:+9779860735798"> Hire Me </a>
          </button>
        </div>
      </section>
    </>
  );
};
