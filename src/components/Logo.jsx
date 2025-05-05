import React from 'react';

// Helper to create a squiggly circle SVG path
function squigglyCircle(cx, cy, r, waves = 8, amp = 2, points = 120) {
  let d = '';
  for (let i = 0; i <= points; i++) {
    const theta = (2 * Math.PI * i) / points;
    const squiggle = amp * Math.sin(waves * theta);
    const x = cx + (r + squiggle) * Math.cos(theta);
    const y = cy + (r + squiggle) * Math.sin(theta);
    d += i === 0 ? `M${x.toFixed(2)},${y.toFixed(2)}` : ` L${x.toFixed(2)},${y.toFixed(2)}`;
  }
  d += ' Z';
  return d;
}

const Logo = ({ size = 80 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <defs>
      <linearGradient id="meshGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
        <stop offset="50%" stopColor="#10b981" /> {/* Green */}
        <stop offset="100%" stopColor="#0ea5e9" /> {/* Light blue */}
      </linearGradient>
    </defs>
    {/* Squiggly circular loops in a hexagonal/circular mesh pattern */}
    {/* Center squiggly ring */}
    <path d={squigglyCircle(40, 40, 16, 8, 2)} stroke="url(#meshGradient)" strokeWidth="2.2" fill="none" />
    {/* Surrounding squiggly rings */}
    {[...Array(6)].map((_, i) => {
      const angle = (Math.PI / 3) * i;
      const cx = 40 + 18 * Math.cos(angle);
      const cy = 40 + 18 * Math.sin(angle);
      return (
        <path
          key={i}
          d={squigglyCircle(cx, cy, 16, 8, 2)}
          stroke="url(#meshGradient)"
          strokeWidth="2.2"
          fill="none"
        />
      );
    })}
  </svg>
);

export default Logo; 