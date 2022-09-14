import { useEffect, useState, UIEvent } from 'react';

export const useScrollTranslateElement = () => {
  const [translate, setTranslate] = useState<boolean>(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) setTranslate(true);
      if (event.deltaY < 0) setTranslate(false);
    };

    window.addEventListener('wheel', (e) => {
      timeout = setTimeout(() => handleScroll(e), 300);
    });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return { translate };
};
