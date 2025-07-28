import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Section animations only - logo stays fixed
      sectionsRef.current.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > 0;
          
          if (isVisible) {
            section.classList.add('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addSectionRef = (ref: HTMLDivElement | null) => {
    if (ref && !sectionsRef.current.includes(ref)) {
      sectionsRef.current.push(ref);
    }
  };

  return { heroRef, addSectionRef };
}; 