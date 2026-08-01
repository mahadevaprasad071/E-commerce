import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const scene = new THREE.Scene();

const canvasContainer = document.getElementById('hero-3d');

const camera = new THREE.PerspectiveCamera(
  45,
  canvasContainer.clientWidth / canvasContainer.clientHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 6); // pulled back further so shape isn't cropped

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
canvasContainer.appendChild(renderer.domElement);

// Lighting — added a second light for better shape definition
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0x6366f1, 3, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const rimLight = new THREE.DirectionalLight(0x818cf8, 1.2);
rimLight.position.set(-5, 3, -5);
scene.add(rimLight);

// Cleaner shape — donut torus reads clearly as 3D (not a blob)
const geometry = new THREE.TorusGeometry(1.3, 0.45, 32, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0x6366f1,
  metalness: 0.75,
  roughness: 0.25,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.x = Math.PI / 4; // tilt so its "donut hole" is visible
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.y += 0.008;
  mesh.rotation.z += 0.002;
  renderer.render(scene, camera);
}
animate();

// Proper resize handling
function handleResize() {
  const width = canvasContainer.clientWidth;
  const height = canvasContainer.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}
window.addEventListener('resize', handleResize);
handleResize(); // run once on load too, in case container size was 0 initially