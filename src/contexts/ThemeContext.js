import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    dark: { bg: "#555", text: "#ddd", ui: "#333" },
    light: { bg: "#eee", text: "#555", ui: "#ddd" },
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    return <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>{this.props.children}</ThemeContext.Provider>;
  }
}
