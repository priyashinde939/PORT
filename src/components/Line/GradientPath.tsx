import React from 'react';

export const GradientPath: React.FC = () => (
  <>
    <path
      d="M 0 0 Q 100 200 200 50 C 300 300 50 150 250 200 Q 200 400 450 300 C 550 200 350 150 350 400 C 350 500 550 250 550 400 C 550 550 800 600 800 500"
      stroke="url(#paint0_linear_2_11)"
      strokeWidth="15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2_11"
        x1="17"
        y1="382.5"
        x2="1127.5"
        y2="192.094"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3CB5F1" />
        <stop offset="0.175523" stopColor="#CF2AF0" />
        <stop offset="0.378345" stopColor="#BE0B0B" />
        <stop offset="0.57642" stopColor="#F78E18" />
        <stop offset="0.826786" stopColor="#DEE34A" />
        <stop offset="1" stopColor="#69EF72" />
      </linearGradient>
    </defs>
  </>
);