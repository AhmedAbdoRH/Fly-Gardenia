import React, { useState, useEffect, useRef, useCallback } from 'react';

// Realistic 3D Leaf SVG
const Leaf3D: React.FC<{ rotateX: number; rotateY: number; size?: number }> = ({ rotateX, rotateY, size = 65 }) => {
  const height = (size / 65) * 85;
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: `drop-shadow(${rotateY * 0.2}px ${5 + rotateX * 0.15}px ${15 + Math.abs(rotateY) * 0.1}px rgba(0,0,0,0.18))`,
      }}
    >
      <defs>
        <linearGradient id="leafMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c5e67c" />
          <stop offset="35%" stopColor="#aad546" />
          <stop offset="65%" stopColor="#8dab35" />
          <stop offset="100%" stopColor="#718c21" />
        </linearGradient>

        <radialGradient id="leafShine" cx="25%" cy="15%" r="50%">
          <stop offset="0%" stopColor="#e2f5b8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#e2f5b8" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="leafDepth" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#4a5d1c" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4a5d1c" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M40 3C40 3 10 20 6 52C2 84 30 97 40 97C50 97 78 84 74 52C70 20 40 3 40 3Z"
        fill="url(#leafMain)"
      />
      <path
        d="M40 3C40 3 10 20 6 52C2 84 30 97 40 97C50 97 78 84 74 52C70 20 40 3 40 3Z"
        fill="url(#leafShine)"
      />
      <path
        d="M40 3C40 3 10 20 6 52C2 84 30 97 40 97C50 97 78 84 74 52C70 20 40 3 40 3Z"
        fill="url(#leafDepth)"
      />

      <path d="M40 10L40 90" stroke="#718c21" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
      <path d="M40 28C32 38 22 48 18 56" stroke="#718c21" strokeOpacity="0.35" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M40 48C34 56 26 64 22 72" stroke="#718c21" strokeOpacity="0.3" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      <path d="M40 28C48 38 58 48 62 56" stroke="#718c21" strokeOpacity="0.35" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M40 48C46 56 54 64 58 72" stroke="#718c21" strokeOpacity="0.3" strokeWidth="0.8" strokeLinecap="round" fill="none" />
    </svg>
  );
};

