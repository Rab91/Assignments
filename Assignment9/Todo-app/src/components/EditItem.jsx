import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { editTodo } from '../slice/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faStore } from '@fortawesome/free-solid-svg-icons';

const EditItem = ({todo}) => {

    const dispatch = useDispatch();

  const [update, setUpdate] = useState("");
  const [editId, setEditId] = useState(null);

  const handleEdit = (id) => {
    dispatch(editTodo({ id, newText: update }));
    setEditId(null);
    setUpdate("");
  };

  return (
    <div className='d-flex'>
        {editId === todo.id ? (
              <>
                <input
                  placeholder="Update item"
                  type="text"
                  value={update}
                  onChange={(e) => setUpdate(e.target.value)}
                />
                <FontAwesomeIcon
                className='text-primary m-1'
                icon={faStore}
                  onClick={() => handleEdit(todo.id)}
                />
              </>
            ) : (
              <div className="text-white">{todo.text}</div>
            )}
            {editId !== todo.id && (
                <FontAwesomeIcon   
                className='text-primary m-1'
                icon={faPencilSquare}              
                onClick={(e) => setEditId(todo.id)}/>             
            )}
    </div>
  )
}

export default EditItem