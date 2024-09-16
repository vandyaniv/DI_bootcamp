const express = require("express");
// const { products } = require("./config/data.js");
const productRouter = require("./routes/products.router.js");
const usersRouter = require("./routes/users.router.js");

const app = express();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

/** body-parser */
app.use(express.json());

app.use("/", express.static(__dirname + "/public"));



// app.use('/products', logger)
// app.use('/products/api',auth)

app.use("/products", productRouter);
app.use("/users", usersRouter);

/**
 *  server
 *    |_ config - connection to databases
 *    |_ models - queries to database/files
 *    |_ controllers - function implements code - request, response
 *    |_ routes - route for api
 *    |_ middlewares - function - req, res - auth, log
 */
