import { createContext, useState } from "react";
import { themeSettings } from '../../helpers/theme.js'

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
    // const arr = [1, 2, 3, 4, 5];
    // const arr2 = ["a", "b", "c", "d", "e"];
    const [theme, setTheme] = useState({
        theme: themeSettings.light,
        name: 'light',
    });


    const toggleTheme = () => {
        setTheme(preValue => {
            const nameTheme = preValue.name === 'light'
                ? 'dark'
                : 'light';

            return {
                theme: themeSettings[nameTheme],
                name: nameTheme,
            }
        }
        )
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}

export { ThemeContext };