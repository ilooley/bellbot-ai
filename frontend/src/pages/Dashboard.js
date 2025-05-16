import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  Message as MessageIcon,
  Home as HomeIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

const stats = [
  { title: 'Active Properties', value: '5', icon: <HomeIcon color="primary" /> },
  { title: 'Total Conversations', value: '128', icon: <MessageIcon color="primary" /> },
  { title: 'Completed Bookings', value: '47', icon: <CheckCircleIcon color="primary" /> },
  { title: 'Pending Requests', value: '3', icon: <ScheduleIcon color="primary" /> },
];

const recentActivity = [
  {
    text: 'New booking request for Seaside Villa',
    secondary: '10 minutes ago',
  },
  {
    text: 'Guest inquiry about check-in time',
    secondary: '1 hour ago',
  },
  {
    text: 'Booking confirmed for Mountain Cabin',
    secondary: '2 hours ago',
  },
];

function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to BellBot.ai
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  {stat.icon}
                  <Typography variant="h6" component="div" sx={{ ml: 1 }}>
                    {stat.value}
                  </Typography>
                </Box>
                <Typography color="text.secondary">
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Activity
          </Typography>
          <List>
            {recentActivity.map((activity, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <MessageIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={activity.text}
                  secondary={activity.secondary}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Dashboard; 