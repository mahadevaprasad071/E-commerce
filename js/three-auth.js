import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const scene = new THREE.Scene();

const canvasContainer = document.getElementById('auth-3d');
const camera = new THREE.PerspectiveCamera(
  50,
  canvasContainer.clientWidth / canvasContainer.clientHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
canvasContainer.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0x6366f1, 2, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Icosahedron looks great for auth pages — sharper, more "premium" feel
const geometry = new THREE.IcosahedronGeometry(1.4, 0);
const material = new THREE.MeshStandardMaterial({
  color: 0x6366f1,
  metalness: 0.7,
  roughness: 0.2,
  wireframe: false,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Subtle wireframe overlay for extra style
const wireframeGeo = new THREE.IcosahedronGeometry(1.42, 0);
const wireframeMat = new THREE.MeshBasicMaterial({
  color: 0x818cf8,
  wireframe: true,
  transparent: true,
  opacity: 0.3,
});
const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
scene.add(wireframeMesh);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.003;
  mesh.rotation.y += 0.005;
  wireframeMesh.rotation.x += 0.003;
  wireframeMesh.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
});