import { useParams } from "react-router-dom";
import ProjectForm from "../components/Admin/ProjectForm";
import ProjectCart from "../components/Projects/ProjectCart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { getDatas, getSingleData } from "../redux/reducers/dataReducer";

interface ParamType extends Record<string, string | undefined> {
  id?: string;
}

const AdminPanel = () => {
  const { id } = useParams<ParamType>();
  const idType = Number(id);
  const dispatch = useDispatch<AppDispatch>();

  const { selected } = useSelector((state: RootState) => state.projects);

  useEffect(() => {
    dispatch(getDatas());
    dispatch(getSingleData(idType));
  }, [dispatch, idType]);
  return (
    <>
      <div className=" ">
        <ProjectForm endpoint={idType ?? null} />
      </div>
      <ProjectCart data={selected} />
    </>
  );
};

export default AdminPanel;
