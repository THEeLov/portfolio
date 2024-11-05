import FilmsImage from "../images/films.png";
import ChatImage from "../images/chatapp.png";
import GptImage from "../images/mygpt.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-10">
      <h2 className="text-white">
        Projects
      </h2>
      <div className="flex gap-10 flex-wrap w-full justify-center">
        <ProjectCard image={FilmsImage} h="https://films-aed2d.web.app/"/>
        <ProjectCard image={ChatImage} h="https://bolt-krl3.onrender.com"/>
        <ProjectCard image={GptImage} h="https://my-gpt-eight-theta.vercel.app/"/>
      </div>
    </div>
  );
};

export default Projects;
