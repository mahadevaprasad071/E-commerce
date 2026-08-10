const user = getUser();

if (!user) {
  // Not logged in — send to login
  window.location.href = 'login.html';
} else {
  document.getElementById('profileName').textContent = user.name;
document.getElementById('profileEmail').textContent = user.email;
}

// Render order history
const orders = JSON.parse(localStorage.getItem('order_history')) || [];
const ordersList = document.getElementById('ordersList');
const noOrders = document.getElementById('noOrders');

if (orders.length === 0) {
  noOrders.classList.remove('hidden');
} else {
  orders.forEach(order => {
    const card = document.createElement('div');
    card.className = 'order-card';

    const itemsSummary = order.items.map(i => `${i.name} × ${i.qty}`).join(', ');

    card.innerHTML = `
      <div class="order-card-header">
        <span class="order-date">${order.date}</span>
        <span class="order-total">$${order.total.toFixed(2)}</span>
      </div>
      <p class="order-items">${itemsSummary}</p>
    `;
    ordersList.appendChild(card);
  });
}

document.getElementById('logoutBtn').addEventListener('click', () => {
  logoutUser();
});