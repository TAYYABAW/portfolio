import data from "../data.json";
import ContactButtons from "./ContactButtons";
import { LineSvg } from "../icons";
import React from "react";
import GitHub from "../../Assets/logos/github.svg";
import Twitter from "../../Assets/logos/twitter.svg";
import Hashnode from "../../Assets/logos/hashnode.svg";
import Showwcase from "../../Assets/logos/showwcase.svg";
import Instagram from "../../Assets/logos/instagram.svg";
import Mailme from "../../Assets/logos/mail.svg";
import LinkedIn from "../../Assets/logos/linkedin.svg";

const Contact = () => {
  const links = [
    {
      name: "GitHub",
      icon: GitHub,
      link: "https://github.com/TAYYABAW",
    },
    {
      name: "Mail me",
      icon: Mailme,
      link: "mailto:yato7723@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      link: "https://www.linkedin.com/in/muhammad-tayyab-bb4108173",
    },
  ];
  return (
    <div class="overflow-hidden max-w-fill mx-auto md:max-w-full">
      <div
        id="contact"
        className="z-50 flex flex-col items-center justify-center w-screen mt-15 mb-10  md:ml-0 "
      >
        <div className="flex items-center justify-center mt-10 space-x-5">
          <LineSvg className="relative w-20 h-1 md:w-60" />
          <h2 className="text-xl text-text md:text-4xl whitespace-nowrap">
            Get in Touch
          </h2>
          <LineSvg className="relative w-20 h-1 md:w-60" />
        </div>

        <div className="flex flex-wrap items-center justify-center mx-auto">
          {links.map((link, i) => (
            <div key={i}>
              <ContactButtons
                marginLeft={i === 0 ? "ml-0" : "ml-10 md:ml-10"}
                name={link.name}
                icon={link.icon}
                link={link.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
