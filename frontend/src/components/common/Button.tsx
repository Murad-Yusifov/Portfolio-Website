import type React from "react";

const Button = ({
  className="",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      type="submit"
      className={`p-2 m-2 text-[clamp(2rem, 1vw + 1rem, 4rem)] bg-purple-500 ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
