import React from 'react';
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';
function Tasks() {
  const tasks = [
    { id: 1, text: 'Task A', completed: false },
    { id: 2, text: 'Task B', completed: true },
    { id: 3, text: 'Task C', completed: false },
  ];

  return (
    <List>
      {tasks.map(task => (
        <ListItem key={task.id}>
          <Checkbox checked={task.completed} />
          <ListItemText primary={task.text} />
        </ListItem>
      ))}
    </List>
  );
}

export default Tasks;
