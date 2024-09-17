const knex = require("knex");
const dotenv = require("dotenv");
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});

const products = [
  { id: 1, name: "iPhone", price: 900 },
  { id: 2, name: "iPad", price: 800 },
  { id: 3, name: "iWatch", price: 1900 },
];

const users = [
  { id: 1, name: "John", email: "jjj@gmail.com" },
  { id: 2, name: "Anne", email: "aaa@gmail.com" },
  { id: 3, name: "Dana", email: "ddd@gmail.com" },
];

module.exports = {
  products,
  users,
  db,
};
