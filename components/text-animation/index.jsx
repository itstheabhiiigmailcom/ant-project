import React from 'react';
import './index.scss';

const TextAnimation = ({
  className = 'size-full',
  text = 'Red Ant Technologies',
  textColor = '#000000',
  fontSize = '22px',
  fontFamily = 'Cursive',
  letterSpacing = '2px',
  animationDuration = 0.3,
  animationDelay = 0.2,
  maxCharsPerLine = 40,
  lineSpacing = 8,
  backgroundImage = '/text-animation/text-bg.avif',
}) => {
  // Split text into lines
  const words = text.split(' ');
  let lines = [];
  let currentLine = '';

  words.forEach((word) => {
    if ((currentLine + word).length <= maxCharsPerLine) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  });
  if (currentLine) lines.push(currentLine);

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
    >
      <div
        className="kenburns-right-normal absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center', // Explicitly center it
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      ></div>

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        className="z-10 max-h-full max-w-full"
      >
        <g className="layer">
          {lines.map((line, lineIndex) => (
            <text
              className={`${fontSize} ${letterSpacing}`}
              key={lineIndex}
              x="10%"
              y={`${35 + lineIndex * lineSpacing}%`}
              textAnchor="start"
              dominantBaseline="middle"
              style={{
                fontFamily,
                fill: textColor,
              }}
            >
              {line.split('').map((char, index) => (
                <tspan key={index} opacity="0">
                  {char}
                  <animate
                    attributeName="opacity"
                    from="0"
                    to="1"
                    dur={`${animationDuration}s`}
                    begin={`${(lineIndex * maxCharsPerLine + index) * animationDelay}s`}
                    fill="freeze"
                  />
                </tspan>
              ))}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default TextAnimation;
