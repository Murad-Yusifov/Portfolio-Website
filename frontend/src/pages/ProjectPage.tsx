import { useParams } from "react-router-dom";

const ProjectPage = () => {
  // returns string | null
  const {id} = useParams<{id:string}>();



  return (
    <div className="flex flex-wrap text-wrap w-full">
      Project ID: {id}
    </div>
  );
};

export default ProjectPage;