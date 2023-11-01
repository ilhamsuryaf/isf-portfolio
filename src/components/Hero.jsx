import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="flex max-md:flex-col justify-center gap-8 items-center w-full min-h-screen bg-neutral-800">
      <aside>
        <div className="flex flex-col gap-4 items-center text-3xl text-white text-center">
          <a>CV</a>
          <a>
            <AiFillLinkedin />
          </a>
          <a>
            <AiFillGithub />
          </a>
        </div>
      </aside>
      <div className="text-white">
        <h1 className="text-4xl font-semibold">
          Hi, I am Ilham Surya Fernanda.
        </h1>
        <p className="text-xl font-medium">
          {"I'm a Front End Web Developer."}
        </p>
        <p className="text-xl font-medium">{"I'm still learning."}</p>
        <p className="text-xl font-medium">I love learning.</p>
      </div>
    </div>
  );
};

export default Hero;
