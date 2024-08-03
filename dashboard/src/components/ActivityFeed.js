import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function ActivityFeed() {
  const activities = [
    { id: 1, text: 'User A commented on your post.' },
    { id: 2, text: 'User B liked your photo.' },
    { id: 3, text: 'User C started following you.' },
  ];

  return (
    <List>
      {activities.map(activity => (
        <ListItem key={activity.id}>
          <ListItemText primary={activity.text} />
        </ListItem>
      ))}
    </List>
  );
}

export default ActivityFeed;
