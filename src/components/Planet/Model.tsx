import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Group } from 'three';
import { LoopRepeat } from 'three';


useGLTF.preload('./hologram9.glb');

export default function Model() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF('./hologram9.glb');
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const action = actions["Take 001"];
    if (action) {
      action.play();
      action.setLoop(LoopRepeat, Infinity); // Loop indefinitely
    } else {
      console.warn('Animation "PortalAction" not found in GLTF model.');
    }
  }, [actions]);

  return (
    <group position={[0, -1, 0]}  scale={10} ref={group}>
      <primitive object={scene} />
    </group>
  );
}
