import React, { Component } from "react";

class TodoAddButton extends Component {
  render() {
    let { showAddModal, onClick } = this.props;
    return (
      <button onClick={onClick} className="Todo-Add">
        {showAddModal ? "X" : "+"}
      </button>
    );
  }
}
export default TodoAddButton;
