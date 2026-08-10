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

  const orderData = {
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    name: document.getElementById('fullName').value,
    total: getCartTotal(),
    items: getCart()
  };

  // Save as the most recent order (for order-success.html)
  localStorage.setItem('last_order', JSON.stringify(orderData));

  // Also append to full order history (for profile.html)
  const orders = JSON.parse(localStorage.getItem('order_history')) || [];
  orders.unshift(orderData); // newest first
  localStorage.setItem('order_history', JSON.stringify(orders));

  localStorage.removeItem('store_cart');

  window.location.href = 'order-success.html';
});

renderSummary();