const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-deep_space h-screen gap-6 md:gap-10">
      <div className="flex flex-row gap-8">
        <h1 className="font-baskerville font-bold text-creamy_white text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Mail
        </h1>

        <a
          className="font-baskerville text-sky-400 before:content-['_↗'] hover:text-sky-200 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          href="mailto:alavaee@bu.edu"
        >
          alavaee@bu.edu
        </a>
      </div>
      <div className="flex flex-row gap-8">
        <h1 className="font-baskerville font-bold text-creamy_white text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Social Media
        </h1>
        <a
          className="font-baskerville text-sky-400 before:content-['_↗'] hover:text-sky-200 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          href="https://www.linkedin.com/in/alexlavaee/"
        >
          linkedin
        </a>
      </div>
    </div>
  );
};

export default Contact;
