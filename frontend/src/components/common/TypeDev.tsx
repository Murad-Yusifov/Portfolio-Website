import { useEffect, useState } from "react";

interface TypeDevProps {
  text: string;
  speed?: number;
}

const TypeDev: React.FC<TypeDevProps> = ({ text, speed = 150 }) => {
  const [displayText, setDisplayText] = useState("");
  const [counter, setCounter] = useState(-1);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        if (counter < text.length - 1) {
          setCounter((prev) => prev + 1);
          setDisplayText(text.slice(0, counter + 2));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (counter >= 0) {
          setCounter((prev) => prev - 1);
          setDisplayText(text.slice(0, counter));
        } else {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [counter, isDeleting, text, speed]);

  return (
    <div className=" sm:w-[60%]">
      <h2 className="text-xl sm:text-xl lg:text-2xl font-semibold overflow-hidden text-start border-r-4 pr-2 animated-typing whitespace-nowrap sm:wrap-break-words">
        {displayText}
      </h2>
    </div>
  );
};

export default TypeDev;