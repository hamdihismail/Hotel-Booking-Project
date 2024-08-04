const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const homeRoutes = require('./routes/homeRoutes');
const dbConfig = require('./config/dbConfig');

// MySQL connection setup
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as ID', connection.threadId);
});

app.set('view engine', 'ejs');
app.use('/', homeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
