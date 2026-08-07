
import * as THREE from 'three';

const container = document.getElementById('success-3d');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 6);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const pointLight = new THREE.PointLight(0x22c55e, 3, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Green checkmark-ish torus ring to celebrate success
const geometry = new THREE.TorusGeometry(1.3, 0.25, 32, 100, Math.PI * 1.5);
const material = new THREE.MeshStandardMaterial({
  color: 0x22c55e,
  metalness: 0.6,
  roughness: 0.3,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.z += 0.015;
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