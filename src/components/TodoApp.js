import React, { Component } from "react";
import "./TodoApp.sass";
import TodoItem from "./ToDoItem";
import TodoAddButton from "./TodoAddButton";
import TodoAddModal from "./TodoAddModal";
import TodoEmpty from "./TodoEmpty";
import axios from "axios";
const shortid = require("shortid");

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  handleItemClick(index) {
    let { toDos } = this.props;
    toDos = toDos.map((item) => {
      return { ...item };
    });
    let item = toDos[index];
    item.isFinished = !item.isFinished;
    // this.setState({ toDos });
  }
  addNewTodo(value) {
    const { addTodo } = this.props;
    addTodo(value);
    this.setState({
      ...this.state,
      newTodoValue: ""
    });
  }
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }
  render() {
    const { showAddModal, newTodoValue } = this.state;
    const { toDos } = this.props;
    const unFinishedTodos = toDos.filter((item) => !item.completed);
    const finishedTodos = toDos.filter((item) => item.completed);
    const { addTodo } = this.props;
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
            {toDos.length ? (
              <div>
                <div className="ToDo-Section">
                  <h1 className="ToDo-SectionTitle">Upcoming</h1>
                  <div className="Todo-SectionList">
                    {unFinishedTodos.map((item, index) => (
                      <TodoItem
                        onClick={(event) => this.handleItemClick(index)}
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
                        onClick={(event) => this.handleItemClick(index)}
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
