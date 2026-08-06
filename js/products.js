const grid = document.getElementById('productGrid');

products.forEach((product, index) => {
  const card = document.createElement('a');
  card.href = `product-detail.html?id=${product.id}`;
  card.className = 'product-card';
  card.style.setProperty('--delay', `${index * 0.08}s`);

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" class="product-img" />
    </div>
    <div class="product-info">
      <span class="product-category">${product.category}</span>
      <h3>${product.name}</h3>
      <p class="product-price">$${product.price.toFixed(2)}</p>
    </div>
  `;

  grid.appendChild(card);

  const img = card.querySelector('.product-img');
  img.addEventListener('error', () => img.classList.add('img-hidden'));
});