import React from "react";
import profile_img from "../imgs/profile_about_me.jpg";

const About = () => (
  <div className=" rounded-xl flex flex-col gap-4 items-center justify-center h-screen m-6">
    <img
      alt="Alex Lavaee"
      className="rounded-xl w-96 xl:w-144"
      src={profile_img}
    ></img>
    <p className="bg-deep_space max-w-prose indent-8 text-md lg:text-lg xl:text-xl font-baskerville text-creamy_white mx-4 p-6 rounded-lg">
      I am a student studying computer science and data science in the college
      of Computing & Data Sciences (CDS) at Boston University. I have extensive
      experience in Python, Java, Rust, software engineering paradigms, data
      science, machine learning, deep learning, with industry and research
      experience. I work well in a collaborative team environment and am a fast
      learner who is enthusiastic about growing and gaining more knowledge. I am
      seeking opportunities to work on challenging problems in pursuit of
      improving my skills as an engineer.
    </p>
  </div>
);

export default About;
