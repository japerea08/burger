// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  port: 3306,
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "b57784fd43c934",
  password: "6d5e7f43",
  database: "heroku_80b35b2ee1d6ee7"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
