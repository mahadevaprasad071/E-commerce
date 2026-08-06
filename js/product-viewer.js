import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'));
const product = products.find(p => p.id === productId);

if (product) {
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
  document.getElementById('productCategory').textContent = product.category;
} else {
  document.getElementById('productName').textContent = "Product not found";
}

const container = document.getElementById('product-3d');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const pointLight = new THREE.PointLight(0x6366f1, 3, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);
const rimLight = new THREE.DirectionalLight(0x818cf8, 1);
rimLight.position.set(-5, 3, -5);
scene.add(rimLight);

const geometry = new THREE.IcosahedronGeometry(1.4, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x6366f1,
  metalness: 0.6,
  roughness: 0.3,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.5;
controls.enablePan = false;
controls.minDistance = 3;
controls.maxDistance = 8;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

function handleResize() {
  const width = container.clientWidth;
  const height = container.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}
window.addEventListener('resize', handleResize);
handleResize();

// --- Add to Cart wiring ---
document.getElementById('addToCartBtn').addEventListener('click', () => {
  if (product) {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  } else {
    alert('Product not found.');
  }
});