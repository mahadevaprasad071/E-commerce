const grid = document.getElementById('productGrid');

products.forEach((product, index) => {
  const card = document.createElement('a');
  card.href = `product-detail.html?id=${product.id}`;
  card.className = 'product-card';
  card.style.animationDelay = `${index * 0.08}s`;

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'" />
    </div>
    <div class="product-info">
      <span class="product-category">${product.category}</span>
      <h3>${product.name}</h3>
      <p class="product-price">$${product.price.toFixed(2)}</p>
    </div>
  `;

  grid.appendChild(card);
});