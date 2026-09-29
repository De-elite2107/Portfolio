import React from 'react';

interface MyIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Blockchain: React.FC<MyIconProps> = ({ width = 50, height = 50, fill = '#2e79ba' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      stroke={fill}
      strokeWidth="0.9"
      strokeLinejoin="round"
    >
      <path d="M16 2.5l5 2.9v5.8l-5 2.9-5-2.9V5.4z" />
      <path d="M11 5.4l5 2.9 5-2.9M16 8.3v5.8" />
      <path d="M7.5 17.5l5 2.9v5.8l-5 2.9-5-2.9v-5.8z" />
      <path d="M2.5 20.4l5 2.9 5-2.9M7.5 23.3v5.8" />
      <path d="M24.5 17.5l5 2.9v5.8l-5 2.9-5-2.9v-5.8z" />
      <path d="M19.5 20.4l5 2.9 5-2.9M24.5 23.3v5.8" />
      <path d="M13.2 13.8l-3.4 4.4M18.8 13.8l3.4 4.4M12.5 24.7h7" />
    </svg>
  );
};

export default Blockchain;
