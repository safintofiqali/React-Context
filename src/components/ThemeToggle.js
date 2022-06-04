import { ThemeContext } from "../contexts/ThemeContext";
import React, { Component } from "react";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme, isLightTheme } = this.context;

    return (
      <div>
        <button onClick={toggleTheme}>Change to {isLightTheme ? "dark" : "light"} theme</button>
      </div>
    );
  }
}

export default ThemeToggle;
