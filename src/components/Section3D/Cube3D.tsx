import React from 'react';
import Cube from './Cube';


const Cube3D: React.FC = () => {
  return (
    <div>
            <h1 className=" z-50 absolute text-rose-700 text-wrap text-6xl font-black mb-8 mix-blend-darken text-center pl-5 -left-1">
        3D Cube with Framer Motion and Tailwind CSS
      </h1>
            <h1 className=" z-50 absolute text-indigo-500 text-wrap text-6xl font-black mb-8 mix-blend-luminosity  text-center pl-5 -left-1">
        3D Cube with Framer Motion and Tailwind CSS
      </h1>

      <Cube />
    </div>
  );
};

export default Cube3D;
