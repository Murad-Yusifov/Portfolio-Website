import { useParams } from "react-router-dom";
import ProjectForm from "../components/Admin/ProjectForm";

interface ParamType extends Record<string, string | undefined> {
  id?: string 
}

const AdminPanel = () => {
  const {id}= useParams<ParamType>()
  return (
    <div className=' '>
       <ProjectForm endpoint={id ?? null}/>
    </div>
  );
};

export default  AdminPanel;