import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiThMenuOutline, TiTimesOutline } from "react-icons/ti";

const navigation = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  let [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <button
        onClick={toggleMenu}
        className="hidden text-white max-md:fixed max-md:z-10 max-md:flex max-md:top-9 max-md:right-9 text-4xl  transition-all duration-500 ease-in-out"
      >
        {menuOpen ? (
          <TiTimesOutline className="hover:text-accent-red" />
        ) : (
          <TiThMenuOutline className="hover:text-accent-pink" />
        )}
      </button>
      <div
        className={`flex fixed justify-around items-center bg-neutral-800 bg-opacity-40 hover:bg-opacity-100 max-md:bg-gradient-to-br max-md:from-indigo-900 max-md:to-violet-900 text-white w-full p-4 max-md:h-screen max-md:flex-col max-md:justify-center max-md:shadow-xl max-md:shadow-violet-950 ${
          menuOpen ? "max-md:left-0" : "max-md:left-[110%]"
        } transition-all duration-700 ease-in-out
        `}
      >
        <div className="font-bold text-3xl max-md:absolute max-md:text-9xl max-md:left-1/2 max-md:top-1/2 max-md:opacity-70 bg-gradient-to-l from-accent-pink via-accent-red to-accent-orange bg-clip-text text-transparent">
          <a href="/">ISF</a>
        </div>
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="open"
            close="initial"
            className="flex font-semibold justify-center max-md:block max-md:z-10"
          >
            {navigation.map((nav, index) => {
              return (
                <div className="overflow-hidden" key={index}>
                  <NavigationLinks
                    title={nav.title}
                    href={nav.href}
                    toggleMenu={toggleMenu}
                  ></NavigationLinks>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

const navigationVariants = {
  initial: {
    y: "40vh",
    transition: {
      duration: 0.7,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const NavigationLinks = ({ title, href, toggleMenu }) => {
  return (
    <motion.div
      variants={navigationVariants}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={toggleMenu}
      className="relative max-md:text-4xl max-md:my-3 mx-4 after:absolute max-md:after:-bottom-1 after:bottom-0 after:left-0 after:h-1 after:w-0 after:rounded-lg after:bg-accent-pink hover:after:w-full after:transition-all after:duration-300"
    >
      <a href={href}>{title}</a>
    </motion.div>
  );
};
