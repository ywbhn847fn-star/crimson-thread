import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface FunkoFigureProps {
  position: [number, number, number];
  color: string;
  accentColor: string;
  rotationSpeed?: number;
  floatOffset?: number;
}

const FunkoFigure = ({ 
  position, 
  color, 
  accentColor, 
  rotationSpeed = 0.005,
  floatOffset = 0 
}: FunkoFigureProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime + floatOffset) * 0.15;
      // Slow rotation
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Head - Large oversized Funko style */}
      <group position={[0, 1.1, 0]}>
        {/* Main head */}
        <RoundedBox args={[1.4, 1.5, 1.2]} radius={0.2} smoothness={4}>
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
        </RoundedBox>
        
        {/* Eyes - large black dots */}
        <mesh position={[-0.3, 0.1, 0.61]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#000000" roughness={0.2} />
        </mesh>
        <mesh position={[0.3, 0.1, 0.61]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#000000" roughness={0.2} />
        </mesh>
        
        {/* Eye reflections */}
        <mesh position={[-0.25, 0.15, 0.75]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0.35, 0.15, 0.75]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>

        {/* Hair/Cap accent */}
        <RoundedBox args={[1.5, 0.4, 1.3]} radius={0.1} smoothness={4} position={[0, 0.7, 0]}>
          <meshStandardMaterial color={accentColor} roughness={0.4} metalness={0.2} />
        </RoundedBox>
      </group>

      {/* Body - Hoodie style */}
      <group position={[0, -0.2, 0]}>
        {/* Torso */}
        <RoundedBox args={[1, 1.2, 0.7]} radius={0.15} smoothness={4}>
          <meshStandardMaterial color={accentColor} roughness={0.5} metalness={0.1} />
        </RoundedBox>
        
        {/* Hood detail */}
        <RoundedBox args={[0.6, 0.3, 0.1]} radius={0.05} smoothness={4} position={[0, 0.5, 0.35]}>
          <meshStandardMaterial color={accentColor} roughness={0.6} />
        </RoundedBox>
      </group>

      {/* Arms */}
      <RoundedBox args={[0.3, 0.8, 0.3]} radius={0.1} smoothness={4} position={[-0.65, -0.2, 0]}>
        <meshStandardMaterial color={accentColor} roughness={0.5} />
      </RoundedBox>
      <RoundedBox args={[0.3, 0.8, 0.3]} radius={0.1} smoothness={4} position={[0.65, -0.2, 0]}>
        <meshStandardMaterial color={accentColor} roughness={0.5} />
      </RoundedBox>

      {/* Hands */}
      <mesh position={[-0.65, -0.65, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.3} />
      </mesh>
      <mesh position={[0.65, -0.65, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.3} />
      </mesh>

      {/* Legs */}
      <RoundedBox args={[0.35, 0.7, 0.35]} radius={0.08} smoothness={4} position={[-0.25, -1.1, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
      </RoundedBox>
      <RoundedBox args={[0.35, 0.7, 0.35]} radius={0.08} smoothness={4} position={[0.25, -1.1, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
      </RoundedBox>

      {/* Shoes */}
      <RoundedBox args={[0.4, 0.2, 0.5]} radius={0.05} smoothness={4} position={[-0.25, -1.5, 0.05]}>
        <meshStandardMaterial color={accentColor} roughness={0.3} metalness={0.2} />
      </RoundedBox>
      <RoundedBox args={[0.4, 0.2, 0.5]} radius={0.05} smoothness={4} position={[0.25, -1.5, 0.05]}>
        <meshStandardMaterial color={accentColor} roughness={0.3} metalness={0.2} />
      </RoundedBox>
    </group>
  );
};

export default FunkoFigure;