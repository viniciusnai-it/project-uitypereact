import { useContext } from "react";
import { ThemeContext } from "../ThemeContextFolder/ThemeContext";
export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}