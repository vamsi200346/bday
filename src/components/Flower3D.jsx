import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";

function Flower3D({ position, scale }) {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t / 2) * 0.2;
    groupRef.current.position.y = Math.sin(t / 1.5) * 0.1;
  });

  return (
    <motion.group
      ref={groupRef}
      position={position}
      scale={scale}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      {/* Outer petals */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={`outer-${i}`} rotation={[0, (Math.PI * i) / 4, 0]}>
          <torusGeometry args={[1.2, 0.4, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#FF69B4" />
        </mesh>
      ))}

      {/* Middle petals */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={`middle-${i}`}
          rotation={[0, (Math.PI * i) / 4 + Math.PI / 8, 0]}
          position={[0, 0.1, 0]}
        >
          <torusGeometry args={[1, 0.3, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#FF69B4" />
        </mesh>
      ))}

      {/* Inner petals */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={`inner-${i}`}
          rotation={[0, (Math.PI * i) / 4 + Math.PI / 4, 0]}
          position={[0, 0.2, 0]}
        >
          <torusGeometry args={[0.8, 0.25, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#FF69B4" />
        </mesh>
      ))}

      {/* Center of the flower */}
      <mesh position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#FF1493" />
      </mesh>

      {/* Stem */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 4, 32]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>

      {/* Leaves */}
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh
          key={`leaf-${i}`}
          position={[0, -1 + i * 0.8, 0]}
          rotation={[0, 0, (i * Math.PI) / 1.5]}
        >
          <torusGeometry args={[0.4, 0.1, 16, 32, Math.PI / 2]} />
          <meshStandardMaterial color="#228B22" />
        </mesh>
      ))}

      {/* Small decorative leaves */}
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh
          key={`decor-${i}`}
          position={[0, -0.5 + i * 0.4, 0]}
          rotation={[0, 0, (i * Math.PI) / 2]}
        >
          <torusGeometry args={[0.2, 0.05, 16, 32, Math.PI / 2]} />
          <meshStandardMaterial color="#228B22" />
        </mesh>
      ))}
    </motion.group>
  );
}

export default Flower3D;
