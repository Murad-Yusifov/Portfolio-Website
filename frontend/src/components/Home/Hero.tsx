import React from "react";
import { useTheme } from "../../hooks/useTheme";
import TypeJs from "../common/TypeDev";

const Hero: React.FC = () => {
  const { theme } = useTheme();

  // Determine bg & text color based on theme
  const bgColor = theme === "light" ? "bg-white" : "bg-black";
  const textPrimary = theme === "light" ? "text-black" : "text-white";
  const textSecondary = theme === "light" ? "text-gray-600" : "text-gray-300";

  return (
    <section
      id="home"
      className={`w-full min-h-[80vh] flex items-center justify-center px-6 py-12 transition-colors duration-300 ${bgColor}`}
    >
      <div className="max-w-6xl w-full grid gap-10 lg:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <div
          className={`flex flex-col gap-6 text-center lg:text-left ${textPrimary}`}
        >
          <p className={`text-sm sm:text-base tracking-wide ${textSecondary}`}>
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Murad <span className="text-blue-500">Yusifov</span>
          </h1>

          <div className="relative w-fit mx-auto lg:mx-0 ">
            <TypeJs text="JavaScript & React / Next.js Developer" />
          </div>

          <p
            className={`max-w-md mx-auto lg:mx-0 text-sm sm:text-base ${textSecondary}`}
          >
            I build modern, fast and responsive web applications with React,
            Next.js and TypeScript, focusing on performance and clean UI.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
            <a
              href="/cv-niz.pdf"
              download="Murad_Yusifov_Resume"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-md"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className={`px-6 py-3 rounded-xl border font-medium hover:opacity-80 transition ${
                theme === "light"
                  ? "border-gray-300 hover:bg-gray-100 text-black"
                  : "border-gray-700 hover:bg-neutral-800 text-white"
              }`}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT (IMAGE / VISUAL) */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-semibold shadow-xl">
            Murad.dev
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
