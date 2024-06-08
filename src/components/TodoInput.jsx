import React, { useState } from 'react';
import { TextField, Button, Box, Stack } from '@mui/material';
import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function TodoInput({ addTodo }) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text, dueDate);
      setText('');
      setDueDate(null);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', mt: 2 }}>
      <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
        <TextField
          label="Add a new todo..."
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
        <DatePicker
          label="Due Date"
          value={dueDate}
          onChange={(newValue) => setDueDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
      <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
        Add
      </Button>
    </Box>
  );
}

export default TodoInput;
