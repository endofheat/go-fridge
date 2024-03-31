import { createContext, useContext, useState } from 'react';
import { lightTheme } from '../themes/lightTheme';
import { darkTheme } from '../themes/darkTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

export const themes = {
    light: lightTheme,
    dark: darkTheme,
};

export const MyThemeContext = createContext(null);

export default function MyThemeProvider(props) {
    const [theme, setTheme] = useState(themes.light);

    return (
        <MyThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
        {props.children}
        </ThemeProvider>
    
        </MyThemeContext.Provider>
    );
}


export const useMyThemeContext = () => {
    return useContext(MyThemeContext);
    };