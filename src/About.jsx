import AboutImg from "./assets/AboutMe.png";
import Button from "./LearnMoreButton";

function About() {
  const config={
    description:"I enjoy exploring emerging technologies and transforming ideas into practical, impactful applications. I’m constantly learning, improving my craft, and pushing  myself to build better, smarter software every day."
  };
  return (
    <section className="flex md:flex-row flex-col justify-center bg-secondary p-2" id="about">
      <div className="md:w-1/2 w-auto m-0">
        <img src={AboutImg} alt="About me" className="rounded-4xl mt-8 md:h-[600px] h-auto md:ml-15 md:mb-5 p-5" />
      </div>

      <div className="flex md:w-1/2 mt-8 justify-center ">
      <div className="flex flex-col justify-center px-5">
        <h1 className="text-6xl font-bold mb-4 font-Bebas text-white  border-b-4 border-[#5551e3] w-[195px]">
         About Me
        </h1>

        <p className="text-black font-bold leading-relaxed  font-Gruppo text-2xl md:p-2 ">
          {config.description}
        </p>
        <Button/>
      </div>
        
      </div>
    </section>
  );
}

export default About;
