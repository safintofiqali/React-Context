import React, { Component } from "react";
import BookList from "./components/BookList.funcComp";
import Navbar from "./components/Navbar.funcComp";
import ThemeToggle from "./components/ThemeToggle.funcComp";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BookList />
        <ThemeToggle />
      </div>
    );
  }
}
