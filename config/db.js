const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.MYSQLHOST || "localhost", // Railway provides MYSQLHOST
    port: process.env.MYSQLPORT || 3306,       // Default MySQL port
    user: process.env.MYSQLUSER || "root",     // Railway provides MYSQLUSER
    password: process.env.MYSQLPASSWORD || "", // Railway provides MYSQLPASSWORD
    database: process.env.MYSQLDATABASE || "school_management", // Railway provides MYSQLDATABASE
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

module.exports = pool;