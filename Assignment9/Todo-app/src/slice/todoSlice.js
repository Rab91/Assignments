import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [{ id: 1, text: "Hi" }],

  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    TodoComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      state.todos = state.todos && state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      );
    },
  },
})
export const { addTodo, TodoComplete, deleteTodo,editTodo} = todoSlice.actions;
export default todoSlice.reducer;