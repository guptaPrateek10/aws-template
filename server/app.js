// app.js
const express = require("express");
const app = express();
const cors = require("cors");
// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
// Define simple API endpoints
app.get("/api/hello", (req, res) => {
  try {
    res.json({ message: "Hello from AWS Lambda!" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/goodbye", (req, res) => {
  try {
    res.json({ message: "Goodbye from AWS Lambda!" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Another endpoint
app.post("/api/data", (req, res) => {
  try {
    const { data } = req.body;
    res.json({ message: `You sent: ${data}` });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = app;
