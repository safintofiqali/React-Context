import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // state = {
  //   isLightTheme: true,
  //   dark: { bg: "#555", text: "#ddd", ui: "#333" },
  //   light: { bg: "#eee", text: "#555", ui: "#ddd" },
  // };

  const [isLightTheme, setIsLightTheme] = useState(true);
  const [dark, setDark] = useState({ bg: "#555", text: "#ddd", ui: "#333" });
  const [light, setLight] = useState({ bg: "#eee", text: "#555", ui: "#ddd" });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return <ThemeContext.Provider value={{ isLightTheme, dark, light, toggleTheme: toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
