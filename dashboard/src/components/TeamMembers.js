import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function TeamMembers() {
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
    { id: 3, name: 'Alice Johnson', role: 'Project Manager' },
  ];

  return (
    <List>
      {teamMembers.map(member => (
        <ListItem key={member.id}>
          <ListItemText primary={member.name} secondary={member.role} />
        </ListItem>
      ))}
    </List>
  );
}

export default TeamMembers;
