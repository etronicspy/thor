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
    const {article} = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p>
          <button className="Button" onClick = {this.toggleOpen}>
            {isOpen ? 'Stop': 'Start'}
          </button>
        </p>
        <div className="App-intro">
          {this.getBody()}
          <p>{(new Date).toLocaleString()}</p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>

        

      </div>
    );
  }

  getBody() {
    if (!this.state.isOpen) return <p className="a">It seems to be ready!</p>
    const {article} = this.props;
    return <div> <p className="b">It works!</p> <p>{article.text}</p> </div>
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

export default App;
