import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Welcome to React" };
  }
  handleClick = () => {
    this.setState({ name: "Welcome to React" });
  };
  handleText = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          onChange={this.handleText}
          type="text"
          className="m-2"
          value={this.state.name}
        />
        <br />
        <button onClick={this.handleClick} className="btn btn-primary">
          Reset
        </button>
      </div>
    );
  }
}

export default App;
