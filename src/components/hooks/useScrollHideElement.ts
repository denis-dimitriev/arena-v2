import { useEffect, useState } from 'react';

export const useScrollHideElement = () => {
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.deltaY > 0 ? setHidden(true) : setHidden(false);
    };

    window.addEventListener('wheel', (e) => handleScroll(e));

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return { hidden };
};
