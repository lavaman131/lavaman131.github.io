import React from "react";
import profile_img from "../imgs/profile_about_me.jpg";

const About = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-6 place-items-center">
    <img alt="Alex Lavaee" className="rounded-xl aspect-square" src={profile_img}></img>
    <div className="bg-deep_space rounded-xl flex items-center aspect-square">
      <p className="indent-8 text-xl md:text-md lg:text-xl xl:text-2xl font-baskerville text-creamy_white m-6 flex-grow">
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
