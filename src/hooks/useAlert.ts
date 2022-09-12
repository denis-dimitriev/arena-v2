import { useState } from 'react';

export const useAlert = () => {
  const [alert, setAlert] = useState<{ error: boolean; success: boolean }>({
    error: false,
    success: false
  });

  return { alert, setAlert };
};
