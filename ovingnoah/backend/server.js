const express = require('express');
const cors = require('cors');
const database = require('./database'); // riktig navn nå
const routes = require('./routes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Bruk ruter
app.use('/api', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


