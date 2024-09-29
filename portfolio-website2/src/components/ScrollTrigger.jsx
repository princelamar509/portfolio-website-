import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ScrollTrigger = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Using react-spring to animate multiple properties: opacity, transform (Y-axis), and scale
  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px) scale(1)' : 'translateY(100px) scale(0.9)', // Adds scaling effect and vertical movement
    config: {
      tension: 180, // Higher tension for faster return animation
      friction: 25, // Reduced friction for smoother animations
    },
  });

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Optionally keep it animated in/out when scrolled
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, 
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

export default ScrollTrigger;
