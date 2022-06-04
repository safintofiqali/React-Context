import React, { Component, useContext } from "react";
import { UserContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext.funcCont";

const BookList = () => {
  const themeContext = useContext(ThemeContext);
  const { isLightTheme, dark, light } = themeContext;
  const theme = isLightTheme ? light : dark;
  const { bg, ui, text } = theme;
  return (
    <div className="book-list" style={{ background: bg, color: text }}>
      <ul>
        <li style={{ background: ui }}>The 7 habit of highly effective people</li>
        <li style={{ background: ui }}>The power of subconsious mind</li>
        <li style={{ background: ui }}>Can't hurt me</li>
      </ul>
    </div>
  );
};

export default BookList;
