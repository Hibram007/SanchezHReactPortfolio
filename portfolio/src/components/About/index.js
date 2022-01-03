import React from "react";

function About() {
  return (
    <section className="about">
      <h1 id="about" className="px-1">About Me</h1>
      <div className="px-1">
        <img
          src={require("../../assets/images/1.jpg").default}
          alt="about-img my-2"
          className="self-portrait px-1"
        ></img>
        <p className="px-1">
            I am currently a student in the U of A coding bootcamp working towards becoming a full-stack web developer.I enjoy building classic cars, reading history, and practicing martial arts.
        </p>
        </div>
        </section>
  );
}

export default About;
