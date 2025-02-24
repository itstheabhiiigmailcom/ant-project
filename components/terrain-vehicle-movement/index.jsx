import './index.scss';

const TerrainVehicleMovement = ({
  terrainImage = '/terrain.jpg',
  floatingImg,
  wheels = [
    { image: null, x: 0, y: 0 },
    { image: null, x: 0, y: 0 },
  ],
  wheelWidth = 46, // Default wheel width
  wheelHeight = 50, // Default wheel height
  floatingImgWidth = 200, // Default floating image width
  floatingImgHeight = 80, // Default floating image height
  floatingImgPosition = { x: 0, y: 0, rotate: 0 },
  wheelSpinDuration = { sm: '1.2s', md: '0.8s', lg: '0.6s' }, // Object for different screen sizes
  floatingImgMovementDuration = { sm: '25s', md: '22s', lg: '21s' }, // Object for different screen sizes
}) => {
  // Extracting values from the object
  const wheelSpinSm = wheelSpinDuration.sm || '1.2s';
  const wheelSpinMd = wheelSpinDuration.md || '0.8s';
  const wheelSpinLg = wheelSpinDuration.lg || '0.6s';

  const floatingMoveSm = floatingImgMovementDuration.sm || '15s';
  const floatingMoveMd = floatingImgMovementDuration.md || '12s';
  const floatingMoveLg = floatingImgMovementDuration.lg || '11s';

  return (
    <div className="terrain-vehicle-container size-full overflow-hidden">
      <svg
        className="terrain-vehicle-svg absolute"
        viewBox="0 0 800 400"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        {/* Background Image */}
        <image
          href={terrainImage}
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        />

        {/* Floating Vehicle + Wheels Container */}
        <g
          className={`terrain-vehicle-movement animate-floatingImg`}
          style={{
            '--floatingImg-movement-duration-sm': floatingMoveSm,
            '--floatingImg-movement-duration-md': floatingMoveMd,
            '--floatingImg-movement-duration-lg': floatingMoveLg,
            transform: `translate(${floatingImgPosition.x}vh, ${floatingImgPosition.y}vh) rotate(${floatingImgPosition.rotate}deg)`,
            transformOrigin: `${floatingImgWidth / 2}px ${floatingImgHeight / 2}px`, // Set origin to center of vehicle
          }}
        >
          {/* Floating Image Body */}
          {floatingImg && (
            <image
              // className={floatingImgClassName}
              href={floatingImg}
              x="50"
              y="150"
              width={floatingImgWidth}
              height={floatingImgHeight}
            />
          )}

          {/* Rotating Wheels */}
          {wheels?.map((wheel, index) =>
            wheel?.image ? (
              <image
                key={index}
                className={`animate-wheel`}
                href={wheel.image}
                x={wheel.x}
                y={wheel.y}
                width={wheelWidth}
                height={wheelHeight}
                style={{
                  transformOrigin: '28px 28px', // Center for rotation
                  transformBox: 'fill-box',
                  '--wheel-spin-duration-sm': wheelSpinSm,
                  '--wheel-spin-duration-md': wheelSpinMd,
                  '--wheel-spin-duration-lg': wheelSpinLg,
                }}
              />
            ) : null,
          )}
        </g>
      </svg>
    </div>
  );
};

export default TerrainVehicleMovement;
