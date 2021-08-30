import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    // Prevent multiples blanks spaces (stack overflow)
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    // Prevent multiples blanks spaces (stack overflow)
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
  };

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr)
  };

  const completeTodo = id => {
    // let updatedTodos = todos.map(todo => {
    //   if (todo.id === id) {
    //     todo.isComplete = !todo.isComplete
    //   }

    //   return todo
    // });

    const updatedTodos = [...todos];

    const targetTodo = updatedTodos.find(todo => todo.id === id);

    targetTodo.isComplete = !targetTodo.isComplete;

    setTodos(updatedTodos);
  };



  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSave={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList
