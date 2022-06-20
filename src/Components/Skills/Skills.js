import Title from "../Title/Title";
import { motion } from "framer-motion";
import RLogo from "../../Assets/logos/react.svg";
import NLogo from "../../Assets/logos/Redux.svg";
import TLogo from "../../Assets/logos/Firebase.svg";
import WLogo from "../../Assets/logos/thirdweb.svg";
import LLogo from "../../Assets/logos/tailwind-css.svg";

const Skills = () => {
  const skills = [
    {
      src: RLogo,
      name: "React",
      link: "https://reactjs.org/",
    },
    {
      src: RLogo,
      name: "ReactNative",
      link: "https://reactjs.org/",
    },
    {
      src: NLogo,
      name: "Redux",
      link: "https://nextjs.org/",
    },
    {
      src: TLogo,
      name: "Firebase",
      link: "https://www.typescriptlang.org/",
    },
    {
      src: LLogo,
      name: "Tailwind",
      link: "https://tailwindcss.com/",
    },
  ];
  return (
    <div class=" overflow-hidden max-w-fill mx-auto md:max-w-full">
      <div
        id="skills"
        className="mt-10   "
      >
        <div className="ml-5 md:ml-16">

        <Title num={3} title="Skills" />
        </div>

        <div className="flex flex-wrap items-center justify-center mt-5 space-x-6  md:space-x-10 md:items-start md:justify-start md:ml-20">
          {skills.map((skill, i) => (
            <motion.a
              key={i}
              className="cursor-pointer relative w-20 h-20 my-5"
              href={skill.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: [1, 1.3, 1.15],
                zIndex: 1,
                transition: {
                  duration: 1,
                },
              }}
            >
              <img
                src={skill.src}
                alt={skill.name}
                layout="fill"
                objectFit="contain"
              />
              <p className="flex flex-wrap items-center justify-center">
                {skill.name}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
