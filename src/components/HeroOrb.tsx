import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Float, Text3D, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AnimatedOrb = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.scale.setScalar(hovered ? 1.1 : 1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <Sphere
        ref={meshRef}
        args={[2, 64, 64]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color="#0066FF"
          transparent
          opacity={0.6}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const FloatingElements = () => {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <Float
          key={i}
          speed={1 + i * 0.2}
          rotationIntensity={0.5}
          floatIntensity={0.3}
          position={[
            Math.cos((i * Math.PI * 2) / 6) * 5,
            Math.sin((i * Math.PI * 2) / 6) * 2,
            Math.sin((i * Math.PI * 2) / 6) * 3
          ]}
        >
          <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial 
              color="#00FFFF" 
              transparent 
              opacity={0.7}
              emissive="#0066FF"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

export const HeroOrb = () => {
  return (
    <div className="w-full h-[500px] relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="pointer-events-auto"
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0066FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00FFFF" />
        
        <AnimatedOrb />
        <FloatingElements />
        
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      </div>
    </div>
  );
};