const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const port = process.env.PORT || 3000;

// Create Expresss app
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware (Parse the request body as JSON)
app.use(express.json());

// Register the 'routes' middleware to handle requests at the root path
app.use('/api/v1', routes);
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
