import React, { useState } from 'react';
import { Container, Typography, Box, createTheme, ThemeProvider } from '@mui/material';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


// 创建一个自定义的 Material UI 主题
const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336', // Red
    },
    secondary: {
      main: '#e91e63', // Pink
    },
  },
  typography: {
    fontFamily: 'Quicksand, sans-serif',
  },
});

function App() {
  const [todos, setTodos] = useState([]); // 待办事项列表的状态
  const [editingTodo, setEditingTodo] = useState(null); // 当前编辑的待办事项
  

  // 添加待办事项
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // 切换待办事项完成状态
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 删除待办事项
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 开始编辑待办事项
  const editTodo = (id) => {
    setEditingTodo(todos.find((todo) => todo.id === id));
  };

  // 更新待办事项
  const updateTodo = (id, updatedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
    setEditingTodo(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ bgcolor: '#e3f2fd', p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          To-Do List
        </Typography>
        <Box sx={{ mb: 2 }}>
          <TodoInput addTodo={addTodo} />
        </Box>
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          editingTodo={editingTodo}
          updateTodo={updateTodo}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
