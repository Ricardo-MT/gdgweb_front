import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState<{
    height: number | undefined;
    width: number | undefined;
  }>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
};

export default useWindowSize;
