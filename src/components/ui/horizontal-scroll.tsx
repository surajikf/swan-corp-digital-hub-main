import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  showArrows?: boolean;
  snapToItems?: boolean;
  autoScroll?: boolean;
  scrollSpeed?: number;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  className = '',
  showArrows = true,
  snapToItems = true,
  autoScroll = false,
  scrollSpeed = 1
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();

      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      const targetScroll = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY * scrollSpeed;
    }
  };

  const handleTouchStart = () => {
    setIsScrolling(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsScrolling(false), 150);
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Left Arrow */}
      {showArrows && canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>
      )}

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className={`overflow-x-auto scrollbar-hide ${
          snapToItems ? 'snap-x snap-mandatory' : ''
        } ${isScrolling ? 'cursor-grabbing' : 'cursor-grab'}`}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div className={`flex space-x-6 ${
          snapToItems ? 'snap-start' : ''
        }`}>
          {React.Children.map(children, (child, index) => (
            <div className={`flex-shrink-0 ${
              snapToItems ? 'snap-start' : ''
            }`}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      {showArrows && canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300 opacity-50"
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;





