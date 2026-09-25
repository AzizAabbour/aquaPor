import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DVisual() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group for all rotating 3D elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Abstract 3D Geometric Sphere (Icosahedron Wireframe)
    const sphereGeo = new THREE.IcosahedronGeometry(4.5, 3);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x00F5D4,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    mainGroup.add(sphereMesh);

    // 2. Inner Glowing Core Sphere
    const innerGeo = new THREE.IcosahedronGeometry(2.4, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00D9FF,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 3. Central Nucleus Point Cloud
    const corePointsCount = 180;
    const corePointsGeo = new THREE.BufferGeometry();
    const corePositions = new Float32Array(corePointsCount * 3);
    for (let i = 0; i < corePointsCount; i++) {
      const radius = 3.2 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      corePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      corePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      corePositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    corePointsGeo.setAttribute('position', new THREE.BufferAttribute(corePositions, 3));
    const corePointsMat = new THREE.PointsMaterial({
      color: 0x00F5D4,
      size: 0.12,
      transparent: true,
      opacity: 0.9,
    });
    const corePoints = new THREE.Points(corePointsGeo, corePointsMat);
    mainGroup.add(corePoints);

    // 4. Orbiting Rings / Gyroscope Hoops
    const createRing = (radius, tube, color, rotX, rotY) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.35,
        wireframe: true
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      return ring;
    };

    const ring1 = createRing(6.2, 0.03, 0x00F5D4, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(7.1, 0.03, 0x00D9FF, -Math.PI / 4, Math.PI / 4);
    const ring3 = createRing(5.6, 0.02, 0x00F5D4, Math.PI / 2, 0);
    mainGroup.add(ring1);
    mainGroup.add(ring2);
    mainGroup.add(ring3);

    // 5. Swirling Ambient Space Particles
    const particlesCount = 350;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const r = 6 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0x00D9FF,
      size: 0.08,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    mainGroup.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 1.2;
      targetY = (y / rect.height) * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotations
      sphereMesh.rotation.y = elapsedTime * 0.12;
      sphereMesh.rotation.x = elapsedTime * 0.08;

      innerMesh.rotation.y = -elapsedTime * 0.18;
      innerMesh.rotation.z = elapsedTime * 0.14;

      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.15;
      ring3.rotation.x = Math.PI / 2 + Math.sin(elapsedTime * 0.5) * 0.2;

      particles.rotation.y = elapsedTime * 0.04;
      corePoints.rotation.y = -elapsedTime * 0.09;

      mainGroup.rotation.y = mouseX * 0.5;
      mainGroup.rotation.x = -mouseY * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-visual-container">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="hero-three-canvas" />

      {/* Aqua Glow Backing */}
      <div className="hero-visual-glow" />

      {/* Floating Interactive Tech Badges */}
      <div className="tech-badge tech-badge-react">
        <div className="badge-icon-wrap react-pulse">⚛</div>
        <div className="badge-info">
          <span className="badge-title">React.js</span>
          <span className="badge-sub">Component Architecture</span>
        </div>
      </div>

      <div className="tech-badge tech-badge-js">
        <div className="badge-icon-wrap js-gold">JS</div>
        <div className="badge-info">
          <span className="badge-title">JavaScript</span>
          <span className="badge-sub">ES6+ / Async Engine</span>
        </div>
      </div>

      <div className="tech-badge tech-badge-node">
        <div className="badge-icon-wrap node-green">⬡</div>
        <div className="badge-info">
          <span className="badge-title">Node.js</span>
          <span className="badge-sub">High-Throughput APIs</span>
        </div>
      </div>

      <div className="tech-badge tech-badge-db">
        <div className="badge-icon-wrap db-cyan">🗄️</div>
        <div className="badge-info">
          <span className="badge-title">Databases</span>
          <span className="badge-sub">SQL & NoSQL Systems</span>
        </div>
      </div>

      {/* Floating Futuristic Code Symbols */}
      <div className="floating-code code-symbol-1">&lt;div /&gt;</div>
      <div className="floating-code code-symbol-2">{`{ code: "clean" }`}</div>
      <div className="floating-code code-symbol-3">const deploy = true;</div>
      <div className="floating-code code-symbol-4">=&gt;</div>
    </div>
  );
}
