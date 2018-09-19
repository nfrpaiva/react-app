import React, { Component } from "react";

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
    console.log("values submited:", this.state);
    fetch("http://192.168.15.12:9090/usuario", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify({
        login: request.email,
        senha: request.senha,
        ativo: request.conectado,
        sistemas: [{ descricao: "fixo teste" }]
      })
    })
      .then(res => {
        console.log("response", res);
      })
      .catch(res => {
        console.log("erro", res);
      });
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

export default Form;
