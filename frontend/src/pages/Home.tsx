import AboutSection from "../components/About/AboutSection";
import Contact from "../components/contact/Contact";
import Hero from "../components/Home/Hero";
import ProjectCart from "../components/Projects/ProjectCart";
import SkillsCard from "../components/Skills/SkillsCard";
import { exampleData } from "../lib/data";

const Home = () => {
  return (
    <>
       <Hero/>
    <section id="experience">
      <AboutSection/>
    </section>
      <SkillsCard data={[]}/>
    <Contact/>
    </>

  );
};

export default  Home;