import { useState, useEffect } from 'react';

const EnhancedGrid = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trailPositions, setTrailPositions] = useState([]);
  const [hoverCount, setHoverCount] = useState({});
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  // Configuration
  const gridSize = 50;
  const trailLength = 5;
  const maxIntensity = 0.8;

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = Math.floor(event.clientX / gridSize) * gridSize;
      const y = Math.floor(event.clientY / gridSize) * gridSize;
      
      setMousePos({ x, y });
      
      setTrailPositions((prev) => {
        const newTrail = [{ x, y, id: Date.now() }, ...prev.slice(0, trailLength - 1)];
        return newTrail;
      });

      const cellKey = `${x},${y}`;
      setHoverCount((prev) => ({
        ...prev,
        [cellKey]: (prev[cellKey] || 0) + 1,
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [gridSize]);

  const getHighlightColor = (x, y) => {
    const hue = Math.abs((x + y) % 360);
    return `hsla(${hue}, 70%, 50%, 0.6)`;
  };

  const getHeatIntensity = (x, y) => {
    const cellKey = `${x},${y}`;
    const count = hoverCount[cellKey] || 0;
    return Math.min(count / 20, maxIntensity);
  };

  return (
    <>
      {isLargeScreen && (
        <svg
          width="100vw"
          height="100vh"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            opacity: 0.3,
            zIndex: -1,
            userSelect: 'none',
          }}
        >
          {/* Grid lines */}
          {Array.from({ length: Math.ceil(window.innerWidth / gridSize) }, (_, i) => (
            <line
              key={`v${i}`}
              x1={i * gridSize}
              y1={0}
              x2={i * gridSize}
              y2="100vh"
              stroke="gray"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: Math.ceil(window.innerHeight / gridSize) }, (_, i) => (
            <line
              key={`h${i}`}
              x1={0}
              y1={i * gridSize}
              x2="100vw"
              y2={i * gridSize}
              stroke="gray"
              strokeWidth="1"
            />
          ))}

          {/* Heat map effect */}
          {Object.entries(hoverCount).map(([key, _]) => {
            const [x, y] = key.split(',').map(Number);
            return (
              <rect
                key={key}
                x={x}
                y={y}
                width={gridSize}
                height={gridSize}
                fill="rgba(255, 0, 0, 0.1)"
                style={{
                  opacity: getHeatIntensity(x, y),
                  transition: 'opacity 0.5s ease-out',
                }}
              />
            );
          })}

          {/* Trail effect */}
          {trailPositions.map(({ x, y, id }, index) => (
            <rect
              key={id}
              x={x}
              y={y}
              width={gridSize}
              height={gridSize}
              fill="none"
              stroke={getHighlightColor(x, y)}
              strokeWidth={2 * (1 - index / trailLength)}
              style={{
                opacity: 1 - (index / trailLength),
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          ))}

          {/* Current position highlight with pulse effect */}
          <rect
            x={mousePos.x}
            y={mousePos.y}
            width={gridSize}
            height={gridSize}
            fill="none"
            stroke={getHighlightColor(mousePos.x, mousePos.y)}
            strokeWidth="2"
            style={{
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <animate
              attributeName="stroke-width"
              values="2;4;2"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>

        </svg>
        
      )}
    </>
  );
};

export default EnhancedGrid;
