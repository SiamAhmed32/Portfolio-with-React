import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const FloatingParticles = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(3000), { radius: 2 });
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#6366f1'
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const GlowingSphere = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });
  
  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={[0, 0, -3]}>
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0}
        transparent
        opacity={0.1}
      />
    </Sphere>
  );
};

const ExperienceBackgroundCanvas = () => {
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setIsWebGLAvailable(false);
    }
  }, []);

  if (!isWebGLAvailable) {
    return null;
  }

  return (
    <div className='w-full h-full absolute inset-0 z-0 pointer-events-none'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#6366f1" />
          <FloatingParticles />
          <GlowingSphere />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ExperienceBackgroundCanvas;

