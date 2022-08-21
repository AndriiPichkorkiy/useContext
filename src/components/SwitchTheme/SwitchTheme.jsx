import { ThemeContext } from "components/ThemeContext/ThemeContext";
import { useContext } from "react";


const SwitchTheme = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);


    const onClick = () => {
        console.log('theme', theme);
        toggleTheme();
    }

    return (
        <>
            <button type="button" onClick={onClick}>
                Click me
            </button>
        </>
    );
}

export default SwitchTheme;