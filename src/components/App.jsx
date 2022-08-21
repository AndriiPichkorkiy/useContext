import SwitchTheme from "./SwitchTheme/SwitchTheme";
import { ThemeContext } from "components/ThemeContext/ThemeContext";
import { useContext } from "react";

export const App = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        ...theme.theme
      }}
    >
      <SwitchTheme />
      React homework template
    </div>
  );
};
