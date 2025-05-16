import React from 'react';
import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Switch,
  FormControlLabel,
  Divider,
} from '@mui/material';

function Settings() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Account Settings
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Name"
                defaultValue="John Doe"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                defaultValue="john@example.com"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Phone"
                defaultValue="+1 (555) 123-4567"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Save Changes
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              WhatsApp Integration
            </Typography>
            <TextField
              fullWidth
              label="Twilio Account SID"
              type="password"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Twilio Auth Token"
              type="password"
              margin="normal"
            />
            <TextField
              fullWidth
              label="WhatsApp Number"
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Connect WhatsApp
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Notifications
            </Typography>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Email notifications for new bookings"
            />
            <Divider sx={{ my: 2 }} />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="WhatsApp notifications for guest messages"
            />
            <Divider sx={{ my: 2 }} />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Daily summary reports"
            />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              AI Assistant Settings
            </Typography>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Automatic responses to common questions"
            />
            <Divider sx={{ my: 2 }} />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Smart booking suggestions"
            />
            <Divider sx={{ my: 2 }} />
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Custom greeting message"
              defaultValue="Hello! Welcome to our property. How can I assist you today?"
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Save AI Settings
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Settings; 