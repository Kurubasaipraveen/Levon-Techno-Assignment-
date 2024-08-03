import React from 'react';
import { Grid } from '@mui/material';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import ActivityFeed from './ActivityFeed';
import Metrics from './Metrics';
import Tables from './Tables';
import Tasks from './Tasks';
import Calendar from './Calendar';
import TeamMembers from './TeamMembers';
import Promotions from './Promotions';

function MainContent() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <LineChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <BarChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <PieChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <ActivityFeed />
      </Grid>
      <Grid item xs={12} md={6}>
        <Metrics />
      </Grid>
      <Grid item xs={12} md={6}>
        <Tables />
      </Grid>
      <Grid item xs={12} md={6}>
        <Tasks />
      </Grid>
      <Grid item xs={12} md={6}>
        <Calendar />
      </Grid>
      <Grid item xs={12} md={6}>
        <TeamMembers />
      </Grid>
      <Grid item xs={12} md={6}>
        <Promotions />
      </Grid>
    </Grid>
  );
}

export default MainContent;
