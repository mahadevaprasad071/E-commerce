const CART_KEY = 'store_cart';

function getCart() {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart(cart);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

function updateQty(productId, newQty) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  if (newQty <= 0) {
    removeFromCart(productId);
    return;
  }

  item.qty = newQty;
  saveCart(cart);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    const count = getCartCount();
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  }
}

document.addEventListener('DOMContentLoaded', updateCartBadge);