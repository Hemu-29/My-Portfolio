/* ==============================================================
   Three.js Developer Blocks - Cursor Attraction
============================================================== */
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

// WebGL Renderer setup
const canvasContainer = document.getElementById('canvas-container');
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
if (canvasContainer) {
  canvasContainer.appendChild(renderer.domElement);
}

// Block Geometries and Materials (Cyan and Purple)
const geometries = [
  new THREE.BoxGeometry(1.2, 1.2, 1.2),
  new THREE.TetrahedronGeometry(1.3),
  new THREE.OctahedronGeometry(1.0),
  new THREE.IcosahedronGeometry(1.0, 0),
  new THREE.TorusGeometry(0.8, 0.25, 8, 20)
];
const materialPurple = new THREE.MeshBasicMaterial({
  color: 0x9333ea,
  wireframe: true,
  transparent: true,
  opacity: 0.4
});
const materialCyan = new THREE.MeshBasicMaterial({
  color: 0x06b6d4,
  wireframe: true,
  transparent: true,
  opacity: 0.4
});

// Create a Grid of Blocks
const blocks = [];
const gridSize = 14;
const spacing = 4.5;

for (let x = -gridSize; x <= gridSize; x++) {
  for (let y = -gridSize; y <= gridSize; y++) {
    // Only spawn a block 25% of the time to make it look intentionally scattered like data nodes
    if (Math.random() > 0.75) {
      const isCyan = Math.random() > 0.5;
      const randomGeom = geometries[Math.floor(Math.random() * geometries.length)];
      const mesh = new THREE.Mesh(randomGeom, isCyan ? materialCyan : materialPurple);

      const baseX = x * spacing + (Math.random() * 2 - 1);
      const baseY = y * spacing + (Math.random() * 2 - 1);
      const baseZ = (Math.random() * 10 - 5) - 15;

      mesh.position.set(baseX, baseY, baseZ);

      // Store Base Data so the blocks know where their "home" is
      mesh.userData = {
        baseX: baseX,
        baseY: baseY,
        baseZ: baseZ,
        rxOffset: Math.random() * Math.PI,     // Random rotation offset
        ryOffset: Math.random() * Math.PI,
        rotationSpeed: (Math.random() * 0.02) + 0.01
      };

      scene.add(mesh);
      blocks.push(mesh);
    }
  }
}

// Raycaster & Mouse setup
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(-9999, -9999); // Offscreen initially
const mouseWorldPos = new THREE.Vector3();
// Calculate intersections at the average depth depth of the blocks (Z = -15) instead of Z = 0
// Three.js Plane formula: normal.dot(p) + constant = 0  -->  p.z + 15 = 0  --> p.z = -15
const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 15);

// Track Cursor 
document.addEventListener('mousemove', (event) => {
  // Normalize screen coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Find where the cursor maps in the 3D world (at Z=0 plane)
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(planeZ, mouseWorldPos);
});

// Main Animation Loop
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  blocks.forEach(block => {
    // 1. Endless idle rotation
    block.rotation.x += block.userData.rotationSpeed;
    block.rotation.y += block.userData.rotationSpeed;

    // Default target is their "home" location
    let targetX = block.userData.baseX;
    let targetY = block.userData.baseY;
    let targetZ = block.userData.baseZ;

    // Calculate distance from base to cursor in 3D space
    if (mouseWorldPos) {
      const dx = mouseWorldPos.x - block.userData.baseX;
      const dy = mouseWorldPos.y - block.userData.baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // If cursor gets within 'radius' of a block's base...
      const radius = 18;
      if (dist < radius) {
        // Calculate the repel strength (stronger push when the cursor is exactly on the block)
        const force = (radius - dist) / radius;
        const maxRepelDistance = 12;

        // Displace the block slightly AWAY from the cursor using negative vectors
        targetX = block.userData.baseX - (dx * force * maxRepelDistance / dist);
        targetY = block.userData.baseY - (dy * force * maxRepelDistance / dist);

        // Push the blocks deep backwards into the dark space (Z-axis pushback)
        targetZ = block.userData.baseZ - (force * 15);
      }
    }

    // 2. Smooth Lerp (Spring Physics) towards the target
    block.position.x += (targetX - block.position.x) * 0.08;
    block.position.y += (targetY - block.position.y) * 0.08;
    block.position.z += (targetZ - block.position.z) * 0.08;
  });

  renderer.render(scene, camera);
}
animate();

// Handle Window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


/* ==============================================================
   Typed.js Setup
============================================================== */
var typed = new Typed('.typed-text', {
  strings: [
    'Institutional Digital Transformation.',
    'Full Stack Engineering.',
    'Mobile Application Development.'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
  showCursor: true,
  cursorChar: '|'
});


/* ==============================================================
   Mobile Nav Menu
============================================================== */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}