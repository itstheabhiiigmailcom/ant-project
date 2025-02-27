import React from 'react';
import Image from 'next/image';
import './index.scss';

const ImageGrid = ({
  className = 'h-screen grid-cols-4 grid-rows-2 gap-4 p-4',
  ImageWidth = 300,
  ImageHeight = 200,
  images,
}) => {
  return (
    <div className={`grid ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-card ${image.animation} flex items-center justify-center overflow-hidden`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={ImageWidth}
            height={ImageHeight}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
