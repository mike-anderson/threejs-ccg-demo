/* global window,document,requestAnimationFrame */
import { Scene, PerspectiveCamera, WebGLRenderer,
         BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

(function init () {
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  const canvas = document.getElementById('app');
  const renderer = new WebGLRenderer({ canvas: canvas });

  camera.position.z = 1000;
  renderer.setSize(window.innerWidth, window.innerHeight);
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const geometry = new BoxGeometry(200, 200, 200);
  const material = new MeshBasicMaterial({ color: 0xff0000, wireframe: true });
  const mesh = new Mesh(geometry, material);

  scene.add(mesh);

  const animationLoop = function () {
    requestAnimationFrame(animationLoop);
   
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);
  };
  animationLoop();
}());