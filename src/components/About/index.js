import React from "react";
import photo from "../../assets/images/About.png";

function About() {
  return (
    <section className="about">
      <h1 id="about" className="px-1">About Me</h1>
      <div className="px-1">
        <img
          src={photo}
          alt="about-img"
          className="self-portrait px-1"
        ></img>
        <p className="px-1">
            I am currently a student in the U of A coding bootcamp working towards becoming a full-stack web developer. I enjoy building classic cars, reading history, and practicing martial arts.
        </p>
        </div>
        </section>
  );
}

export default About;
