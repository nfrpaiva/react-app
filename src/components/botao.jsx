import React, { Component } from "react";
import PropTypes from "prop-types";

class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onClick, label } = this.props;
    return (
      <button type="button" onClick={onClick} className="btn btn-primary">
        {label}
      </button>
    );
  }
}
Botao.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default Botao;
