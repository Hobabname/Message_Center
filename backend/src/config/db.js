require('dotenv').config();
const sql = require('mssql');

console.log('DB_SERVER =', process.env.DB_SERVER);

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER, // localhost ✅
  port: Number(process.env.DB_PORT), // 1433 ✅
  database: process.env.DB_NAME,
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true',
    trustServerCertificate: true
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('✅ Connected to SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('❌ Database Connection Failed:', err);
  });

module.exports = {
  sql,
  poolPromise
};
