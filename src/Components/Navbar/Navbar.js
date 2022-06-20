import { useDimensions } from "../../hooks/useDimensions";
import { MenuToggle, Navigation } from "../header/index";
import { motion, useCycle } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../Assets/Logo.js";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 80) {
        setHandleShow(true);
      } else setHandleShow(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const headerItems = [
    {
      name: "About",
      href: "about",
    },
    {
      name: "Work",
      href: "work",
    },
    {
      name: "Skills",
      href: "skills",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ];

  return (
    <nav
      className={`  px-8 sm:px-24 fixed sm:py-4 py-6 bg-bgblue/60 backdrop-filter backdrop-blur-xl max-w-sm w-full md:max-w-full top-0 z-50 flex justify-between items-center ${
        handleShow ? "shadow-2xl" : ""
      }`}
    >
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        href="about"
      >
        <Logo className="cursor-pointer" />
      </Link>

      <motion.nav
        className="absolute top-2 left-0 w-full sm:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>

      <ol className="hidden space-x-8 sm:flex">
        {headerItems.map((item, i) => (
          <li
            key={i}
            className="border-b-2 border-transparent cursor-pointer text-text hover:border-neon"
          >
            <Link
              activeClass="active"
              to={item.href}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href={item.href}
            >
              <span className="text-neon">{i + 1}. </span>
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Navbar;
