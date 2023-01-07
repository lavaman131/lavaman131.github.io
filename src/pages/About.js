import React from "react";
import profile_img from "../imgs/profile_about_me.webp";

const About = () => (
  <div className="flex flex-col h-screen">
    <div className="flex justify-center items-center">
      <img
        alt="Alex Lavaee"
        className="w-full sm:w-144"
        src={profile_img}
      ></img>
    </div>
    <div className="flex flex-1 justify-center items-center bg-deep_space">
      <p className="max-w-prose indent-8 text-md sm:text-lg md:text-xl xl:text-2xl font-baskerville text-creamy_white rounded-lg m-8">
        I am a student studying computer science and data science in the college
        of Computing & Data Sciences (CDS) at Boston University. I have
        extensive experience in Python, Java, Rust, software engineering
        paradigms, data science, machine learning, deep learning, with industry
        and research experience. I work well in a collaborative team environment
        and am a fast learner who is enthusiastic about growing and gaining more
        knowledge. I am seeking opportunities to work on challenging problems in
        pursuit of improving my skills as an engineer.
      </p>
    </div>
  </div>
);

export default About;
