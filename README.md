# 3D Store — E-Commerce Website

A 3D, animated e-commerce website built with plain **HTML, CSS, and JavaScript**,

## 📁 Project Structure
```
3d-ecommerce-site/
├── index.html                 # Home page (3D hero section)
├── login.html                 # Login page (3D background)
├── signup.html                # Signup page (3D background)
├── products.html               # Product listing (animated grid)
├── product-detail.html          # Single product with interactive 3D viewer
├── cart.html                    # 🔜 not built yet
├── checkout.html                # 🔜 not built yet
├── order-success.html           # 🔜 not built yet
│
├── css/
│   ├── style.css                # Global/shared styles (dark theme, base resets)
│   ├── home.css                 # Home page + navbar styles
│   ├── auth.css                 # Login/Signup shared styles (3D background positioning)
│   ├── products.css             # Product grid + card styles
│   └── product-detail.css       # Product detail page layout
│
├── js/
│   ├── login.js                 # Login form logic (fake auth for now)
│   ├── signup.js                # Signup form logic (fake auth for now)
│   ├── three-hero.js            # 3D scene for home page (rotating torus)
│   ├── three-auth.js            # 3D scene for login/signup (icosahedron + wireframe)
│   ├── products-data.js         # Hardcoded product data array
│   ├── products.js              # Renders product cards from data, staggered animation
│   └── product-viewer.js        # Interactive 3D product viewer (OrbitControls)
│
└── assets/
    ├── models/                  # 3D model files (.glb) — not yet added
    ├── images/                  # Product images (product1.png, product2.png, etc.)
    └── icons/
```

## ✅ Progress So Far

### Pages built
- [x] `login.html` — working form, fake login redirect, 3D icosahedron background
- [x] `signup.html` — working form, fake signup redirect, 3D icosahedron background
- [x] `index.html` — home page with animated 3D hero shape (rotating torus)
- [x] `products.html` — product grid pulling from `products-data.js`, staggered fade-in animation, hover lift effect
- [x] `product-detail.html` — reads product `id` from URL, shows name/price/category, **interactive 3D viewer** (drag to rotate, scroll to zoom, auto-rotate)

### Fixes made along the way
- [x] Fixed 3D hero shape rendering as a blurry blob → switched to clean `TorusGeometry` + better camera distance + rim lighting
- [x] Fixed product images not loading — extension mismatch (`.jpg` vs actual `.png`) — renamed files + matched extensions in `products-data.js`
- [x] Fixed unstyled `product-detail.html` page — missing `product-detail.css` file caused a MIME-type error (server returned 404 HTML instead of CSS)
- [x] Confirmed: pages **must** be run via Live Server (`http://127.0.0.1:...`), not opened directly (`file://`), because `type="module"` / `import` statements are blocked under `file://` by browser CORS rules

### Known limitation (current)
- The 3D product viewer currently shows a **placeholder shape** (purple icosahedron), not an actual product model or textured image. Two ways to fix, not yet decided:
  - **Option A:** Use real `.glb` 3D models (e.g. from Sketchfab) for true 3D products
  - **Option B:** Map the actual product photo as a texture onto a simple 3D shape (faster, less realistic)

## 🔜 Next Steps

- [ ] Decide + implement Option A or B for real product visuals in the 3D viewer
- [ ] Build `cart.html` — shopping cart using `localStorage` for state (add/remove/update quantity)
- [ ] Wire up "Add to Cart" button on `product-detail.html` to actually store items
- [ ] Build `checkout.html`
- [ ] Build `order-success.html`
- [ ] Connect login/signup to real auth (or backend) instead of fake redirect + alert
- [ ] Add page transition animations between pages
- [ ] Deploy (GitHub Pages / Vercel / Netlify)

## 🖥️ Running Locally

No build step needed — but **must** use a local server (not double-clicking the file):

1. Open the project folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey) if not already installed
3. Right-click any `.html` file → **"Open with Live Server"**
4. Confirm the URL in your browser starts with `http://127.0.0.1:...` — not `file://`

## 🐛 Debugging Tips (things that already tripped us up once)

- **Page looks completely unstyled?** → Open DevTools (F12) → Console tab → look for red errors. Usually means a CSS/JS file path is wrong or the file doesn't exist yet.
- **3D shape not showing at all?** → Check Console for `import`/module errors — almost always means you're opening via `file://` instead of Live Server.
- **Image not showing on product card?** → Check the file extension in `assets/images/` matches exactly what's written in `products-data.js` (`.jpg` vs `.png` mismatches are the usual culprit).

## 📝 Notes

- Cart and auth state are **not yet persisted** — forms currently just `alert()` + redirect.
- All 3D shapes are placeholders (torus / icosahedron) until real product models/textures are added.
- Design theme: dark background (`#0d0d0d` / `#1a1a1a`), indigo/purple accent (`#6366f1`).
