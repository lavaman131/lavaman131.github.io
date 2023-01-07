import React from "react";
import profile_img from "../imgs/profile_about_me.webp";

const About = () => (
  <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-0">
    <div className="flex items-center justify-center m-4">
      <div className="rounded-full p-2 bg-gradient-to-t from-red-600 to-magic_purple w-2/3 md:w-full">
        <img
          alt="Alex Lavaee"
          className="rounded-full w-full h-full"
          src={profile_img}
        ></img>
      </div>
    </div>
    <div className="flex items-center justify-center bg-deep_space">
      <p className="indent-8 text-md lg:text-xl xl:text-2xl font-baskerville text-creamy_white rounded-lg m-8">
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
