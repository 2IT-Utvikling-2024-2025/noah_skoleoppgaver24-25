const express = require('express');
const router = express.Router();
const db = require('./db');

// **Hent alle MC-eiere**
router.get('/mc_owners', async (req, res) => {
    try {
        const [result] = await db.query('SELECT id, name, address, zip_code, city, registration_number, mc_type FROM mc_owners');
        res.json(result);
    } catch (err) {
        console.error('Databasefeil:', err);
        res.status(500).json({ error: 'Databasefeil', details: err.message });
    }
});

// **Hent en spesifikk MC-eier basert på ID**
router.get('/mc_owners/:id', async (req, res) => {
    try {
        const [result] = await db.query('SELECT id, name, address, zip_code, city, registration_number, mc_type, password, username FROM mc_owners WHERE id = ?', [req.params.id]);
        if (result.length === 0) {
            return res.status(404).json({ message: 'Bruker ikke funnet' });
        }
        res.json(result[0]);
    } catch (err) {
        console.error('Databasefeil:', err);
        res.status(500).json({ error: 'Databasefeil', details: err.message });
    }
});

// **Registrer ny MC-eier**
router.post('/mc_owners', async (req, res) => {
    try {
        const { name, address, zip_code, city, registration_number, mc_type, username, password } = req.body;

        await db.query(
            'INSERT INTO mc_owners (name, address, zip_code, city, registration_number, mc_type, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [name, address, zip_code, city, registration_number, mc_type, username, password]
        );

        res.json({ message: 'MC-eier registrert!' });
    } catch (err) {
        console.error('Feil ved registrering:', err);
        res.status(500).json({ error: 'Databasefeil', details: err.message });
    }
});

// **Oppdater MC-eier (PUT)**
router.put('/mc_owners/:id', async (req, res) => {
    try {
        const { name, address, zip_code, city, registration_number, mc_type, username, password } = req.body;

        const [result] = await db.query(
            'UPDATE mc_owners SET name = ?, address = ?, zip_code = ?, city = ?, registration_number = ?, mc_type = ?, username = ?, password = ? WHERE id = ?',
            [name, address, zip_code, city, registration_number, mc_type, username, password, req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Bruker ikke funnet' });
        }

        res.json({ message: 'MC-eier oppdatert!' });
    } catch (err) {
        console.error('Feil ved oppdatering:', err);
        res.status(500).json({ error: 'Databasefeil', details: err.message });
    }
});

// **Slett MC-eier (DELETE)**
router.delete('/mc_owners/:id', async (req, res) => {
    try {
        const [result] = await db.query('DELETE FROM mc_owners WHERE id = ?', [req.params.id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Bruker ikke funnet' });
        }

        res.json({ message: 'MC-eier slettet!' });
    } catch (err) {
        console.error('Feil ved sletting:', err);
        res.status(500).json({ error: 'Databasefeil', details: err.message });
    }
});

module.exports = router;
