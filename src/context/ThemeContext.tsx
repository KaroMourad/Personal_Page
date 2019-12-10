import * as React from "react";
import { useState } from "react";

const defaultState: { dark: boolean; toggleDark: () => any } = {
    dark: true,
    toggleDark: () => { },
};
const ThemeContext = React.createContext(defaultState);

const supportsDarkMode = () => window.matchMedia("(prefers-color-scheme: dark)").matches === true;

const ThemeProvider = (props) =>
{
    const [dark, setDark] = useState<boolean>(false);

    const toggleDark = (): void =>
    {
        localStorage.setItem("dark", JSON.stringify(!dark));
        setDark(!dark);
    };

    React.useEffect(() =>
    {
        const lsDark = JSON.parse(localStorage.getItem("dark"));
        if (lsDark)
        {
            setDark(lsDark);
        }
        else if (supportsDarkMode())
        {
            setDark(true);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ dark, toggleDark: toggleDark }} >
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
export { ThemeProvider };
