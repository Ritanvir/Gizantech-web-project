const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const limiter = rateLimit({
  windowMs: 1000,
  max: 100,
  message: {
    status: 429,
    message: "Too Many Requests - Limit is 100 requests per second.",
  }
});
app.use('/temperature', limiter);

function getTemperature() {
  return Math.floor(Math.random() * (45 - 15 + 1)) + 15;
}

app.get('/temperature', (req, res) => {
  res.json({ temperature: getTemperature(), timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
