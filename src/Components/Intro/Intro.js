import data from "../data.json";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div class="max-w-fill mx-0  md:max-w-full mt-[100px] md:mt-20">
      <motion.div
        id="about"
        className="ml-5 space-y-2 md:space-y-5 mt-5  md:ml-20  "
      >
        <p className="text-xl md:text-4xl text-neon font-fira">
          Hi, my name is
        </p>
        <h1 className="text-2xl  font-extrabold text-text md:text-6xl">
          {data.name}
        </h1>
        <h2 className="text-lg text-textDark md:text-3xl">
          I build amazing Websites and Mobile Apps!
        </h2>
        <p className="w-4/5 text-textDark text-xs md:text-lg md:w-3/5">
          I&rsquo;m a <span className="text-neon">{data.profession}. </span>
          {data.intro}
        </p>
        <div className="flex space-x-3">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            href="contact"
          >
            <button className="text-xs md:text-sm py-1 px-2 md:py-4 md:px-5  !mt-7 hover:bg-neon hover:border-neon hover:backdrop-blur-lg hover:text-darkerBlue duration-100 border-neon border-2 text-neon rounded md:rounded-lg">
              Reach out to me!
            </button>
          </Link>

          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            href="contact"
          >
            <button className="text-xs md:text-sm py-1 px-2 md:py-4 md:px-5   !mt-7 text-darkerBlue  bg-neon border-neon hover:bg-transparent duration-100 hover:text-neon border-2 rounded md:rounded-lg">
              Check out my work!
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
