import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Blog from "./Blog";
import Article from "./Article";

class App extends React.Component {
  render() {
    return (
      <div>
        <Blog />
      </div>
    );
  }
}

export default App;
