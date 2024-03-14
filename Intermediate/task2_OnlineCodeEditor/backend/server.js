const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/code_editor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// API endpoints
app.get('/', (req, res) => {
  res.send('Welcome to the online code editor API!');
});

app.post('/save', (req, res) => {
  const { code } = req.body;
  // Save code to MongoDB
});

app.get('/retrieve', (req, res) => {
  // Retrieve code from MongoDB
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
