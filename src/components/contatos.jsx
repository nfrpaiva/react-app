import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { del } from "../actions/contatos";

const Contatos = props => {
  const { contatos } = props;
  const dispatch = useDispatch();
  function deleteHandler(id) {
    dispatch(del(id));
  }
  return (
    <>
      <h1>{`Contatos ${contatos.length}`}</h1>
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
          {contatos.map(c => {
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
                      type="button"
                      onClick={() => deleteHandler(id)}
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
    </>
  );
};
Contatos.propTypes = {
  contatos: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Contatos;
