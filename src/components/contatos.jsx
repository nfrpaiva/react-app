import React, { useReducer } from "react";
import { connect } from "react-redux";
import { del } from "../actions/contatos";
import contatosReducer from "../reducers/contatos";
const Contatos = props => {
  return (
    <React.Fragment>
      <h1>Contatos {props.contatos.length}</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">User Name</th>
            <th scope="coll">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.contatos.map(c => {
            const { id, name, email, userName } = c;
            return (
              <React.Fragment key={id}>
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{userName}</td>
                  <td>
                    <button
                      onClick={e => props.delete(id)}
                      className="btn btn-danger btn-sm"
                    >
                      excluir
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

const mapDipatchToProps = dispatch => {
  return {
    delete: key => {
      dispatch(del(key));
    }
  };
};

export default connect(
  null,
  mapDipatchToProps
)(Contatos);
