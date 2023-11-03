import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex max-md:flex-col relative w-full h-3/4 px-24 py-5 max-md:px-5 bg-neutral-800 justify-center items-center">
      <h1 className="lg:mx-4 lg:absolute lg:top-48 lg:left-12 lg:opacity-20 my-2 opacity-60 text-9xl max-md:text-5xl font-bold bg-gradient-to-l from-accent-pink via-accent-red to-accent-orange bg-clip-text text-transparent">
        Me, Myself & I
      </h1>
      <div className="flex flex-col w-1/2 z-30 mx-8 max-md:w-full max-md:mx-0 max-md:mb-8">
        <p className="text-white text-lg max-md:w-full font-semibold">
          {`My name is Ilham Surya Fernanda. I'm a frontend web developer based
          in Indonesia. I spent 8 months learning about frontend web
          development. I'm eager to continue to learn more language, framework,
          and tools in frontend technology.  I'm passionate about web development and dedicated to expanding my skills to create more dynamic and interactive websites while also exploring the technical aspects that power them.`}
        </p>
        <p className="text-white text-lg max-md:w-full font-semibold my-4">
          So far i can work with:
          <ul className="flex gap-8 mt-6">
            {skills.map((skill, index) => (
              <motion.li
                initial={{ y: 10, opacity: 0.5 }}
                whileInView={{ y: 0 }}
                whileHover={{ scale: 1.05, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                key={index}
                className={`flex flex-col text-5xl max-md:text-4xl text-center justify-center items-center ${skill.color}`}
              >
                {skill.logo}
                <span className="text-white text-sm max-md:text-xs">
                  {skill.name}
                </span>
              </motion.li>
            ))}
          </ul>
        </p>
      </div>
      <div className="flex w-1/4 max-md:w-3/4 h-1/2 rounded-xl overflow-hidden">
        <img src="../image/profile-pic.png" alt="" />
      </div>
    </div>
  );
};

export default About;

const skills = [
  {
    logo: <BiLogoHtml5 />,
    name: "HTML5",
    color: "text-orange-500",
  },
  {
    logo: <BiLogoCss3 />,
    name: "CSS3",
    color: "text-blue-500",
  },
  {
    logo: <BiLogoTailwindCss />,
    name: "Tailwind CSS",
    color: "text-cyan-500",
  },
  {
    logo: <BiLogoJavascript />,
    name: "JavaScript",
    color: "text-yellow-500",
  },
  {
    logo: <BiLogoReact />,
    name: "React JS",
    color: "text-sky-500",
  },
];