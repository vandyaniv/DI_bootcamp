const knex = require('knex');
const dotenv = require('dotenv');
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const db = knex({
  client: 'pg',
  connection: {
    host: PGHOST,
    port: 5432,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
  },
});

module.exports = db;
