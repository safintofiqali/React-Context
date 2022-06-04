import { ThemeContext } from "../contexts/ThemeContext.funcCont";
import React, { Component, useContext } from "react";

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);
  const { toggleTheme, isLightTheme } = themeContext;

  return (
    <div>
      <button onClick={toggleTheme}>Change to {isLightTheme ? "dark" : "light"} theme</button>
    </div>
  );
};

export default ThemeToggle;
