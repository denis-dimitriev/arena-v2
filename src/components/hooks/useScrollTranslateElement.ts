import { useEffect, useState } from 'react';

export const useScrollTranslateElement = () => {
  const [translate, setTranslate] = useState<boolean>(false);

  useEffect(() => {
      const handleScroll = (event: WheelEvent) => {
        event.deltaY > 0 ? setTranslate(true) : setTranslate(false);
      };

      const layout = document.getElementById('layout')
      layout?.addEventListener('wheel', (e) => handleScroll(e));

      return () => {
        layout?.removeEventListener('wheel', handleScroll);
      };
  }, []);

  return { translate };
};
