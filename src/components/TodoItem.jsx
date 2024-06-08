import React, { useState, useEffect } from 'react';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  TextField,
  ListItemSecondaryAction,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo, editingTodo, updateTodo }) {
  const [text, setText] = useState(todo.text);

  useEffect(() => {
    setText(todo.text);
  }, [todo.text]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo.id, text);
  };

  return (
    <ListItem>
      <Checkbox checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
      {editingTodo?.id === todo.id ? (
        <form onSubmit={handleEditSubmit}>
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
            onBlur={handleEditSubmit}
          />
        </form>
      ) : (
        <ListItemText
          primary={todo.text}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        />
      )}
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" onClick={() => editTodo(todo.id)}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;
