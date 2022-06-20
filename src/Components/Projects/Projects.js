import Title from "../Title/Title";
import { GitHubIcon, VisitIcon } from "../icons";
import React from "react";
import Dexify from "../../Assets/projects/Dexify.png";
import Yetubit from "../../Assets/projects/Yetubit.png";
import Netstorm from "../../Assets/projects/Ancient.jpg";

const Projects = () => {
  const projects = [
    {
      name: "Dexify",
      image: Dexify,
      about: "Front-End of a Crypto Market Place",
      tech: ["React", "Tailwind CSS"],
      links: {
        GitHub: "https://github.com/TAYYABAW/Dexify",
        Live: "https://dexify-43e27.web.app",
      },
      role: "Lead developer",
    },
    {
      name: "Yetubit",
      image: Yetubit,
      about: "Front-End of a P2P Market.",
      tech: ["React", "Bootstrap", "Firebase", "Redux"],
      links: {
        GitHub: "https://github.com/TAYYABAW/yetubit",
      },
      role: "Lead developer",
    },
    {
      name: "Ancient Alien Artefact",
      image: Netstorm,
      about: "Front-End of a NFT collection website",
      tech: ["React", "Bootstrap",],
      links: {
        GitHub: "https://github.com/Kira272921/faucetli",
        Live: "https://www.producthunt.com/posts/faucetli",
      },
      role: "Co-Founder",
    },
  ];

  return (
    <div class="overflow-hidden max-w-fill mx-auto md:max-w-full">
      <div id="work" className=" ">
        <div className="ml-5 md:ml-16">
          <Title num={2} title="Some Things I’ve Built" />
        </div>

        <div className="flex flex-col md:ml-20">
          {projects.map((project, i) => (
            <article key={i} className="flex flex-col  mt-10 md:flex-row">
              <div className="relative md:w-[450px] w-[350px]  h-[210px]  md:h-[250px] rounded-lg mx-auto md:ml-5 md:mr-0">
                <img
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  className="rounded-lg"
                  objectFit="contain"
                />
              </div>

              <div className="ml-5 mt-5 md:ml-20">
                <h3 className="text-3xl font-semibold text-neon">
                  {project.name}
                </h3>
                <p className="text-textDark mt-3 md:max-w-[700px]">
                  {project.about}
                </p>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-text text-darkerBlue rounded-full px-3 py-1 mt-2 mr-2"
                  >
                    {tech}
                  </span>
                ))}
                <p className="text-textDark mt-2">
                  <span className="text-neon">Role:</span> {project.role}
                </p>

                <div className="flex mt-4 space-x-4">
                  {project.links.GitHub && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.links.GitHub}
                      className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current hover:bg-neon hover:border-neon hover:backdrop-blur-lg border-neon group-hover:text-white hover:text-white text-neon"
                    >
                      <GitHubIcon />

                      <span className="ml-2">GitHub</span>
                    </a>
                  )}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.links.Live}
                    className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current text-darkerBlue bg-neon border-neon hover:bg-transparent hover:text-neon"
                  >
                    <VisitIcon />
                    <span className="ml-2">Visit</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
