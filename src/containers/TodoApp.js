import TodoApp from "../components/TodoApp";
import { connect, Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { addTodo, setTodos } from "../redux/todo";
import axios from "axios";

const mapStateToProps = (state) => {
  return {
    toDos: state.todo.items
  };
};

const mapActionsToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  setTodos: (items) => dispatch(setTodos(items)),
  fetchTodos: async () => {
    let todoItems = await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
    dispatch(setTodos(todoItems));
  }
});
const TodoAppBind = connect(mapStateToProps, mapActionsToProps)(TodoApp);
export default TodoAppBind;
