import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from './todosSlice';


function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');
  
    const handleAddTodo = () => {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    };
  
    const handleToggleTodo = (id) => {
      dispatch(toggleTodo(id));
    };

  return (
    <div>
        <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggleTodo(todo.id)}>
            {todo.completed ? <del>{todo.text}</del> : todo.text}
          </li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>

    </div>
  )
}

export default Todos