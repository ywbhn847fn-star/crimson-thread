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
  opacity?: number;
}

const FunkoFigure = ({ 
  position, 
  color, 
  accentColor, 
  rotationSpeed = 0.005,
  floatOffset = 0,
  opacity = 1
}: FunkoFigureProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime + floatOffset) * 0.15;
      // Slow horizontal rotation only (Y axis)
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  const materialProps = {
    transparent: true,
    opacity: opacity,
  };

  return (
    <group ref={groupRef} position={position}>
      {/* Head - Large oversized Funko style */}
      <group position={[0, 1.1, 0]}>
        {/* Main head */}
        <RoundedBox args={[1.4, 1.5, 1.2]} radius={0.2} smoothness={4}>
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} {...materialProps} />
        </RoundedBox>
        
        {/* Eyes - large black dots */}
        <mesh position={[-0.3, 0.1, 0.61]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#000000" roughness={0.2} {...materialProps} />
        </mesh>
        <mesh position={[0.3, 0.1, 0.61]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#000000" roughness={0.2} {...materialProps} />
        </mesh>
        
        {/* Eye reflections */}
        <mesh position={[-0.25, 0.15, 0.75]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} {...materialProps} />
        </mesh>
        <mesh position={[0.35, 0.15, 0.75]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} {...materialProps} />
        </mesh>

        {/* Hair/Cap accent */}
        <RoundedBox args={[1.5, 0.4, 1.3]} radius={0.1} smoothness={4} position={[0, 0.7, 0]}>
          <meshStandardMaterial color={accentColor} roughness={0.4} metalness={0.2} {...materialProps} />
        </RoundedBox>
      </group>

      {/* Body - Hoodie style */}
      <group position={[0, -0.2, 0]}>
        {/* Torso */}
        <RoundedBox args={[1, 1.2, 0.7]} radius={0.15} smoothness={4}>
          <meshStandardMaterial color={accentColor} roughness={0.5} metalness={0.1} {...materialProps} />
        </RoundedBox>
        
        {/* Hood detail */}
        <RoundedBox args={[0.6, 0.3, 0.1]} radius={0.05} smoothness={4} position={[0, 0.5, 0.35]}>
          <meshStandardMaterial color={accentColor} roughness={0.6} {...materialProps} />
        </RoundedBox>
      </group>

      {/* Arms */}
      <RoundedBox args={[0.3, 0.8, 0.3]} radius={0.1} smoothness={4} position={[-0.65, -0.2, 0]}>
        <meshStandardMaterial color={accentColor} roughness={0.5} {...materialProps} />
      </RoundedBox>
      <RoundedBox args={[0.3, 0.8, 0.3]} radius={0.1} smoothness={4} position={[0.65, -0.2, 0]}>
        <meshStandardMaterial color={accentColor} roughness={0.5} {...materialProps} />
      </RoundedBox>

      {/* Hands */}
      <mesh position={[-0.65, -0.65, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.3} {...materialProps} />
      </mesh>
      <mesh position={[0.65, -0.65, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.3} {...materialProps} />
      </mesh>

      {/* Legs */}
      <RoundedBox args={[0.35, 0.7, 0.35]} radius={0.08} smoothness={4} position={[-0.25, -1.1, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} {...materialProps} />
      </RoundedBox>
      <RoundedBox args={[0.35, 0.7, 0.35]} radius={0.08} smoothness={4} position={[0.25, -1.1, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} {...materialProps} />
      </RoundedBox>

      {/* Shoes */}
      <RoundedBox args={[0.4, 0.2, 0.5]} radius={0.05} smoothness={4} position={[-0.25, -1.5, 0.05]}>
        <meshStandardMaterial color={accentColor} roughness={0.3} metalness={0.2} {...materialProps} />
      </RoundedBox>
      <RoundedBox args={[0.4, 0.2, 0.5]} radius={0.05} smoothness={4} position={[0.25, -1.5, 0.05]}>
        <meshStandardMaterial color={accentColor} roughness={0.3} metalness={0.2} {...materialProps} />
      </RoundedBox>
    </group>
  );
};

export default FunkoFigure;