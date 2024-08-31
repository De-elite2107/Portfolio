import React from 'react';

interface MyIconProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
}

const SmartPhone: React.FC<MyIconProps> = ({ width = 50, height = 50, fill = '#081f37', stroke = '#2e79ba' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <path
        opacity="0.5"
        d="M15 5H9"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        opacity="0.5"
        cx="12"
        cy="17"
        r="2"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default SmartPhone;