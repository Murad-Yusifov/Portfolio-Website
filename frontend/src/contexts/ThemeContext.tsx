import React, { createContext, useState } from "react";

export interface ThemeType {
  theme: string;
  changeTheme: (themed: string | undefined) => void;
}
const ThemeContext = createContext<ThemeType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>(()=>{
 const isTheme = localStorage.getItem("theme")
 return isTheme? isTheme :"dark"
  }
  );

  const changeTheme = (themed: string | undefined) => {
    setTheme(() => {
      const newTheme = themed || "dark";
      localStorage.setItem("theme", String(newTheme));
      return newTheme;
    });
  };

  return <ThemeContext value={{ theme, changeTheme }}>{children}</ThemeContext>;
};

export default ThemeContext;
