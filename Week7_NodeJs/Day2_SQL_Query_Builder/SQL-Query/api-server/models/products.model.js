const { db } = require("../config/data.js");

const _getAllProducts = () => {
  return db("products").select("id", "name", "price").orderBy("id");
};

const _getProductById = (id) => {
  return db("products").where({ id });
};

const _createProduct = (name, price) => {
  return db("products").insert({ name, price }, ["id", "name", "price"]);
};

module.exports = {
  _getAllProducts,
  _getProductById,
  _createProduct
};
