require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger alle requests
app.use((req, res, next) => {
    console.log(`🔹 ${req.method} ${req.url}`);
    if (Object.keys(req.body).length > 0) {
        console.log('🔸 Body:', JSON.stringify(req.body, null, 2));
    }
    next();
});

// Aktive ruter
console.log('📌 Tilgjengelige ruter:');
app.use('/api', routes);

// 404-feilhåndtering
app.use((req, res) => {
    res.status(404).json({ error: 'Ressurs ikke funnet' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('🚨 Serverfeil:', err.message);
    res.status(500).json({ error: 'Serverfeil', details: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server kjører på port ${PORT}`));
