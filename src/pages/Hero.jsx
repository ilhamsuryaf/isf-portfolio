import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineDownload,
} from "react-icons/ai";
const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "'m a front-end web developer",
      "'m still learning",
      " love learning new things",
    ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 50,
  });
  return (
    <div className="flex max-md:flex-col justify-center gap-8 p-8 items-center w-full min-h-screen bg-neutral-800">
      <motion.div
        initial={{ y: 10, opacity: 0.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-white"
      >
        <h1 className="text-4xl font-semibold">
          Hi, I am Ilham Surya Fernanda.
        </h1>
        <h3 className="text-xl font-medium bg-gradient-to-r from-accent-pink via-accent-red to-accent-orange bg-clip-text text-transparent">
          I<span>{text}</span>
        </h3>

        <div className="flex mt-4 gap-4 items-center text-neutral-800 text-center">
          {heroNavigation.map((nav, index) => (
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              key={index}
              href={nav.href}
              target={`_blank`}
              className={`bg-white relative p-1 rounded-lg text-xl font-bold hover:-translate-y-1 hover:shadow-md ${nav.shadow}`}
            >
              {nav.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

const heroNavigation = [
  {
    icon: <AiOutlineDownload />,
    href: "#",
    shadow: "hover:shadow-green-600",
  },
  {
    icon: <AiOutlineLinkedin />,
    href: "https://www.linkedin.com/in/ilham-surya-fernanda-096079262/",
    shadow: "hover:shadow-blue-600",
  },
  {
    icon: <AiOutlineGithub />,
    href: "https://github.com/ilhamsuryaf",
    shadow: "hover:shadow-amber-600",
  },
];
