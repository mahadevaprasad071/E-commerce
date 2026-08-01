# 3D Store — E-Commerce Website

A 3D, animated e-commerce website built with plain **HTML, CSS, and JavaScript**, using **Three.js** for 3D visuals.

## 🚀 Tech Stack
- HTML5 / CSS3 / JavaScript (vanilla, no framework)
- [Three.js](https://threejs.org/) — 3D rendering (via CDN import map)
- Live Server (VS Code) for local dev

## 📁 Project Structure
```
3d-ecommerce-site/
├── index.html          # Home page (3D hero section)
├── login.html           # Login page (3D background)
├── signup.html          # Signup page (3D background)
├── css/
│   ├── style.css        # Global/shared styles
│   ├── home.css         # Home page styles
│   └── auth.css          # Login/Signup shared styles
├── js/
│   ├── login.js          # Login form logic
│   ├── signup.js         # Signup form logic
│   ├── three-hero.js      # 3D scene for home page
│   └── three-auth.js       # 3D scene for login/signup pages
└── assets/
    ├── models/            # 3D model files (.glb) — not yet added
    ├── images/
    └── icons/
```

## ✅ Progress So Far

- [x] Project folder structure set up
- [x] `login.html` — working form with fake login redirect
- [x] `signup.html` — working form with fake signup redirect
- [x] `index.html` — home page with animated 3D hero shape (rotating torus)
- [x] `auth-3d` background shape added behind login/signup cards
- [x] Fixed initial 3D rendering bug (blob → clean rotating torus, better camera + lighting)

## 🔜 Next Steps

- [ ] Build `products.html` — product listing page
- [ ] Build `product-detail.html` — single product page with interactive 3D viewer
- [ ] Build `cart.html` — shopping cart (using `localStorage` for state)
- [ ] Build `checkout.html`
- [ ] Build `order-success.html`
- [ ] Connect login/signup to real auth (or backend) instead of fake redirect
- [ ] Replace placeholder 3D shapes with real product models (`.glb` from Sketchfab or custom)
- [ ] Add page transition animations
- [ ] Deploy (GitHub Pages / Vercel / Netlify)

## 🖥️ Running Locally

No build step needed — just open the HTML files directly in a browser, or use **Live Server** in VS Code for auto-reload:

1. Clone the repo
2. Open the folder in VS Code
3. Right-click `index.html` → "Open with Live Server"

## 📝 Notes

- Cart and auth state are not yet persisted — currently just alerts + redirects for form submissions.
- 3D shapes are placeholders (torus / icosahedron) until real product models are added.
