import React from 'react';
import Image from 'next/image';
import './index.scss';

const ImageGrid = ({
  className = ' gap-4 p-4',
  ImageWidth = 300,
  ImageHeight = 200,
  images = [], // Default value for images
}) => {
  return (
    <div
      className={`image-grid grid ${className} grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
    >
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
