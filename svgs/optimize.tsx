import React from 'react';

interface MyOptimizeIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Optimize: React.FC<MyOptimizeIconProps> = ({ width = 50, height = 50, fill = '#2e79ba' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>optimize</title>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="optimize" fill={fill} transform="translate(64.000000, 64.000000)">
          <path d="M1.42108547e-14,384.055467 L384,384.055467 L384,341.3888 L1.42108547e-14,341.3888 L1.42108547e-14,384.055467 Z M341.6832,1.42108547e-14 L234.6752,0.064 L234.6752,42.7093333 L311.176533,42.7093333 L204.509867,149.397333 L97.8218667,149.397333 L6.2592,240.981333 L36.4245333,271.146667 L115.5072,192.064 L222.152533,192.064 L341.6832,72.5333333 L341.6832,149.312 L384.349867,149.312 L384.349867,1.42108547e-14 L341.6832,1.42108547e-14 Z" />
        </g>
      </g>
    </svg>
  );
};

export default Optimize;
