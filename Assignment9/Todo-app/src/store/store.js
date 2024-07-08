import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../slice/todoSlice";

const store = configureStore({
    reducer: {
    todos: todoReducers,
    },
   });
   
   export default store;