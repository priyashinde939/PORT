import React from 'react';
import Cube from './Cube';
import Cube2 from './Cube2';

const Cube3D: React.FC = () => {
  return (
    <div>
      <h1 className=" z-50 absolute text-lime-300 text-wrap text-6xl font-black mb-8 mix-blend-screen text-center pl-5 -left-1">3D Cube with Framer Motion and Tailwind CSS</h1>
      <Cube />
    </div>
  );
};

export default Cube3D;
