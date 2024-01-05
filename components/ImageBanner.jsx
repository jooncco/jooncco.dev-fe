'use client';

import React from 'react';
import '../styles/imagebanner.css';
import {InfinityIcon} from './Icons';

const ImageBanner = () => {
  return (
    <div className="mx-auto canvas">
      <InfinityIcon className="!w-[460px] !h-[460px]" />
      <svg className="h-0">
        <filter id="wave">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.009"
            numOctaves="5"
            seed="2">
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.02;0.005;0.02"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
    </div>
  );
};

export default ImageBanner;
