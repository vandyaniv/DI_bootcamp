const { products } = require("../config/data.js");

const getAllProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const myproduct = products.find((item) => item.id == id);
  if (!myproduct) return res.sendStatus(404); //.json({ message: "product not found" });
  res.json(myproduct);
};

const searchProduct = (req, res) => {
  // console.log(req.query);
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filtered.length === 0) {
    return res.status(404).json({ message: "no product match your search!" });
  }
  res.json(filtered);
};

const createProduct = (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  const newProduct = { name, price, id: products.length + 1 };
  products.push(newProduct);
  res.json(products);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "product to delete not found" });
  }

  products.splice(index, 1);
  res.json(products);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const index = products.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "product to update not found" });
  }

  products[index] = { ...products[index], name, price };

  res.json({ products, activ: true, status: 3 });
};

module.exports = {
  getAllProducts,
  getProductById,
  searchProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
