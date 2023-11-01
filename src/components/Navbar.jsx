import { useState } from "react";
import { TiThMenuOutline, TiTimesOutline } from "react-icons/ti";

const Navbar = () => {
  let [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    console.log("menu opened");
  };

  return (
    <>
      <div
        className={`flex fixed justify-around items-center bg-neutral-800 text-white w-full p-4 max-md:h-screen max-md:flex-col max-md:justify-center max-md:shadow-lime-400 max-md:shadow-sm ${
          !menuOpen ? "max-md:left-0" : "max-md:left-[110%]"
        } transition-all duration-700 ease-in-out`}
      >
        <div className="font-bold text-3xl max-md:absolute max-md:text-9xl max-md:left-1/2 max-md:top-1/2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          <a href="/">ISF</a>
        </div>
        <ul className="flex gap-4 font-semibold max-md:block max-md:z-10 max-md:text-3xl max-md:leading-relaxed justify-center">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/skill">Skill</a>
          </li>
          <li>
            <a href="/project">Project</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <button
        onClick={handleMenuOpen}
        className="hidden text-white max-md:fixed max-md:z-10 max-md:flex max-md:top-9 max-md:right-9 text-4xl  transition-all duration-500 ease-in-out"
      >
        {!menuOpen ? (
          <TiTimesOutline className="hover:text-red-700" />
        ) : (
          <TiThMenuOutline className="hover:text-green-500" />
        )}
      </button>
    </>
  );
};

export default Navbar;
