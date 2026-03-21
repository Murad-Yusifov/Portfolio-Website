import type { DataType, ProjectCartProps } from "../../lib/data";
import ProjectCart from "../Projects/ProjectCart";

const AboutSection = ({ data }: ProjectCartProps) => {
  return (
    <section id="experience">
      {data && data.map((item:DataType)=> <ProjectCart data={item} />)}
    </section>
  );
};

export default AboutSection;
