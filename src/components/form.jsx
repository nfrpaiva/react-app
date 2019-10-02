import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../actions/contatos";

const Form = () => {
  const INITIAL_STATE = { name: "", email: "", senha: "", conectado: true };
  const [state, setState] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const churros = React.createRef();

  function onChangeHandler(e) {
    e.preventDefault();
    const checkbox = e.target.type === "checkbox";
    setState({
      ...state,
      [e.target.name]: !checkbox ? e.target.value : e.target.checked
    });
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    const { email, name, senha, conectado } = state;

    const novoContato = {
      id: Math.floor(Math.random() * (1000 - 200) + 1000),
      email,
      userName: email,
      name,
      senha,
      ativo: conectado
    };
    dispatch(add(novoContato));
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">
          Nome
          <input
            ref={churros}
            type="text"
            className="form-control"
            name="name"
            value={state.name}
            onChange={onChangeHandler}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            className="form-control"
            placeholder="nome@empresa.com.br"
            name="email"
            value={state.email}
            onChange={onChangeHandler}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="senha">
          Senha
          <input
            type="password"
            className="form-control"
            placeholder="senha"
            name="senha"
            onChange={onChangeHandler}
          />
        </label>
      </div>
      <div className="form-group form-check">
        <label className="form-check-label" htmlFor="exampleCheck1">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            name="conectado"
            onChange={onChangeHandler}
            checked={state.conectado}
          />
          Manter conectado
        </label>
      </div>
      <button
        type="submit"
        onClick={onSubmitHandler}
        className="btn btn-primary"
      >
        Enviar
      </button>
    </form>
  );
};
export default Form;
