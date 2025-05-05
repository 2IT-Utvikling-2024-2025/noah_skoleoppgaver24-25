const express = require("express");
const cors = require("cors");
const bodyParser = require("express");
const memberRoutes = require("./routes/members"); // Import member routes

const app = express();

app.use(cors());
app.use(bodyParser.json()); // Parse JSON data

app.use("/api/members", memberRoutes); // Use members API

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



app.post("/api/register", (req, res) => {
    console.log("New registration request received:", req.body); // 🔥 Logs the incoming request data

    const { name, address, zip_code, city, registration_number, mc_type } = req.body;
    
    const sql = "INSERT INTO mc_owners (name, address, zip_code, city, registration_number, mc_type) VALUES (?, ?, ?, ?, ?, ?)";
    
    db.query(sql, [name, address, zip_code, city, registration_number, mc_type], (err, result) => {
        if (err) {
            console.error("Database insert error:", err); // 🔥 Logs any SQL error
            return res.status(500).json({ error: "Database error" });
        }

        console.log("User registered successfully:", result); // 🔥 Logs successful database insertion
        res.json({ message: "User registered successfully" });
    });
});
