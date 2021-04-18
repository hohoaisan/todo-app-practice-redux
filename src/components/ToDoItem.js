import React, { Component } from "react";
class TodoItem extends Component {
  render() {
    const { onClick, item } = this.props;
    const { title, index, completed } = item;
    return (
      <div
        id={`todo-item-${index}`}
        className={`Todo-Item card mt-2 mb-2 ${completed ? "finished" : ""}`}
        onClick={onClick}
      >
        <div className="card-body pt-2 pb-2 pl-3 pr-3">
          <div className="Todo-Content">
            <span className="todo-item-index mr-2">{`${index + 1}.`}</span>
            <span className="todo-item-text">{title}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
