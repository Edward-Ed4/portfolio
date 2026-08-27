import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ParticleCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const count = 2200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const palette = [
      new THREE.Color("#06b6d4"), // cyan-500
      new THREE.Color("#0891b2"), // cyan-600
      new THREE.Color("#0e7490"), // cyan-700
      new THREE.Color("#22d3ee"), // cyan-400
      new THREE.Color("#67e8f9"), // cyan-300
      new THREE.Color("#a5f3fc"), // cyan-200
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color",    new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({ size: 0.022, vertexColors: true, transparent: true, opacity: 0.7, sizeAttenuation: true });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    const sphereGeo  = new THREE.IcosahedronGeometry(1.8, 2);
    const sphereMat  = new THREE.MeshBasicMaterial({ color: "#0891b2", wireframe: true, transparent: true, opacity: 0.06 });
    const sphere     = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    const sphere2Geo = new THREE.IcosahedronGeometry(1.1, 1);
    const sphere2Mat = new THREE.MeshBasicMaterial({ color: "#06b6d4", wireframe: true, transparent: true, opacity: 0.08 });
    const sphere2    = new THREE.Mesh(sphere2Geo, sphere2Mat);
    scene.add(sphere2);

    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 0.6;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    let animId;
    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      points.rotation.y  =  t * 0.03 + mouseX * 0.5;
      points.rotation.x  =  t * 0.015 + mouseY * 0.3;
      sphere.rotation.y  =  t * 0.07 - mouseX * 0.4;
      sphere.rotation.x  =  t * 0.04 + mouseY * 0.2;
      sphere2.rotation.y = -t * 0.11 + mouseX * 0.3;
      sphere2.rotation.x = -t * 0.06 - mouseY * 0.2;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />;
}
