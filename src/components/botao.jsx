import React, { Component } from "react";
class Botao extends Component {
  state = {};
  render() {
    return (
      <button onClick={this.props.onClick} className="btn btn-primary">
        {this.props.label}
      </button>
    );
  }
}
export default Botao;
