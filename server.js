const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/downtime', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// Create Downtime model
const Downtime = mongoose.model('Downtime', new mongoose.Schema({
  workstation: String,
  startTime: Date,
  endTime: Date
}));

// Create express app
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Handle POST request to start downtime
app.post('/downtime/start', (req, res) => {
  const { workstation } = req.body;
  const startTime = new Date();
  
  const downtime = new Downtime({
    workstation,
    startTime
  });

  downtime.save()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Failed to save downtime:', error);
      res.sendStatus(500);
    });
});

// Handle POST request to end downtime
app.post('/downtime/end', (req, res) => {
  const { workstation } = req.body;
  const endTime = new Date();
  
  Downtime.findOneAndUpdate(
    { workstation, endTime: null },
    { endTime },
    { new: true }
  )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Failed to update downtime:', error);
      res.sendStatus(500);
    });
});

// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
