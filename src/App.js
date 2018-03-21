import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {

    const {isOpen} = this.state;
    /*const body = isOpen ? 
    <div className="Button" onClick = {this.toggleOpen}>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    : null;*/

    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button className="Button" onClick = {this.toggleOpen}>
            {isOpen ? 'Stop': 'Start'}
          </button>
        </p>
        <p className="App-intro">
          {this.getBody()}
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  getBody() {
    if (!this.state.isOpen) return <p className="a">It seems to be ready!</p>
    return <p className="b">It works!</p>
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

export default App;
