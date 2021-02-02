const app = require('./app');
const mysql = require('mysql');
app.listen(app.get('port'));


// MySql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_to_do'
  });

app.get('/peoples', (req, res) => {
    const sql = 'SELECT * FROM people';
  
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send('Not result');
      }
    });
  });

  