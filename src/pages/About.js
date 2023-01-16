import React from "react";
import profile_img from "../imgs/profile_about_me.webp";
import { motion } from "framer-motion";

const About = () => (
  <motion.div
    className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-0"
    initial={{ opacity: 0, y: 200 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -200 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center justify-center m-8">
      <div className="rounded-full p-2 bg-space_blue w-3/5 md:w-5/6">
        <img
          alt="Alex Lavaee"
          className="rounded-full w-full h-full"
          src={profile_img}
        ></img>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center bg-space_blue font-baskerville text-creamy_white xl:text-xl">
      <div>
        <p className="mx-8 my-4">
          I am a computer science and data science student at Boston
          University's college of Computing & Data Sciences (CDS) with
          experience in Agile development, Scrum, Object-oriented programming,
          Test-driven development, and Cloud computing.
        </p>
        <p className="mx-8 my-4">
          I have experience implementing DevOps practices and have successfully
          deployed projects using CI/CD pipeline. I have experience working with
          large datasets and have conducted data mining and data visualization
          to uncover insights. I have knowledge building machine learning and
          deep learning systems using Scikit-learn, TensorFlow, and Keras. I
          also have experience in predictive modeling, time series analysis, and
          Natural Language Processing (NLP) utilizing Large Language Models
          (LLMs).
        </p>
        <p className="mx-8 my-4">
          With my experience and skills, I can contribute to research by
          developing models and finding solutions to complex problems and in
          businesses by implementing data-driven solutions to improve decision
          making and operations. I am confident that I can provide valuable
          insights and help organizations achieve their goals.
        </p>
      </div>
    </div>
  </motion.div>
);

export default About;
