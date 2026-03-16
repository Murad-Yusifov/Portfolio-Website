interface Data {
  tasks: string[];
  head: string;
  explane: string;
}
interface DataType {
  data: Data;
}

const Intro = ({ data }: DataType) => {
  return (
    <div className=" ">
      <h1>Experiences</h1>
      <div>
        <h3>{data.head}</h3>
        <span>{data.explane}</span>
        <ul>{data.tasks && data.tasks.map((item) => <li>{item}</li>)}</ul>
      </div>
    </div>
  );
};

export default Intro;
