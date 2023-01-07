import React from "react";
import profile_img from "../imgs/profile_about_me.webp";

const About = () => (
  <div className="grid place-items-center h-screen bg-deep_space md:bg-transparent">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      <div>
        <img alt="Alex Lavaee" src={profile_img}></img>
      </div>
      <div className="flex items-center justify-center md:bg-deep_space">
        <p className="max-w-prose indent-8 text-md lg:text-xl xl:text-2xl font-baskerville text-creamy_white rounded-lg m-8">
          I am a student studying computer science and data science in the
          college of Computing & Data Sciences (CDS) at Boston University. I
          have extensive experience in Python, Java, Rust, software engineering
          paradigms, data science, machine learning, deep learning, with
          industry and research experience. I work well in a collaborative team
          environment and am a fast learner who is enthusiastic about growing
          and gaining more knowledge. I am seeking opportunities to work on
          challenging problems in pursuit of improving my skills as an engineer.
        </p>
      </div>
    </div>
  </div>
);

export default About;
