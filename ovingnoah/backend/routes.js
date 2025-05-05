const express = require("express");
const db = require("./database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();



// GET all products
router.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
});

// POST a new product
router.post("/products", (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({ error: "Name, price and description are required" });
  }

  const sql = "INSERT INTO products (name, price, description) VALUES (?, ?, ?)";
  db.query(sql, [name, price, description], (err, result) => {
    if (err) {
      console.error("Error adding product:", err);
      return res.status(500).json({ error: "Database insert error" });
    }

    res.json({ message: "Product added successfully", id: result.insertId });
  });
});

// PUT update a product
router.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({ error: "Name, price and description are required" });
  }

  const sql = "UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?";
  db.query(sql, [name, price, description, productId], (err, result) => {
    if (err) {
      console.error("Error updating product:", err);
      return res.status(500).json({ error: "Database update error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product updated successfully" });
  });
});


router.delete("/products/:id", (req, res) => {
  const productId = req.params.id;

  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [productId], (err, result) => {
    if (err) {
      console.error("Error deleting product:", err);
      return res.status(500).json({ error: "Database delete error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  });
});






router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Username, email, and password are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error("Error registering user:", err);
        return res.status(500).json({ error: "Database insert error" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  } catch (err) {
    console.error("Hashing error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST login user
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });
  });
});

module.exports = router;
