import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
const paging =["home", "experience", "skills", "projects", "contact"]

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const { theme, changeTheme } = useTheme();

  const closeAll = () => {
    setNavOpen(false);
    setSocialOpen(false);
    setThemeOpen(false);
  };

  const toggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    closeAll();
    setter((prev) => !prev);
  };

  const handleThemeChange = (selectedTheme: string) => {
    changeTheme(selectedTheme);
    setThemeOpen(false);
  };

  // Determine bg & text color based on theme
  const bgColor = theme === "light" ? "bg-white" : "bg-black";
  const textColor = theme === "light" ? "text-black" : "text-white";
  const dropdownBg = theme === "light" ? "bg-white" : "bg-neutral-900";
  const dropdownText = theme === "light" ? "text-black" : "text-white";
  const dropdownHover = theme === "light" ? "hover:bg-gray-100" : "hover:bg-neutral-800";

  return (
     <header className={`w-full ${bgColor} w-100% flex justify-center sticky top-0 z-10`} >
  
    <nav className={`w-full ${bgColor} ${textColor} shadow-md transition-colors duration-300 sticky top-0 px-4`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg md:text-xl font-semibold tracking-wide">
          <a href="/">
          Portfolio
          </a>
          </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex gap-8 text-sm lg:text-base transition-colors duration-300`}>
          {["Landing", "Experience", "Skills", "Projects", "Contact"].map((item, indx) => (
            <a href={`#${paging[indx]}`}>

            <li key={item} className="cursor-pointer hover:text-blue-500 transition-colors">
              {item}
            </li>
            </a>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4 relative">
          {/* Navigation Dropdown */}
          <div className="relative block sm:hidden">
            <button onClick={() => toggle(setNavOpen)} className="hover:text-blue-500 transition">
              Navigation
            </button>
            {navOpen && (
              <ul className={`absolute right-0 mt-3 w-40 ${dropdownBg} ${dropdownText} rounded-lg shadow-lg p-2 flex flex-col gap-2`}>
                {["Landing", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                  <li key={item} className={`${dropdownHover} p-2 rounded cursor-pointer`}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Social Dropdown */}
          <div className="relative">
            <button onClick={() => toggle(setSocialOpen)} className="hover:text-blue-500 transition">
              Social
            </button>
            {socialOpen && (
              <ul className={`absolute right-0 mt-3 w-40 ${dropdownBg} ${dropdownText} rounded-lg shadow-lg p-2 flex flex-col gap-2`}>
                {["LinkedIn", "Github", "Twitter"].map((item) => (
                  <li key={item} className={`${dropdownHover} p-2 rounded cursor-pointer`}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Theme Dropdown */}
          <div className="relative">
            <button onClick={() => toggle(setThemeOpen)} className="capitalize hover:text-blue-500 transition">
              {theme}
            </button>
            {themeOpen && (
              <ul className={`absolute right-0 mt-3 w-32 ${dropdownBg} ${dropdownText} rounded-lg shadow-lg p-2 flex flex-col gap-2`}>
                {["light", "dark"].map((t) => (
                  <li
                    key={t}
                    className={`${dropdownHover} p-2 rounded cursor-pointer capitalize`}
                    onClick={() => handleThemeChange(t)}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      
    </nav>    
     </header>
  );
};

export default NavBar;