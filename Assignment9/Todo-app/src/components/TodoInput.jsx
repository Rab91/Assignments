import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, TodoComplete, deleteTodo, editTodo } from "../slice/todoSlice";
import TodoList from "./TodoList";

const TodoInput = () => {
    const [text, setText] = useState("");
    
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const handleChange = (e) => {
    setText(e.target.value);
    };

    const handleAdd = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
    };

  const handleComplete = (id) => {
    dispatch(TodoComplete(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  

  return (
    <div>
        <input 
        className=""
        type="text" 
        value={text} 
        onChange={handleChange}
         />
        <button className="btn btn-primary m-1 p-1"
        onClick={handleAdd}>+</button>
        <ul>
        {todos.map((todo) => (
          <TodoList
          todo={todo}
          handleComplete={handleComplete}
          handleDelete= {handleDelete}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoInput