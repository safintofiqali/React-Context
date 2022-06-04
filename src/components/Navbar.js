import React, { Component } from "react";
import { UserContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isLightTheme, dark, light } = themeContext;
              const { isLoggedIn, toggleLogin } = userContext;
              const theme = isLightTheme ? light : dark;
              const { bg, ui, text } = theme;
              const userState = isLoggedIn ? "Logged In" : "Logged Out";
              return (
                <nav style={{ background: ui, color: text }}>
                  <h1>Context App</h1>
                  <button onClick={toggleLogin}>{userState}</button>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer>
    );
  }
}
