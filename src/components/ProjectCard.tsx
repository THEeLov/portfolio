const ProjectCard = ({ image, h }: { image: any, h: string }) => {
  return (
    <a href={h} target="_blank">
      <div className="max-w-[600px] w-full rounded-lg overflow-hidden cursor-pointer projectCard">
        <img src={image} alt="Project image" />
      </div>
    </a>
  );
};

export default ProjectCard;
