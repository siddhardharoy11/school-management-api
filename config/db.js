const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER || 'school_admin',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'school_management',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

module.exports = pool;