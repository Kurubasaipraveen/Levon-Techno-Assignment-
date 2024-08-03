import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
function Promotions() {
  const promotions = [
    { id: 1, title: 'Promotion A', description: 'Description of Promotion A' },
    { id: 2, title: 'Promotion B', description: 'Description of Promotion B' },
    { id: 3, title: 'Promotion C', description: 'Description of Promotion C' },
  ];

  return (
    <div>
      {promotions.map(promotion => (
        <Card key={promotion.id}>
          <CardContent>
            <Typography variant="h5">{promotion.title}</Typography>
            <Typography color="textSecondary">{promotion.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Promotions;
