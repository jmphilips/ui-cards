import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header'

import CardColumn from '../CardColumn/CardColumn';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <CardColumn />
      </div>
    );
  }
}

export default App;
