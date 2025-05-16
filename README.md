# BellBot.ai

A WhatsApp-integrated chatbot assistant for Airbnb hosts that helps manage guest communications and bookings.

## Project Structure

```
bellbot-ai/
├── frontend/          # React frontend application
│   ├── src/          # Source files
│   ├── public/       # Static files
│   └── package.json  # Frontend dependencies
└── backend/          # Node.js/Express backend
    ├── src/          # Source files
    └── package.json  # Backend dependencies
```

## Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- WhatsApp Business API account
- Twilio account

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd bellbot-ai
   ```

2. Set up the backend:
   ```bash
   cd backend
   npm install
   cp .env.example .env  # Configure your environment variables
   npm run dev
   ```

3. Set up the frontend:
   ```bash
   cd frontend
   npm install
   npm start
   ```

The frontend will run on http://localhost:3000 and the backend on http://localhost:3001.

## Features

- WhatsApp integration for guest communication
- Property management dashboard
- Automated responses to common guest inquiries
- Booking management system
- Real-time chat interface

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 