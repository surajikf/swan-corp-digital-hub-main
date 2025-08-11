import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  children: React.ReactNode;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add hover detection for interactive elements
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a') ||
          target.classList.contains('hover-lift') ||
          target.classList.contains('corporate-card')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {children}
      
      {/* Custom Cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
        }}
      >
        {/* Main cursor dot */}
        <div
          className={`absolute w-4 h-4 bg-white rounded-full transition-all duration-200 ease-out ${
            isHovering ? 'scale-150 opacity-80' : 'scale-100 opacity-100'
          } ${isClicking ? 'scale-75' : ''}`}
        />
        
        {/* Outer ring */}
        <div
          className={`absolute w-8 h-8 border border-white rounded-full transition-all duration-300 ease-out ${
            isHovering ? 'scale-200 opacity-60' : 'scale-100 opacity-40'
          } ${isClicking ? 'scale-150' : ''}`}
          style={{
            transform: 'translate(-2px, -2px)',
          }}
        />
      </div>

      {/* Magnetic cursor for CTAs */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
        }}
      >
        <div
          className={`absolute w-10 h-10 bg-gold/20 rounded-full transition-all duration-500 ease-out ${
            isHovering ? 'scale-200 opacity-60' : 'scale-0 opacity-0'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;

