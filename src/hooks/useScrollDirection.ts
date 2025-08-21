import { useState, useEffect } from 'react';

export const useScrollDirection = (threshold: number = 50) => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      
      // Always show at top
      if (scrollY < threshold) {
        setIsVisible(true);
        setScrollDirection(null);
      } else {
        const direction = scrollY > lastScrollY ? 'down' : 'up';
        
        if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 5) {
          setScrollDirection(direction);
          setIsVisible(direction === 'up');
        }
      }
      
      setLastScrollY(scrollY);
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollDirection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection, lastScrollY, threshold]);

  return { scrollDirection, isVisible, lastScrollY };
};