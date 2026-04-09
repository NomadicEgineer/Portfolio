import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleSwarm = () => {
  const count = 3000;
  const pointsRef = useRef();

  const { positions, originals, randoms } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const originals = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    for (let i = 0; i < count * 3; i += 3) {
      const r = 20 + Math.random() * 80;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi) - 10;

      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;

      originals[i] = x;
      originals[i + 1] = y;
      originals[i + 2] = z;

      randoms[i / 3] = Math.random();
    }
    return { positions, originals, randoms };
  }, []);

  const vec = new THREE.Vector3();
  const mouseVec = new THREE.Vector3();
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    // Parallax on scroll
    const scrollY = window.scrollY;
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -(scrollY * 0.003), 0.1);

    // Gentle rotation
    pointsRef.current.rotation.y += delta * 0.04;
    pointsRef.current.rotation.x += delta * 0.015;

    // Mouse ray for star repulsion
    mouseVec.set(mouse.current.x, mouse.current.y, 0.5);
    mouseVec.unproject(state.camera);
    const rayDir = mouseVec.sub(state.camera.position).normalize();

    const localOrigin = state.camera.position.clone();
    pointsRef.current.worldToLocal(localOrigin);

    const pointOnRay = state.camera.position.clone().add(rayDir);
    pointsRef.current.worldToLocal(pointOnRay);
    const localDir = pointOnRay.sub(localOrigin).normalize();

    const posArray = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count * 3; i += 3) {
      vec.set(posArray[i], posArray[i + 1], posArray[i + 2]);

      const bx = originals[i];
      const by = originals[i + 1];
      const bz = originals[i + 2];
      const time = state.clock.elapsedTime;
      const rx = bx + Math.sin(time * 0.5 + randoms[i / 3] * 100) * 1.0;
      const ry = by + Math.cos(time * 0.5 + randoms[i / 3] * 100) * 1.0;
      const rz = bz + Math.sin(time * 0.5 + randoms[i / 3] * 100) * 1.0;

      const vx = rx - localOrigin.x;
      const vy = ry - localOrigin.y;
      const vz = rz - localOrigin.z;
      const t = vx * localDir.x + vy * localDir.y + vz * localDir.z;

      const cx = localOrigin.x + localDir.x * t;
      const cy = localOrigin.y + localDir.y * t;
      const cz = localOrigin.z + localDir.z * t;

      const dx = rx - cx;
      const dy = ry - cy;
      const dz = rz - cz;
      const distSq = dx * dx + dy * dy + dz * dz;
      const interactionRadius = 8;

      if (distSq < interactionRadius * interactionRadius && t > 0) {
        const dist = Math.sqrt(distSq);
        const force = Math.pow((interactionRadius - dist) / interactionRadius, 1.5);
        vec.x = rx + (dx / dist) * force * 15;
        vec.y = ry + (dy / dist) * force * 15;
        vec.z = rz + (dz / dist) * force * 15;
      } else {
        vec.x += (rx - vec.x) * 0.05;
        vec.y += (ry - vec.y) * 0.05;
        vec.z += (rz - vec.z) * 0.05;
      }

      posArray[i] = vec.x;
      posArray[i + 1] = vec.y;
      posArray[i + 2] = vec.z;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.12} color="#8b9bb4" transparent opacity={0.5} sizeAttenuation={true} />
    </points>
  );
};

export default function SpaceCanvas() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 15] }}>
        <color attach="background" args={['#0a0a0c']} />
        <ambientLight intensity={0.5} />
        <ParticleSwarm />
      </Canvas>
    </div>
  );
}
