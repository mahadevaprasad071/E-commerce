function renderSummary() {
  const cart = getCart();
  const container = document.getElementById('summaryItems');
  container.innerHTML = '';

  if (cart.length === 0) {
    // No items — send back to cart
    window.location.href = 'cart.html';
    return;
  }

  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'summary-item';
    row.innerHTML = `
      <span>${item.name} × ${item.qty}</span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    `;
    container.appendChild(row);
  });

  document.getElementById('summaryTotal').textContent = `$${getCartTotal().toFixed(2)}`;
}

document.getElementById('checkoutForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Fake order processing — later this can call a real payment API
  const orderData = {
    name: document.getElementById('fullName').value,
    total: getCartTotal(),
    items: getCart()
  };

  localStorage.setItem('last_order', JSON.stringify(orderData));

  // Clear the cart after "placing" the order
  localStorage.removeItem('store_cart');

  window.location.href = 'order-success.html';
});

renderSummary();