interface ProjectData {
  url: string;
  name: string;
}

interface ProjectItemProps {
  data: ProjectData;
}

const ProjectItem = ({ data }: ProjectItemProps) => {
  return (
    <div
    style={{backgroundImage:`url(${data.url})`}}
      className={`bg-[url(${data.url})] bg-no-repeat bg-cover hover:transform translate-2 transition-all duration-75`}
    >
      <span>{data.name}</span>
    </div>
  );
};

export default ProjectItem;
