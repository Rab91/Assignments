import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faSquare,
    faSquareCheck,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import EditItem from "./EditItem";
const TodoList = ({ todo, handleComplete, handleDelete }) => {
    return (
        <div className="d-flex justify-content-between border border-1">
          <div className="m-1" key={todo.id} onClick={() => handleComplete(todo.id)}>
          {todo.completed ? (
                        <FontAwesomeIcon
                            className="text-success"
                            icon={faSquareCheck}
                        />
                    ) : (
                        <FontAwesomeIcon
                            className="text-secondary"
                            icon={faSquare}
                        />
                    )}
          </div>
          <div className="m-1">
            {todo.text}
          </div>
          
          <div className="m-1">
          <EditItem todo={todo} />
          </div>
          <div>
          <FontAwesomeIcon
            className="text-danger"
            icon={faTrashCan}
            onClick={() => handleDelete(todo.id)}
          />
          </div>
        </div>
    );
};

export default TodoList;
