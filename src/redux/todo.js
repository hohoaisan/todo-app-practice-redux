const initState = {
  items: []
};

const ADD_TODO = "ADD_TODO";

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: content
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            content: action.payload,
            isFinished: false
          }
        ]
      };
    default:
      return state;
  }
};

export default reducer;
