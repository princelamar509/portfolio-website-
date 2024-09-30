import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ScrollTrigger = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  

  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px) scale(1)' : 'translateY(100px) scale(0.9)',
    config: {
      tension: 180, 
      mass: 0.5,
      friction: 25, 
    },
  });


  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); 
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
