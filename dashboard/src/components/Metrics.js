import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Metrics() {
  const metrics = [
    { id: 1, label: 'Users', value: '1,200' },
    { id: 2, label: 'Sessions', value: '4,300' },
    { id: 3, label: 'Bounce Rate', value: '34%' },
  ];

  return (
    <div>
      {metrics.map(metric => (
        <Card key={metric.id}>
          <CardContent>
            <Typography variant="h5">{metric.value}</Typography>
            <Typography color="textSecondary">{metric.label}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Metrics;
