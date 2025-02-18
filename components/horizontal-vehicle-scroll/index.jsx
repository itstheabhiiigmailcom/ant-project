'use client';
import React from 'react';
import './index.scss'; // Import custom CSS for animations

const HorizontalVehicleMovement = ({
  skyImage,
  treeImage,
  trackImage,
  carImage,
  wheel1Image,
  wheel2Image,
  wheelSpinDuration = '0.6s', // Default durations
  carMovementDuration = '11s',
}) => {
  return (
    <div className="relative h-screen w-full overflow-x-hidden">
      {/* Sky Background */}
      {skyImage && (
        <div
          className="sky absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${skyImage})` }}
        />
      )}

      {/* Tree */}
      {treeImage && (
        <div
          className="tree absolute inset-0 bottom-4 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${treeImage})` }}
        />
      )}

      {/* Track (Stationary) */}
      {trackImage && (
        <div
          className="absolute bottom-0 h-[20vh] w-full bg-repeat-x"
          style={{ backgroundImage: `url(${trackImage})` }}
        />
      )}

      {/* Moving Car with Wheels */}
      <div className="animate-car absolute bottom-[77px] left-[3rem] flex h-[4.7rem] w-[17rem] items-center">
        {/* Car Body */}
        {carImage && (
          <div
            className="h-[4.7rem] w-[17rem] bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${carImage})`,
              animationDuration: carMovementDuration,
            }}
          />
        )}

        {/* Rotating Wheels */}
        {wheel1Image && (
          <div
            className="animate-wheel rear-one absolute -bottom-[3px] left-[33px] h-[49px] w-[46px] bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${wheel1Image})`,
              animationDuration: wheelSpinDuration,
            }}
          />
        )}

        {wheel2Image && (
          <div
            className="animate-wheel front-wheel absolute -bottom-[5px] left-[166px] h-[49px] w-[46px] bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${wheel2Image})`,
              animationDuration: wheelSpinDuration,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default HorizontalVehicleMovement;
