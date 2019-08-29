import { useEffect } from 'react';

export default function useClickOutside(ref, handler) {
  useEffect(() => {
    const handleClickOutside = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('touchstart', handleClickOutside, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.addEventListener('touchstart', handleClickOutside, true);
    };
  }, [ref, handler]);
}
