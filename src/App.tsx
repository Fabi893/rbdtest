import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Canvas>
      <color attach="background" args={["#000"]} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} />
      <OrbitControls autoRotate enableZoom={false} enablePan={false} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}
