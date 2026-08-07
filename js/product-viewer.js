const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'));
const product = products.find(p => p.id === productId);

if (product) {
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
  document.getElementById('productCategory').textContent = product.category;
} else {
  document.getElementById('productName').textContent = "Product not found";
}

document.getElementById('addToCartBtn').addEventListener('click', () => {
  if (product) {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  } else {
    alert('Product not found.');
  }
});