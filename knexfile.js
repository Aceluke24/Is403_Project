// knexfile.js
require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'admin',
      database: 'foodisus',
      port: 5432,
    },
    migrations: {
      directory: './migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.RDS_HOSTNAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DB_NAME,
      port: process.env.RDS_PORT || 5432,
      ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false
    },
    migrations: {
      directory: './migrations'
    }
  }
};