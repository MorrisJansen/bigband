const mysql = require('mysql');

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

function getEvents(callback) {
  db.query('SELECT * FROM evenementen', (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
}

module.exports = { getEvents };
