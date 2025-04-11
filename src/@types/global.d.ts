import { MapLocation, TSocialLink, YandexMetrica } from '@/types/app';

declare global {
  interface Window {
    Android?: {
      // getLanguage(): string;
      // isGoogle(): void;
      // isFacebook(): void;
      // selectedDay(day: string): void;
      // selectedTime(hoursAndMinutes: string): void;
      // getSocialLink(value: TSocialLink | string): void;
      // redirectToStripe(url: string): void;
      // genieRegister(values: any): void;
      // changeLanguage(lang: string): void;
      // userId(userId: number): string;
      // logout(): void;
      // tourInfo(title: string): void;
      // rating(): void;
      // openMap(value: MapLocation | string): void;
      // userHistory(token: string): void;
      closeWeb(close: boolean): void;
    };
    webkit: {
      messageHandlers: {
        // languageCode: {
        //   postMessage: (str: string) => void;
        // };
        // getLocation: {
        //   postMessage: (str: string) => void;
        // };
        // getLanguage: {
        //   postMessage: (str: string) => void;
        // };
        // isGoogle: {
        //   postMessage: (str: string) => void;
        // };
        // isFacebook: {
        //   postMessage: (str: string) => void;
        // };
        // appleSignIn: {
        //   postMessage: (str: string) => void;
        // };
        // selectedDay: {
        //   postMessage: (str: string) => void;
        // };
        // selectedTime: {
        //   postMessage: (str: string) => void;
        // };
        // getSocialLink: {
        //   postMessage: (value: TSocialLink | string) => void;
        // };
        // redirectToStripe: {
        //   postMessage: (str: string) => void;
        // };
        // removeBackButton: {
        //   postMessage: (bool: boolean) => void;
        // };
        // genieRegister: {
        //   postMessage: (values: any) => void;
        // };
        // changeLanguage: {
        //   postMessage: (lang: string) => void;
        // };
        // userId: {
        //   postMessage: (userId: number) => void;
        // };
        // logout: {
        //   postMessage: (str: string) => void;
        // };
        // tourInfo: {
        //   postMessage: (title: string) => void;
        // };
        // rating: {
        //   postMessage: (str: string) => void;
        // };
        // openMap: {
        //   postMessage: (value: MapLocation | string) => void;
        // };
        // userHistory: {
        //   postMessage: (token: string) => void;
        // };
        closeWeb: {
          postMessage: (close: boolean) => void;
        };
      };
    };
    ym: YandexMetrica;
  }
}
