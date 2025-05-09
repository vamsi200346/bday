import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";

function Heart3D({ position, scale }) {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t / 2) * 0.2;
    groupRef.current.position.y = Math.sin(t / 1.5) * 0.1;
  });

  // Create heart shape using a custom shape
  const heartShape = new THREE.Shape();
  const x = 0,
    y = 0;

  // Start from the bottom center
  heartShape.moveTo(x, y - 1.0);

  // Left curve
  heartShape.bezierCurveTo(
    x - 0.5,
    y - 1.0, // control point 1
    x - 1.2,
    y - 0.3, // control point 2
    x,
    y + 1.0 // end point
  );

  // Right curve
  heartShape.bezierCurveTo(
    x + 1.2,
    y - 0.3, // control point 1
    x + 0.5,
    y - 1.0, // control point 2
    x,
    y - 1.0 // end point
  );

  return (
    <motion.group
      ref={groupRef}
      position={position}
      scale={scale}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      {/* Main heart shape */}
      <mesh>
        <shapeGeometry args={[heartShape]} />
        <meshBasicMaterial color="#FF1493" />
      </mesh>

      {/* Sparkles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh
          key={`sparkle-${i}`}
          position={[
            Math.cos((i * Math.PI) / 6) * 1.2,
            Math.sin((i * Math.PI) / 6) * 1.2,
            0,
          ]}
          scale={[0.1, 0.1, 0.1]}
        >
          <octahedronGeometry />
          <meshBasicMaterial color="#FFB6C1" />
        </mesh>
      ))}
    </motion.group>
  );
}

export default Heart3D;
