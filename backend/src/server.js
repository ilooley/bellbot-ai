require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'BellBot.ai API is running' });
});

// Properties routes
app.get('/api/properties', (req, res) => {
  // TODO: Implement property listing retrieval
  res.json([]);
});

// Conversations routes
app.get('/api/conversations', (req, res) => {
  // TODO: Implement conversation history retrieval
  res.json([]);
});

// WhatsApp webhook
app.post('/api/webhook', (req, res) => {
  // TODO: Implement WhatsApp webhook handling
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 