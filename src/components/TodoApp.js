import React, { Component } from "react";
import "./TodoApp.sass";
import TodoItem from "./ToDoItem";
import TodoAddButton from "./TodoAddButton";
import TodoAddModal from "./TodoAddModal";
import TodoEmpty from "./TodoEmpty";
const shortid = require("shortid");

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: this.props.todos,
      newTodoValue: "",
      showAddModal: false
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
  }
  handleToggleModal() {
    let { showAddModal } = this.state;
    this.setState({ showAddModal: !showAddModal });
  }
  handleItemClick(id) {
    let toDos = this.state.toDos.map((item) => {
      return { ...item };
    });
    let [item] = toDos.filter((item) => item.id === id);
    item.isFinished = !item.isFinished;
    this.setState({ toDos });
  }
  addNewTodo(value) {
    let id = shortid.generate();
    let item = {
      id,
      content: value,
      isFinished: false
    };
    let toDos = this.state.toDos.map((item) => {
      return { ...item };
    });
    toDos.push(item);
    this.setState({ toDos });
  }
  render() {
    const { showAddModal, newTodoValue, toDos } = this.state;
    const unFinishedTodos = toDos.filter((item) => !item.isFinished);
    const finishedTodos = toDos.filter((item) => item.isFinished);

    return (
      <div className="ToDoApp w-100 h-100">
        {showAddModal && (
          <TodoAddModal
            onSubmit={() => {
              if (newTodoValue && newTodoValue !== "") {
                this.addNewTodo(newTodoValue);
              }
              this.handleToggleModal();
            }}
            value={newTodoValue}
            onChange={(event) => {
              let newTodoValue = event.target.value;
              this.setState({ ...this.state, newTodoValue });
            }}
          />
        )}
        <div className="wrapper pt-1 pb-1">
          <div className="container">
            {this.state.toDos.length ? (
              <div>
                <div className="ToDo-Section">
                  <h1 className="ToDo-SectionTitle">Upcoming</h1>
                  <div className="Todo-SectionList">
                    {unFinishedTodos.map((item, index) => (
                      <TodoItem
                        onClick={(event) => this.handleItemClick(item.id)}
                        item={{ ...item, index }}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                <div className="ToDo-Section">
                  <h1 className="ToDo-SectionTitle">Finished</h1>
                  <div className="Todo-SectionList">
                    {finishedTodos.map((item, index) => (
                      <TodoItem
                        onClick={(event) => this.handleItemClick(item.id)}
                        item={{ ...item, index }}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <TodoEmpty />
            )}
            <div className="Todo-Placeholder"></div>
          </div>
          <div className="Todo-Control">
            <TodoAddButton
              showAddModal={showAddModal}
              onClick={this.handleToggleModal}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;
