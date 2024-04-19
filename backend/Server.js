// Backend code - Server.js

const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json()); // Voeg express.json() middleware toe

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'FragielWebsite18',
  database: 'bigband_enterprise'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Serveer de frontend-bestanden in de 'build' map
app.use(express.static(path.join(__dirname, '..', 'build')));

// API endpoint om evenementgegevens op te halen en naar de client te sturen
app.get('/api/events', (req, res) => {
  db.query('SELECT * FROM evenementen', (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result); // Stuur evenementen naar de client als JSON
  });
});

// API endpoint om een nieuw evenement toe te voegen
app.post('/api/add-event', (req, res) => {
  const newEvent = req.body;

  db.query('INSERT INTO evenementen SET ?', newEvent, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error adding event to database' });
    } else {
      res.status(201).json({ message: 'Event added successfully', id: result.insertId });
    }
  });
});

// API endpoint om een specifiek evenement te verwijderen
app.delete('/api/delete-event/:id', (req, res) => {
  const eventId = req.params.id;

  db.query('DELETE FROM evenementen WHERE id = ?', eventId, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error deleting event from database' });
    } else {
      res.status(200).json({ message: 'Event deleted successfully' });
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Luister naar verzoeken op de opgegeven poort
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
