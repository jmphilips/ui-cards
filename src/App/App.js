import React, { Component } from "react";
import "./App.css";

import Header from "../Header/Header";

import CardDisplay from "../CardDisplay/CardDisplay";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardDisplay />
      </div>
    );
  }
}

export default App;
