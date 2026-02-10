import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import AvatarModel from "./avatar-model";

export default function AgentAvatar({ isSpeaking, isDigesting }: { isSpeaking: boolean; isDigesting: boolean }) {
  // We can pass the digesting state here later if needed, 
  // currently just using isSpeaking to test integration.
  
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 30 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, 5, 2]} intensity={2} color="#14d9f5" />
        
        <Suspense fallback={null}>
            <AvatarModel isSpeaking={isSpeaking} isDigesting={isDigesting} />
            <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}


