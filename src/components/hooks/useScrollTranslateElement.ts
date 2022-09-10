import { useEffect, useState } from 'react';

export const useScrollTranslateElement = () => {
  const [translate, setTranslate] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.deltaY > 0 ? setTranslate(true) : setTranslate(false);
    };

    window.addEventListener('wheel', (e) => handleScroll(e));

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return { translate };
};
