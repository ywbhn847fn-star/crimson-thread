import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import FunkoFigure from "./FunkoFigure";

const HeroScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0.5, 7], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#dc2626" />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffffff" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          color="#dc2626"
        />

        {/* Left Figure - Smaller and faded */}
        <group position={[-3.5, -0.3, -1]} scale={0.7}>
          <FunkoFigure
            position={[0, 0, 0]}
            color="#f5d0c5"
            accentColor="#dc2626"
            rotationSpeed={0.004}
            floatOffset={0}
            opacity={0.5}
          />
        </group>

        {/* Center Figure - Main, larger and prominent */}
        <group position={[0, 0, 1]} scale={1}>
          <FunkoFigure
            position={[0, 0, 0]}
            color="#e8d4c4"
            accentColor="#1a1a1a"
            rotationSpeed={0.005}
            floatOffset={2}
            opacity={1}
          />
        </group>

        {/* Right Figure - Smaller and faded */}
        <group position={[3.5, -0.3, -1]} scale={0.7}>
          <FunkoFigure
            position={[0, 0, 0]}
            color="#d4a574"
            accentColor="#dc2626"
            rotationSpeed={0.004}
            floatOffset={4}
            opacity={0.5}
          />
        </group>

        {/* Ground shadow */}
        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.6}
          scale={15}
          blur={2.5}
          far={4}
          color="#000000"
        />

        {/* Environment for reflections */}
        <Environment preset="city" />

        {/* Camera controls - horizontal only */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};

export default HeroScene;