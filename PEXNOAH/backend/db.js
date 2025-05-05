require('dotenv').config();
const mysql = require('mysql2/promise');

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Skole123',
    database: process.env.DB_NAME || 'noah_database',
    port: process.env.DB_PORT || 3306
};

const db = mysql.createPool({
    ...dbConfig,
    waitForConnections: true,
    connectionLimit: 10
});

// Test tilkobling
(async () => {
    try {
        const connection = await db.getConnection();
        console.log('✅ Tilkoblet til MySQL!');
        connection.release();
    } catch (err) {
        console.error('❌ Kunne ikke koble til databasen:', err.message);
    }
})();

module.exports = db;
