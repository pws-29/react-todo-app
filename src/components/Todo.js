import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    });
  };

  function isEdit(todo) {
    if (todo.id === edit.id) {
      return false
    } else return true
  }

  const filteredTodos = todos.filter(isEdit)

  return (
    <div>
      {edit.id && <TodoForm edit={edit} onSave={submitUpdate} />}

      {filteredTodos && filteredTodos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className='delete-icon'
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className='edit-icon'
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Todo
