const orderData = JSON.parse(localStorage.getItem('last_order'));
const container = document.getElementById('orderItems');
const totalEl = document.getElementById('orderTotal');
const nameEl = document.getElementById('customerName');

if (!orderData) {
  // No order found — send back home
  window.location.href = 'index.html';
} else {
  nameEl.textContent = orderData.name ? `, ${orderData.name}` : '';

  orderData.items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'order-item-row';
    row.innerHTML = `
      <span>${item.name} × ${item.qty}</span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    `;
    container.appendChild(row);
  });

  totalEl.textContent = `$${orderData.total.toFixed(2)}`;
}