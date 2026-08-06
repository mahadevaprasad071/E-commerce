function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cartItems');
  const emptyMsg = document.getElementById('emptyCartMsg');
  const summary = document.getElementById('cartSummary');

  container.innerHTML = '';

  const isEmpty = cart.length === 0;
  emptyMsg.classList.toggle('hidden', !isEmpty);
  summary.classList.toggle('hidden', isEmpty);

  if (isEmpty) return;

  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p class="item-price">$${item.price.toFixed(2)}</p>
      </div>
      <div class="qty-controls">
        <button class="qty-btn" data-action="decrease" data-id="${item.id}">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
      </div>
      <p class="item-total">$${(item.price * item.qty).toFixed(2)}</p>
      <button class="remove-btn" data-id="${item.id}">✕</button>
    `;
    container.appendChild(row);

    const img = row.querySelector('.cart-item-img');
    img.addEventListener('error', () => img.classList.add('img-hidden'));
  });

  document.getElementById('cartTotal').textContent = `$${getCartTotal().toFixed(2)}`;

  container.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const cart = getCart();
      const item = cart.find(i => i.id === id);
      const newQty = btn.dataset.action === 'increase' ? item.qty + 1 : item.qty - 1;
      updateQty(id, newQty);
      renderCart();
    });
  });

  container.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(parseInt(btn.dataset.id));
      renderCart();
    });
  });
}

document.getElementById('checkoutBtn')?.addEventListener('click', () => {
  window.location.href = 'checkout.html';
});

renderCart();