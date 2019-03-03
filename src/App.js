import React, { Component } from "react";
import "./App.css";
import Contatos from "./components/contatos";
import Form from "./components/form";
import { connect } from "react-redux";
import { preFill, filter } from "./actions/contatos";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(result =>
        result.slice(0, 5).map(c => ({
          id: c.id,
          name: c.name,
          email: c.email,
          userName: c.username
        }))
      )
      .then(contatos => {
        this.props.preFill(contatos);
      })
      .catch(res => console.log("deu erro", res));
  }

  handleText = e => {
    let value = e.target.value;
    this.setState({
      filter: value
    });
  };

  contatosFiltrados = () => {
    return this.props.contatos.filter(c =>
      c.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div className="App container">
        <Form />
        <input
          style={{ textAlign: "center" }}
          onChange={this.handleText}
          type="text"
          className="m-2"
          value={this.state.filter}
        />
        <Contatos contatos={this.contatosFiltrados()} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contatos: state.contatosReducer
  };
};
const mapDipatchToProps = dispatch => {
  return {
    preFill: contatos => {
      dispatch(preFill(contatos));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(App);
