var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sqlrooter",
    database: "myTestDB"
});

// "CREATE DATABASE myDB"

// "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY'+
//    ', name VARCHAR(255), address VARCHAR(255))";

// "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";

// "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
// "INSERT INTO customers (name, address) VALUES ?";
//  var values = [
//    ['John', 'Highway 11'],
//    ['Mike', 'Highway 26']
//];
// con.query(sql, [values], function(err, result)

// "SELECT * FROM customers";
// con.query(sql, function(err, result)

var sql = "SELECT * FROM customers"; 

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    con.query(sql, function(err, result, fields){
        if(err) throw err;
        console.log(result);
    })
});

// Result Object:
// {
//     fieldCount: 0,
//     affectedRows: 14,
//     insertId: 0,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '\'Records:14  Duplicated: 0  Warnings: 0',
//     protocol41: true,
//     changedRows: 0
//   }