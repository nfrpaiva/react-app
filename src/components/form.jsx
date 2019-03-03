import React, { Component } from "react";
import {connect } from "react-redux";
import { add, del } from "../actions/contatos"

class Form extends Component {
  state = { email: "", senha: "", conectado: true };
  onChangeHandler = e => {
    let checkbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: !checkbox ? e.target.value : e.target.checked
    });
  };
  onSubmitHandler = e => {
    e.preventDefault();
    const request = this.state;

    const novoContato = {
      id: Math.random(),
      email: request.email,
      userName: request.email,
      name: request.email,
      senha: request.senha,
      ativo: request.conectado,
      sistemas: [{ descricao: "fixo teste" }]
    }

    this.props.add(novoContato)
   
  };
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">E-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="nome@empresa.com.br"
            name="email"
            value={this.state.email}
            onChange={this.onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="senha"
            name="senha"
            onChange={this.onChangeHandler}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            name="conectado"
            onChange={this.onChangeHandler}
            checked={this.state.conectado}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Manter conectado
          </label>
        </div>
        <button
          type="submit"
          onClick={this.onSubmitHandler}
          className="btn btn-primary"
        >
          Enviar
        </button>
        <p>
          <code>{JSON.stringify(this.state, null, 2)}</code>
        </p>
      </form>
    );
  }
}
const mapDipatchToProps = dispatch => {
  return {
    add: contato => {
      dispatch(add(contato));
    },
    delete: key => {
      dispatch(del(key))
    }
  };
};

export default  connect(null, mapDipatchToProps ) (Form);
