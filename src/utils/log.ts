import axios from 'axios';

import { isAppleDevice } from './general';

import { useAuthStore } from '@/store/auth';

export const logMessage = (error: string) => {
  const body = {
    error,
    app: 'LETSTRIP',
    deviceId: useAuthStore.getState().deviceId,
    logType: 'WARNING',
    logDate: new Date().toISOString(),
    os: isAppleDevice() ? 'IOS' : 'ANDROID',
  };
  axios.post('https://logging.coreteam.uz/log', body);
};
