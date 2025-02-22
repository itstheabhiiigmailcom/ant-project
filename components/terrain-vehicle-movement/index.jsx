import './index.scss';

const TerrainVehicleMovement = ({
  terrainImage = '/terrain.jpg', // Default background image
  floatingImg,
  wheels = [
    { image: null, className: '' }, // Rear Wheel
    { image: null, className: '' }, // Front Wheel
  ],
  wheelClassName,
  floatingBodyClassName,
  floatingImgClassName,
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
    <div
      className="terrain-vehicle-movement relative h-screen w-full overflow-x-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${terrainImage})`, // Single terrain image
        '--wheel-spin-duration-sm': wheelSpinSm,
        '--wheel-spin-duration-md': wheelSpinMd,
        '--wheel-spin-duration-lg': wheelSpinLg,
        '--floatingImg-movement-duration-sm': floatingMoveSm,
        '--floatingImg-movement-duration-md': floatingMoveMd,
        '--floatingImg-movement-duration-lg': floatingMoveLg,
      }}
    >
      {/* Floating Image with Wheels */}
      <div
        className={`animate-flooatingImg absolute ${floatingBodyClassName} flex h-[4.7rem] w-[17rem] items-center`}
      >
        {/* Floating Image Body */}
        {floatingImg && (
          <div
            className={`bg-contain ${floatingImgClassName} bg-no-repeat`}
            style={{ backgroundImage: `url(${floatingImg})` }}
          />
        )}

        {/* Rotating Wheels */}
        {wheels?.map((wheel, index) =>
          wheel?.image ? (
            <div
              key={index}
              className={`animate-wheel absolute bg-contain bg-no-repeat ${wheelClassName} ${wheel?.className} `}
              style={{
                backgroundImage: `url(${wheel.image})`,
              }}
            />
          ) : null,
        )}
      </div>
    </div>
  );
};

export default TerrainVehicleMovement;
