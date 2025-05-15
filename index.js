const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let ledStatus = 'off'; // In-memory storage for LED status

// Get LED status
app.get('/led-status', (req, res) => {
  res.send(ledStatus);
});

// Update LED status
app.post('/led-status', (req, res) => {
  const { status } = req.body;
  if (status === 'on' || status === 'off') {
    ledStatus = status;
    res.json({ message: `LED turned ${status}` });
  } else {
    res.status(400).json({ error: 'Invalid status. Use "on" or "off".' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`LED Control Server running on http://localhost:${PORT}`);
});
