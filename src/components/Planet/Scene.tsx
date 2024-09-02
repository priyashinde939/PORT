'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import Model from './Model';
import { useProgress, Html, OrbitControls } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

export default function Scene() {
  const [isZoomEnabled, setIsZoomEnabled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;


        const zoomArea = {
          xMin: rect.width * 0.3, 
          xMax: rect.width * 0.7, 
          yMin: rect.height * 0.3, 
          yMax: rect.height * 0.7, 
        };


        if (
          mouseX >= zoomArea.xMin &&
          mouseX <= zoomArea.xMax &&
          mouseY >= zoomArea.yMin &&
          mouseY <= zoomArea.yMax
        ) {
          setIsZoomEnabled(true);
        } else {
          setIsZoomEnabled(false);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Canvas
      style={{ height: '100vh', width: '100%' }}
      camera={{ position: [15, 15, 15], fov: 9, far: 70 }}
      gl={{ antialias: true }}
      dpr={[1, 1]}
    >
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      <directionalLight position={[-5, -5, 10]} color="blue" intensity={18} />
      <ambientLight intensity={1} color="red" />

      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
