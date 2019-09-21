import React, { useState, useEffect } from "react";
import "./App.css";
import Contatos from "./components/contatos";
import Form from "./components/form";
import { connect } from "react-redux";
import { preFill } from "./actions/contatos";

const App = props => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(result => {
        const contatos = result.map(c => ({
          id: c.id,
          name: c.name,
          email: c.email,
          userName: c.username
        }));
        props.preFill(contatos);
      })
      .catch(res => console.log("deu erro", res));
  }, [props]);

  const handleText = e => {
    let value = e.target.value;
    setFilter(value);
  };

  const contatosFiltrados = () => {
    return props.contatos.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <div className="App container">
      <Form />
      <input
        style={{ textAlign: "center" }}
        onChange={handleText}
        type="text"
        className="m-2"
        value={filter}
      />
      <Contatos contatos={contatosFiltrados()} />
    </div>
  );
};

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
