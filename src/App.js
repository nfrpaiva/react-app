import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Botao from "./components/botao";
import Contatos from "./components/contatos";
//import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contatos: [{ name: "teste", id: 1, email: "zequina@teste.com" }],
      name: "Welcome to React"
    };
  }
  contatos = [];
  handleClick = () => {
    this.setState({ name: "Welcome to React" });
    // axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
    //   const newContact = response.data.map(c => {
    //     return { id: c.id, name: c.name, email: c.email };
    //   });
    //   let newState = { contatos: newContact, name: "Welcome to React" };
    //   this.setState(newState);
    // });
    this.componentDidMount();
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(result => {
        let contatos = result.map(c => {
          return { id: c.id, name: c.name, email: c.email };
        });
        let newState = { contatos: contatos, name: "Welcome to React" };
        this.contatos = newState.contatos;
        this.setState(newState);
      });
  }
  handleText = e => {
    let value = e.target.value;
    this.setState({ name: value });
    console.log(this.contatos);
    if (value.length === 0) {
      this.setState({ contatos: this.contatos });
    } else {
      this.setState({
        contatos: this.contatos.filter(c =>
          c.name.toLowerCase().includes(value.toLowerCase())
        )
      });
    }
  };

  render() {
    return (
      <div className="App container">
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
        <Botao label="Reset" onClick={this.handleClick} />

        <Contatos contatos={this.state.contatos} />
      </div>
    );
  }
}

export default App;
