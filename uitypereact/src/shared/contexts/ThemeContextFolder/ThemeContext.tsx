import { createContext, useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react"

import { DarkTheme, LightTheme } from "../../themes"
import { Box } from "@mui/system";



export const ThemeContext = createContext({} as IThemeContextData);


  export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
        const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() =>{
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, []);

    const theme = useMemo(() =>{
        if (themeName === 'light') return LightTheme;
        else return DarkTheme;
    }, [themeName]);


    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}> 
            <ThemeProvider theme={theme}>
                <Box width="100vh" height="100vh" bgcolor={theme.palette.background.default}>
                { children }
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}