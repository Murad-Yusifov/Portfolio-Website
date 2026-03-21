import { useContext } from "react";
import ThemeContext, { type ThemeType } from "../contexts/ThemeContext";

export const useTheme = (): ThemeType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used in the themeProvider");
  }
  return context;
};
