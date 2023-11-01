import { useTypewriter, Cursor } from "react-simple-typewriter";
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
      <div className="text-white">
        <h1 className="text-4xl font-semibold">
          Hi, I am Ilham Surya Fernanda.
        </h1>
        <p className="text-xl font-medium">
          I<span>{text}</span>
          <Cursor cursorColor="red" />
        </p>

        <div className="flex mt-8 gap-4 items-center text-neutral-800 text-center">
          {heroNavigation.map((nav, index) => (
            <a
              key={index}
              href={nav.href}
              target={`_blank`}
              className={`bg-white p-1 rounded-lg text-xl font-bold hover:-translate-y-1 hover:shadow-md ${nav.shadow} hover:scale-105 transition-all ease-linear duration-300`}
            >
              {nav.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

const heroNavigation = [
  {
    icon: <AiOutlineDownload />,
    href: "#",
    shadow: "hover:shadow-green-600 ",
  },
  {
    icon: <AiOutlineLinkedin />,
    href: "https://www.linkedin.com/in/ilham-surya-fernanda-096079262/",
    shadow: "hover:shadow-blue-600 ",
  },
  {
    icon: <AiOutlineGithub />,
    href: "https://github.com/ilhamsuryaf",
    shadow: "hover:shadow-amber-600 ",
  },
];
