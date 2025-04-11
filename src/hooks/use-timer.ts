import { useCallback, useEffect, useState } from 'react';

export const useTimer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [initialTime, setInitialTime] = useState<number>(2);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearTimeout(timer);
  }, [isActive, timeLeft]);

  const resetTimer = useCallback(() => {
    setTimeLeft(initialTime * 60);
    setInitialTime(initialTime + 1);
    setIsActive(true);
  }, [initialTime]);

  const formattedTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const remainingSeconds = timeLeft % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return { isActive, formattedTime, resetTimer };
};
