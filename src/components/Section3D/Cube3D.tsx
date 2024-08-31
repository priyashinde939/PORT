import React from 'react';
import Cube from './Cube';
import Cube2 from './Cube2';

const Cube3D: React.FC = () => {
  return (
    <div>
      <h1 className=" z-50 absolute text-orange-600 text-clip text-6xl font-bold mb-8 mix-blend-hard-light">3D Cube with Framer Motion and Tailwind CSS</h1>
      <Cube />
    </div>
  );
};

export default Cube3D;
