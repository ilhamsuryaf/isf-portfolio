import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-screen flex max-lg:flex-col max-lg:justify-center max-lg:items-center relative bg-neutral-800 px-24 max-md:p-5 pb-8 pt-20  max-lg:py-5 overflow-hidden"
    >
      <h1 className="lg:mx-4 lg:absolute lg:h-full lg:top-40 lg:left-12 lg:opacity-20 lg:w-1/3 font-bold py-2 text-9xl max-lg:text-4xl max-lg:text-center bg-gradient-to-l from-accent-pink via-accent-red to-accent-orange bg-clip-text text-transparent opacity-60 ">
        Some Projects <br /> {`I've Done`}
      </h1>
      <ProjectCard />
    </div>
  );
};

export default Projects;