export const FloatingLeaves: React.FC = () => {
  // Leaf position (percentage)
  const [pos, setPos] = useState({ x: 85, y: 20 });
  // Leaf rotation (3D)
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  // Leaf bending/curvature for natural motion
  const [bend, setBend] = useState({ skewX: 0, skewY: 0, scaleX: 1, scaleY: 1 });
  // Refs for tracking
  const scrollRef = useRef({ y: 0, velocity: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const lastScrollY = useRef(0);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);
  const posRef = useRef({ x: 85, y: 20 });

  // Responsive sizing
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const leafSize = isMobile ? 40 : 65;

  // Track cursor/touch
  const handlePointer = useCallback((clientX: number, clientY: number) => {
    cursorRef.current = {
      x: (clientX / window.innerWidth) * 100,
      y: (clientY / window.innerHeight) * 100
    };
  }, []);

  useEffect(() => {
    // Scroll tracking
    const handleScroll = () => {
      const currentY = window.scrollY;
      scrollRef.current.velocity = (currentY - lastScrollY.current) * 0.5;
      scrollRef.current.y = currentY;
      lastScrollY.current = currentY;
    };

    // Pointer tracking
    const onMouseMove = (e: MouseEvent) => handlePointer(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [handlePointer]);

  // Main animation loop
  useEffect(() => {
    const animate = () => {
      timeRef.current += 0.016;
      const t = timeRef.current;

      const scrollVel = scrollRef.current.velocity;
      const scrollProgress = scrollRef.current.y / (document.body.scrollHeight - window.innerHeight || 1);

      // === MAX WIDE & SUPER SLOW SPIRAL MOTION BASED ON SCROLL ===
      // Even fewer rotations and much larger radius for maximum elegance
      const spiralAngle = scrollProgress * Math.PI * 1.5; // Only 0.75 full rotations over whole page
      const spiralRadius = 55 + scrollProgress * 40; // Extremely wide radius (pushed to edges)
      const spiralCenterX = 50;
      const spiralCenterY = 50;

      // Calculate spiral position
      const spiralX = spiralCenterX + Math.cos(spiralAngle) * spiralRadius;
      const spiralY = spiralCenterY + Math.sin(spiralAngle) * spiralRadius;

      // === ORGANIC WIND SIMULATION ===
      const windX =
        Math.sin(t * 0.4) * 3 +
        Math.sin(t * 1.2) * 1.5 +
        Math.cos(t * 0.3) * 2;

      const windY =
        Math.cos(t * 0.4) * 2 +
        Math.sin(t * 1.1) * 1.5;

      // === SCROLL EFFECT ===
      const scrollWindX = scrollVel * 1.5;
      const scrollWindY = Math.abs(scrollVel) * 1.0;

      // === WEAK CURSOR ATTRACTION ===
      const cursorAttractionStrength = 0.005;
      const dxCursor = cursorRef.current.x - posRef.current.x;
      const dyCursor = cursorRef.current.y - posRef.current.y;
      const cursorPullX = dxCursor * cursorAttractionStrength;
      const cursorPullY = dyCursor * cursorAttractionStrength;

      // === UPDATE POSITION - HEAVIEST & SLOWEST FOLLOWING ===
      const smoothing = 0.012; // Even slower and heavier feel for graceful arc

      let newX = posRef.current.x +
        (spiralX - posRef.current.x) * smoothing +
        windX * 0.02 +
        scrollWindX * 0.01 +
        cursorPullX;

      let newY = posRef.current.y +
        (spiralY - posRef.current.y) * smoothing +
        windY * 0.02 +
        scrollWindY * 0.01 +
        cursorPullY;

      // NO BOUNDS - Allow leaf to go off screen!
      // Let it spiral freely

      posRef.current = { x: newX, y: newY };
      setPos({ x: newX, y: newY });

      // === ENHANCED 3D ROTATION WITH SPIRAL EFFECT (SLOWER) ===
      const totalWindX = windX + scrollWindX;
      const totalWindY = windY + scrollWindY;


      // Rotation follows spiral motion - slowest and most graceful
      const targetRotX = Math.sin(spiralAngle * 2) * 30 + totalWindY * 10 + scrollVel * 1.0;
      const targetRotY = Math.cos(spiralAngle * 2) * 35 + totalWindX * 8 + scrollVel * 1.0;
      // Continuous rotation on Z-axis - very slow
      const targetRotZ = spiralAngle * 35 + (t * 5) + totalWindX * 4 + scrollVel * 1.2;

      setRotation(prev => ({
        x: prev.x + (targetRotX - prev.x) * 0.04,
        y: prev.y + (targetRotY - prev.y) * 0.04,
        z: prev.z + (targetRotZ - prev.z) * 0.05
      }));

      // === NATURAL LEAF BENDING/CURVATURE ===
      // Simulate internal bending based on velocity and rotation
      const velocityMagnitude = Math.sqrt(
        Math.pow(newX - posRef.current.x, 2) +
        Math.pow(newY - posRef.current.y, 2)
      );

      // Skew creates bending effect
      const targetSkewX = Math.sin(t * 1.5) * 3 + scrollVel * 0.5 + Math.sin(spiralAngle * 3) * 2;
      const targetSkewY = Math.cos(t * 1.8) * 2 + velocityMagnitude * 0.3 + Math.cos(spiralAngle * 2.5) * 1.5;

      // Scale creates subtle stretching/compression
      const targetScaleX = 1 + Math.sin(t * 2.0) * 0.05 + Math.abs(scrollVel) * 0.002;
      const targetScaleY = 1 + Math.cos(t * 2.2) * 0.06 + velocityMagnitude * 0.003;

      setBend(prev => ({
        skewX: prev.skewX + (targetSkewX - prev.skewX) * 0.12,
        skewY: prev.skewY + (targetSkewY - prev.skewY) * 0.12,
        scaleX: prev.scaleX + (targetScaleX - prev.scaleX) * 0.10,
        scaleY: prev.scaleY + (targetScaleY - prev.scaleY) * 0.10
      }));

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        zIndex: 50,
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      aria-hidden="true"
    >
      <div style={{ perspective: '400px', perspectiveOrigin: 'center center' }}>
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: `
              rotateX(${rotation.x}deg) 
              rotateY(${rotation.y}deg) 
              rotateZ(${rotation.z}deg)
              translateZ(30px)
            `,
          }}
        >
          <div
            style={{
              transform: `
                skewX(${bend.skewX}deg)
                skewY(${bend.skewY}deg)
                scaleX(${bend.scaleX})
                scaleY(${bend.scaleY})
              `,
              transformOrigin: 'center center',
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Leaf3D rotateX={rotation.x} rotateY={rotation.y} size={leafSize} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingLeaves;
