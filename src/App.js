import React from "react";
import "./App.css";
import "./components/TodoApp";
import TodoApp from "./components/TodoApp";
let todos = [
  // {
  //   id: 1,
  //   content: "lorem ipsum",
  //   isFinished: false
  // },
  // {
  //   id: 2,
  //   content: "lorem ipsum 2",
  //   isFinished: false
  // },
  // {
  //   id: 3,
  //   content: "lorem ipsum 3",
  //   isFinished: true
  // }
];
export default function App() {
  return (
    <div className="App">
      <TodoApp todos={todos} />
    </div>
  );
}
