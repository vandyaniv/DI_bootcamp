const { products } = require("../config/data.js");

const {
  _getAllProducts,
  _getProductById,
  _createProduct,
} = require("../models/products.model.js");

const getAllProducts = (req, res) => {
  // res.json(products);
  _getAllProducts()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const getProductById = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const data = await _getProductById(id);
    res.json(data);
  } catch (error) {
    res.status(404).json({ mesaage: "no product with this if was found" });
  }
  // const myproduct = products.find((item) => item.id == id);
  // if (!myproduct) return res.sendStatus(404); //.json({ message: "product not found" });
  // res.json(myproduct);
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

const createProduct = async (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  try {
    const data = await _createProduct(name, price);
    // res.json(data);
    getAllProducts(req,res)
  } catch (error) {
    res.status(402).json({ message: "somthing is wrong" });
  }
  // const newProduct = { name, price, id: products.length + 1 };
  // products.push(newProduct);
  // res.json(products);
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
