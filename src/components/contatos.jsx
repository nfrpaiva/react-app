import React, { Component } from "react";
class Contatos extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Contatos {this.props.contatos.length}</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col"> Nome</th>
              <th scope="col">Email</th>
              <th scope="col">User Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contatos.map(contato => {
              return (
                <React.Fragment key={contato.id}>
                  <tr>
                    <td>{contato.id}</td>
                    <td>{contato.name}</td>
                    <td>{contato.email}</td>
                    <td>{contato.userName}</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Contatos;
