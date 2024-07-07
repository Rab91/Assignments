import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, TodoComplete, deleteTodo } from "../slice/todoSlice";

const TodoInput = () => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleChange = (e) => {
    setText(e.target.value);
    };

    const handleAddTodo = () => {
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
        onClick={handleAddTodo}>+</button>
        <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
            <button onClick={() => handleComplete(todo.id)}>
              
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => handleDelete(todo.id)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoInput