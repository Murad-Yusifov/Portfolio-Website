import { useContext } from "react"
import ThemeContext, { type ThemeType } from "../contexts/ThemeContext"



export const useTheme = ():ThemeType=> useContext(ThemeContext)