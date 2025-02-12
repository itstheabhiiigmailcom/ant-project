import './index.scss';

export const ImageGrid = ({
  className,
  imageUrl,
  scale = 1.1,
  gridCount = 4,
  isHoverEnabled = true,
  transitionDuration = '0.5s',
}) => {
  if (!imageUrl) return null;

  const totalTiles = gridCount * gridCount;
  return (
    <div
      className={`image-grid ${isHoverEnabled ? 'hover-enabled' : 'static-enabled'} ${className}`}
      style={{
        '--n': gridCount,
        '--s': scale,
        '--t': transitionDuration,
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {[...Array(totalTiles)].map((_, index) => (
        <div
          key={index}
          style={{
            '--p': `${((index % gridCount) * 100) / (gridCount - 1)}% ${(Math.floor(index / gridCount) * 100) / (gridCount - 1)}%`,
          }}
        />
      ))}
    </div>
  );
};

export const ImageRectangle = ({
  className,
  imageUrl,
  verticalOffset = '20px',
  tileCount = 4,
  scale = 1.1,
  transitionDuration = '0.5s',
  isHoverEnabled = true,
}) => {
  return (
    <div
      className={`image-rectangle ${isHoverEnabled ? 'hover-enabled' : 'static-enabled'} ${className}`}
      style={{
        '--n': tileCount,
        '--d': verticalOffset,
        '--s': scale,
        '--t': transitionDuration,
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {[...Array(tileCount)].map((_, index) => (
        <div
          key={index}
          style={{ '--p': `calc(${index} * 100% / (var(--n) - 1))` }}
        />
      ))}
    </div>
  );
};

export const ImageTriangle = ({
  className,
  imageUrl,
  tileCount = 8,
  verticalOffset = '20px',
  scale = 1.1,
  transitionDuration = '0.5s',
  isHoverEnabled = true,
}) => {
  return (
    <div
      className={`image-triangle ${isHoverEnabled ? 'hover-enabled' : 'static-enabled'} ${className}`}
      style={{
        '--n': tileCount,
        '--d': verticalOffset,
        '--s': scale,
        '--t': transitionDuration,
        '--p': 'calc(100% / (var(--n) - 1))',
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {[...Array(tileCount)].map((_, index) => (
        <div key={index} style={{ '--tp': `calc(${index} * var(--p))` }} />
      ))}
    </div>
  );
};

export const ImageCircle = ({
  className,
  imageUrl,
  transitionDuration = '1.5s',
  tileCount = 8,
  movementDistance = '20px',
  isHoverEnabled = true,
}) => {
  const numericMovement = parseFloat(movementDistance) || 0;
  const unit = movementDistance.replace(numericMovement, '') || 'px';

  return (
    <div
      className={`image-circle ${isHoverEnabled ? 'hover-enabled' : 'static-enabled'} ${className}`}
      style={{
        '--t': transitionDuration,
        '--n': tileCount,
        '--d': movementDistance,
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {Array.from({ length: tileCount }, (_, i) => {
        const angle = (i * 360) / tileCount;
        const hoverAngle = angle + 180 / tileCount;
        const transformX =
          numericMovement * Math.sin((hoverAngle * Math.PI) / 180);
        const transformY =
          -numericMovement * Math.cos((hoverAngle * Math.PI) / 180);

        return (
          <div
            key={i}
            className="tile"
            style={{
              '--angle': `${angle}deg`,
              '--trans': `translate(${transformX}${unit}, ${transformY}${unit})`,
            }}
          />
        );
      })}
    </div>
  );
};
