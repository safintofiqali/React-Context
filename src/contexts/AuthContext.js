import React, { Component, createContext } from "react";

export const UserContext = createContext();

export default class UserContextProvider extends Component {
  state = {
    isLoggedIn: false,
  };

  toggleLogin = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  render() {
    return <UserContext.Provider value={{ ...this.state, toggleLogin: this.toggleLogin }}>{this.props.children}</UserContext.Provider>;
  }
}
