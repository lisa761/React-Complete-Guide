import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App!!!</h1>
      </div>
      // above jsx transpiles to:
      // return React.creatElement('div', {className='App', React.createElement('h1', null, 'Hi, I'm a React App!!!)})
    );
  }
}

export default App;
