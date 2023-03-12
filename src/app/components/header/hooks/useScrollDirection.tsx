import { useEffect, useState } from 'react';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('up');

  useEffect(() => {
    const root = document.getElementById('root');
    let lastScrollY = root?.scrollTop || 0;

    const scrollListener = () => {
      const scrollY = root?.scrollTop || 0;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    root?.addEventListener('scroll', scrollListener, true);
    return () => {
      root?.removeEventListener('scroll', scrollListener, true);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export default useScrollDirection;
