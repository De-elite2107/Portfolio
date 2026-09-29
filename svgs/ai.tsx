import React from 'react';

interface MyIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const AI: React.FC<MyIconProps> = ({ width = 50, height = 50, fill = '#2e79ba' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      stroke={fill}
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="8" width="16" height="16" rx="2" />
      <path d="M12 3v5M16 3v5M20 3v5M12 24v5M16 24v5M20 24v5M3 12h5M3 16h5M3 20h5M24 12h5M24 16h5M24 20h5" />
      <path d="M11.5 20l2.3-8h0.9l2.3 8M12.3 17.5h3.9M19.5 12v8" />
    </svg>
  );
};

export default AI;
