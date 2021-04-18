import React from "react";
import "./App.css";
import "./components/TodoApp";
import TodoApp from "./containers/TodoApp";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./redux/store";

const myMiddleware = (store) => (next) => (action) => {
  // console.log("Action", action, store.getState());
  if (action.type == "ADD_TODO" && action.payload === "fuck") {
    action.payload = "****";
  }
  return next(action);
};

let store = createStore(reducer, applyMiddleware(myMiddleware));

let todos = [];

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <TodoApp todos={todos} /> */}
        <TodoApp />
      </div>
    </Provider>
  );
}
