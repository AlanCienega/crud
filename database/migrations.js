require("dotenv").config({ path: "./.env" });
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
  if (err) {
    console.log("Error de conexion");
    return;
  }
});
connection.query(
  "CREATE TABLE customers(id int (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, name varchar (50) NOT NULL, address varchar (100) NOT NULL, phone varchar(15));",
  (err, rows) => {
    if (err) throw err;
    console.log("tabla customers creada correctamente!");
  }
);

connection.end((err) => {
  console.log("bye");
});
