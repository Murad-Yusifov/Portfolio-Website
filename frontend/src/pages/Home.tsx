import { useEffect } from "react";
import AboutSection from "../components/About/AboutSection";
import Contact from "../components/contact/Contact";
import Hero from "../components/Home/Hero";
import SkillsCard from "../components/Skills/SkillsCard";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { getDatas } from "../redux/reducers/dataReducer";

const Home = () => {
  // const { id } = useParams<{ id: string }>();
  // const [data, setData] = useState<DataType[] | null>(null);

  // useEffect(() => {

  //   const fetchData = async () => {
  //     const response = await getData();
  //     setData(response?.data as DataType[]);
  //   };

  //   fetchData();
  // }, []);

  // console.log(data, "the data")

const dispatch = useDispatch<AppDispatch>()

const {items, error}= useSelector((state:RootState)=> state.projects)

console.log(items, "items work")

useEffect(()=>{
 dispatch(getDatas())
},[dispatch])

if(error) return "Something went wrong "


  return (
    <>
      <Hero />
      <AboutSection data={items} />
      <SkillsCard data={items} />
      <Contact />
    </>
  );
};

export default Home;