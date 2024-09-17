// const { products } = require("../config/data.js");

const getData = async (url, options) => {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

const main = () => {
  getData("http://localhost:3001/products", { method: "GET" }).then(
    (products) => {
      console.log(products);
      render(products);
    }
  );
};

const searchProductId = (e) => {
  e.preventDefault();
  console.log(e.target.name);
  const id = e.target.id.value;
  getData(`http://localhost:3001/products/${id}`).then((data) => {
    console.log(data);
    render([data]);
  });
};

const addProduct = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const price = e.target.price.value;

  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, price }),
  };

  getData("http://localhost:3001/products", options).then((products) => {
    console.log(products);
    render(products);
  });
};

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div style="
      display:inline-block;
      margin:20px;
      padding:20px;
      border: 1px solid #000;
      ">
            <h2>${item.name}</h2>
            <h2>${item.price}</h2>
        </div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};

main();
