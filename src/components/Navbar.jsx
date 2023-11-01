import { useState } from "react";
import { TiThMenuOutline, TiTimesOutline } from "react-icons/ti";

const navigation = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Skill",
    href: "/skill",
  },
  {
    title: "Project",
    href: "/project",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  let [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="hidden text-white max-md:fixed max-md:z-10 max-md:flex max-md:top-9 max-md:right-9 text-4xl  transition-all duration-500 ease-in-out"
      >
        {!menuOpen ? (
          <TiTimesOutline className="hover:text-red-700" />
        ) : (
          <TiThMenuOutline className="hover:text-green-500" />
        )}
      </button>
      <div
        className={`flex fixed justify-around items-center bg-neutral-800 text-white w-full p-4 max-md:h-screen max-md:flex-col max-md:justify-center max-md:shadow-lime-400 max-md:shadow-sm ${
          !menuOpen ? "max-md:left-0" : "max-md:left-[110%]"
        } transition-all duration-700 ease-in-out`}
      >
        <div className="font-bold text-3xl max-md:absolute max-md:text-9xl max-md:left-1/2 max-md:top-1/2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          <a href="/">ISF</a>
        </div>
        <div className="flex gap-4 font-semibold justify-center max-md:block max-md:z-10">
          {navigation.map((nav, index) => (
            <NavigationLinks
              key={index}
              title={nav.title}
              href={nav.href}
            ></NavigationLinks>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

const NavigationLinks = ({ title, href }) => {
  return (
    <div className="relative max-md:text-4xl max-md:my-4">
      <a
        className="after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-0 after:bg-white hover:after:w- after:transition-all after:duration-300"
        href={href}
      >
        {title}
      </a>
    </div>
  );
};
