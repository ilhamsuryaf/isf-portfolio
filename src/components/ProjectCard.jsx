import { AiOutlineGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";

const projectsData = [
  {
    title: "Dressly Landing Page",
    description:
      "My first attempt to slicing up a landing page. I got the figma design from codedesign.dev. I used HTML, CSS, and JavaScript to make this.",
    image: "../image/project-dressly.png",
    links: {
      github: "https://github.com/ilhamsuryaf/isf-dressly",
      demo: "https://ilhamsuryaf.github.io/isf-dressly",
    },
  },
  {
    title: "Kessoku Band Landing Page",
    description:
      "When I was not learning, I spent some of my time to watch anime. I was inspired to make this landing page to practice. I used HTML, CSS, and JavaScript to make this.",
    image: "../image/project-kessoku.png",
    links: {
      github: "https://github.com/ilhamsuryaf/kessoku-band",
      demo: "https://ilhamsuryaf.github.io/kessoku-band",
    },
  },
  {
    title: "ISF Portfolio",
    description:
      "After spending quite some time learning about React, I decided to make this personal portfolio. Using React with Vite and Tailwind CSS, I made this.",
    image: "../image/project-isf.png",
    links: {
      github: "https://github.com/ilhamsuryaf/isf-portfolio",
    },
  },
];

const ProjectCard = () => {
  const [projects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  function handleSelectedProject(title) {
    const newData = projects.filter((data) => data.title === title);
    setSelectedProject(newData[0]);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex max-lg:flex-col items-center justify-between lg:pl-48 w-full gap-8 z-30"
    >
      <SelectedBox selectedProject={selectedProject} />
      <ListBox projects={projects} onSelectedProject={handleSelectedProject} />
    </motion.div>
  );
};

export default ProjectCard;

const SelectedBox = ({ selectedProject }) => {
  return (
    <motion.div
      initial={{ backgroundColor: "#DE2F8A" }}
      animate={{ backgroundColor: "rgba(23, 23, 23, 0.4)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      key={selectedProject.title}
      className="lg:w-3/4 w-full h-full p-16 max-md:p-2 flex flex-col justify-center items-center text-white rounded-xl lg:border-4 border-2 border-dashed border-accent-pink overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h3 className="text-2xl font-semibold text-center">
          {selectedProject.title}
        </h3>
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="h-3/4 aspect-video"
        />
        <p className="text-sm lg:text-md font-semibold">
          {selectedProject.description}
        </p>
        {selectedProject.links.demo ? (
          <div className="flex text-center justify-center gap-8 lg:text-3xl text-2xl mt-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              href={selectedProject.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-600"
            >
              <AiOutlineGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              href={selectedProject.links.demo}
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500"
            >
              <TbWorldWww />
            </motion.a>
          </div>
        ) : (
          <div className="flex text-center justify-center gap-8 lg:text-3xl text-2xl mt-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              href={selectedProject.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-600"
            >
              <AiOutlineGithub />
            </motion.a>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const ListBox = ({ projects, onSelectedProject }) => {
  return (
    <div className="flex lg:h-96 h-12 lg:w-1/4 w-full lg:flex-col bg-neutral-900 bg-opacity-40 justify-around items-center border-2 border-dashed border-accent-pink rounded-xl overflow-hidden">
      {projects.map((data) => (
        <motion.div
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1, backgroundColor: "#DE2F8A" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          key={data.title}
          onClick={() => onSelectedProject(data.title)}
          className="lg:h-1/3 lg:w-full h-full w-1/3 flex text-center max-lg:border-2 max-lg:border-accent-pink items-center justify-center max-md:text-sm text-white font-semibold"
        >
          {data.title}
        </motion.div>
      ))}
    </div>
  );
};
