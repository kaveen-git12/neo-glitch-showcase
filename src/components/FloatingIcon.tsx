import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Text3D, MeshDistortMaterial } from "@react-three/drei";
import { ReactNode, Suspense } from "react";

interface FloatingIconProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  speed?: number;
}

export const FloatingIcon = ({ 
  children, 
  className = "", 
  intensity = 1,
  speed = 1 
}: FloatingIconProps) => {
  return (
    <motion.div
      className={`${className} relative`}
      whileHover={{ 
        scale: 1.1,
        rotateY: 360,
        transition: { duration: 0.6 }
      }}
      animate={{
        y: [0, -10, 0],
        rotateZ: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
    </motion.div>
  );
};

interface Icon3DProps {
  text: string;
  size?: number;
  color?: string;
}

export const Icon3D = ({ text, size = 1, color = "#00D4FF" }: Icon3DProps) => {
  return (
    <div className="w-16 h-16">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} />
          <Float
            speed={2}
            rotationIntensity={1}
            floatIntensity={0.5}
          >
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={size}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              {text}
              <MeshDistortMaterial
                color={color}
                attach="material"
                distort={0.3}
                speed={2}
                roughness={0.4}
              />
            </Text3D>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};