import React, { Component } from "react";
import logo from "./logo.svg";
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
    this.props.filter(value);
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
        <Contatos contatos={this.props.contatos} />
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
    },
    filter: name => {
      dispatch(filter(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(App);
