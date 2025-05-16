import React from 'react';
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Box,
  TextField,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Send as SendIcon,
  Person as PersonIcon,
  SmartToy as BotIcon,
} from '@mui/icons-material';

const conversations = [
  {
    id: 1,
    guest: 'John Smith',
    property: 'Seaside Villa',
    messages: [
      {
        sender: 'guest',
        text: 'Hi, I\'m interested in booking the villa for next week.',
        time: '10:30 AM',
      },
      {
        sender: 'bot',
        text: 'Hello John! The Seaside Villa is available next week. Would you like to know more about the property?',
        time: '10:31 AM',
      },
      {
        sender: 'guest',
        text: 'Yes, what\'s the check-in time?',
        time: '10:32 AM',
      },
      {
        sender: 'bot',
        text: 'Check-in time is 3 PM, and we offer flexible check-in with prior arrangement. Would you like me to check availability for specific dates?',
        time: '10:33 AM',
      },
    ],
  },
];

function Conversations() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ height: 'calc(100vh - 100px)' }}>
          <Typography variant="h6" sx={{ p: 2 }}>
            Recent Conversations
          </Typography>
          <Divider />
          <List>
            {conversations.map((conv) => (
              <ListItem button key={conv.id}>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={conv.guest}
                  secondary={conv.property}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      
      <Grid item xs={12} md={8}>
        <Paper sx={{ height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
            <Typography variant="h6">
              {conversations[0].guest} - {conversations[0].property}
            </Typography>
          </Box>
          
          <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
            {conversations[0].messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: message.sender === 'bot' ? 'flex-start' : 'flex-end',
                  mb: 2,
                }}
              >
                {message.sender === 'bot' && (
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>
                    <BotIcon />
                  </Avatar>
                )}
                <Box
                  sx={{
                    maxWidth: '70%',
                    p: 2,
                    bgcolor: message.sender === 'bot' ? 'grey.100' : 'primary.main',
                    borderRadius: 2,
                    color: message.sender === 'bot' ? 'text.primary' : 'white',
                  }}
                >
                  <Typography variant="body1">
                    {message.text}
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', mt: 1, opacity: 0.7 }}>
                    {message.time}
                  </Typography>
                </Box>
                {message.sender === 'guest' && (
                  <Avatar sx={{ bgcolor: 'grey.400', ml: 1 }}>
                    <PersonIcon />
                  </Avatar>
                )}
              </Box>
            ))}
          </Box>
          
          <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  fullWidth
                  placeholder="Type a message..."
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item>
                <IconButton color="primary">
                  <SendIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Conversations; 