import React from "react";
import "./App.css";
import "./components/TodoApp";
import TodoApp from "./components/TodoApp";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/store";
import { addTodo } from "./redux/todo";

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const mapStateToProps = (state) => {
  return {
    toDos: state.todo.items
  };
};

const mapActionsToProps = {
  addTodo
};
const TodoAppBind = connect(mapStateToProps, mapActionsToProps)(TodoApp);
let todos = [];

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <TodoApp todos={todos} /> */}
        <TodoAppBind />
      </div>
    </Provider>
  );
}
