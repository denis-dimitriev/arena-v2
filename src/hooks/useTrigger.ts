import { useState } from 'react';

export const useTrigger = () => {
  const [trigger, setTrigger] = useState<boolean>(false);

  const onTriggerPushHandler = () => setTrigger((prev) => !prev);

  return { trigger, onTriggerPushHandler };
};
