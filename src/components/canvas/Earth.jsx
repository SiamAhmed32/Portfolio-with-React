import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import earth_fallback from "@/assets/earth_fallback.png"; // Importing the fallback image

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [webGLError, setWebGLError] = useState(false);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    if (!canvas.getContext('webgl') && !canvas.getContext('experimental-webgl')) {
      setWebGLError(true);
    }
  }, []);

  if (webGLError) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <img src={earth_fallback} alt="Earth" className="w-full h-full object-contain" />
        <p className="absolute text-secondary text-sm bottom-4">3D model not supported on this device.</p>
      </div>
    );
  }

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;