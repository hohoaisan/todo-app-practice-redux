const initState = {
  items: []
};

const ADD_TODO = "ADD_TODO";
const SET_TODOS = "SET_TODOS";

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: content
});
export const setTodos = (items) => ({
  type: SET_TODOS,
  payload: items
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            title: action.payload,
            completed: false
          }
        ]
      };
    case SET_TODOS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
