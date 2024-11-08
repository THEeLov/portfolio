import { useEffect, useRef, useState } from "react";

const useInViewAnimation = (threshold = 0.1) => {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false); 
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [hasAnimated, threshold]);

  return { isInView, elementRef };
};

export default useInViewAnimation;