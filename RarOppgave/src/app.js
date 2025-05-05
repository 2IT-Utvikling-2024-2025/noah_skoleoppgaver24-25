const express = require('express');
const cors = require('cors');

const authRoutes = require('./v1/routes/authRoutes'); // NB: "Routes" med stor R
const dashRoutes = require('./v1/routes/dashRoutes')

const app = express();

app.use(cors());
app.use(express.json());
 
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/dashboard', dashRoutes)

app.listen(3000, () => {
  console.log('Server on port', 3000);
});


