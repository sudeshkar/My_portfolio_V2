import AboutImg from "./assets/AboutMe.png";
import Button from "./LearnMoreButton";
import AboutModal from "./AboutModal";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function About() {
  const [open, setOpen] = useState(false);
  
  return (
    <section
      className="flex md:flex-row flex-col justify-center bg-secondary p-2"
      id="about"
    >
      <div className="md:w-1/2">
        <img
          src={AboutImg}
          alt="About me"
          className="rounded-4xl mt-8 md:h-[600px] p-5"
        />
      </div>

      <div className="flex md:w-1/2 mt-8 justify-center">
        <div className="flex flex-col justify-center px-5">
          <h1 className="text-6xl font-bold mb-4 font-Bebas text-white border-b-4 border-[#5551e3] w-[195px]">
            About Me
          </h1>

          <p className="text-black font-bold text-2xl font-Gruppo">
            I enjoy exploring emerging technologies and transforming ideas into
            practical, impactful applications.
          </p>

          <Button onClick={() => setOpen(true)} />
        </div>
      </div>

      <AnimatePresence>
        {open && <AboutModal isOpen={open} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}

export default About;
