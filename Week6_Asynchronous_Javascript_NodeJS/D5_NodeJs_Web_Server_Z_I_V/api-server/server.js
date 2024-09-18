const express = require("express");
const { products } = require("./config/data.js");
const { ok } = require("assert");

const app = express();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});
/** body-parser */
app.use(express.json());

/** CRUD
 * C - CREATE - POST
 * R - READ - GET
 * U - UPDATE - PUT
 * D - DELETE - DELETE
 */

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "product to delete not found" });
  }

  products.splice(index, 1);
  res.json(products);
});

/** update product */
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const index = products.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "product to update not found" });
  }

  products[index] = { ...products[index], name, price };

  res.json({ products, activ: true, status: 3 });
});

/** Create new product - POST */
app.post("/products", (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  const newProduct = { name, price, id: products.length + 1 };
  products.push(newProduct);
  res.json(products);
});

/** Read - get all*/
app.get("/products", (req, res) => {
  res.json(products);
});
/** Read - get one*/
app.get("/products/:id", (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  const myproduct = products.find((item) => item.id == id);
  if (!myproduct) return res.sendStatus(404); //.json({ message: "product not found" });
  res.json(myproduct);
});
/** Read - get search*/
app.get("/search", (req, res) => {
  // console.log(req.query);
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filtered.length === 0) {
    return res.status(404).json({ message: "no product match your search!" });
  }
  res.json(filtered);
});
