function searchProductId(event) {
  event.preventDefault();
  const id = event.target.elements.id.value;
  const product = products.find((p) => p.id === id);
  if (product) {
    alert(`Product found: ${product.name} - $${product.price}`);
  } else {
    alert('Product not found');
  }
}
