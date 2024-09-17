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

// async function getVerion() {
//   const result = await db.raw(`select version()`);
//   console.log(result.rows);
// }
// getVerion();

// db("products")
// //   .where({ id: 1 })
//   .select("id", "name", "price")
//   .orderBy('name')
//   //   .where("id", 1)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// db.raw('select id, name, price from products where id = ? and price = ?',[2, 200])
// .then((data) => {
//     console.log(data.rows);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// db("products")
//   .insert(
//     [
//       { name: "Product 600", price: 600 },
//       { name: "Product 700", price: 700 },
//     ],
//     ["id"]
//   )
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// db("products")
//   .update({ name: "Product 333", price: 333 }, ["name", "price", "id"])
//   .where({ id: 3 })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// db("products")
//   .where({ id: 3 })
//   .del()
//   .returning("id", "name", "price")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const test = async () => {
  try {
    const trx = await db.transaction();

    const product1 = await db("products")
      .insert({ name: "product 3", price: 11111 }, ["id"])
      .transacting(trx);

    console.log("product 1=>", product1);

    const product2 = await db("products")
      .insert({ name: "product 4", price: 22222 }, ["id", "name", "price"])
      .transacting(trx);

    console.log("product 2=>", product2);

    await trx.commit();
  } catch (e) {
    console.log(e);
    await trx.rollback();
  }
};
test();
