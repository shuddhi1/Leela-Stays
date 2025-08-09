import React from 'react';

function SnowCappedMountains() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="48"
      height="48"
      fill="none"
    >
      {/* Mountain base */}
      <path
        d="M8 52 L24 24 L40 52 Z"
        fill="#6B8E23"
        stroke="#4A6B17"
        strokeWidth="2"
      />
      <path
        d="M24 24 L40 12 L56 52 Z"
        fill="#556B2F"
        stroke="#4A6B17"
        strokeWidth="2"
      />
      {/* Snow caps */}
      <path
        d="M20 28 L24 20 L28 28 Z"
        fill="#FFFFFF"
      />
      <path
        d="M36 15 L40 10 L44 15 Z"
        fill="#FFFFFF"
      />
      <path
        d="M48 38 L52 28 L56 38 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default SnowCappedMountains;
