import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computer3D = ({ isMobile, position = [0, 0, 0] }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const groupRef = React.useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.8} color="#6366f1" />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.5}
        position={isMobile ? [0, -2, -1.5] : [0, -2.5, -1.2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const Planet3D = ({ isMobile, position = [0, 0, 0] }) => {
  const planet = useGLTF("./planet/scene.gltf");
  const groupRef = React.useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#6366f1" />
      <primitive
        object={planet.scene}
        scale={isMobile ? 1.5 : 2}
        position={[0, 0, 0]}
      />
    </group>
  );
};

const Experience3DCanvas = ({ modelType = "computer", position = [0, 0, 0] }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        {modelType === "computer" ? (
          <Computer3D isMobile={isMobile} position={position} />
        ) : (
          <Planet3D isMobile={isMobile} position={position} />
        )}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Experience3DCanvas;

