// import type { MapLocation, TSocialLink } from '@/types/app';

const apple = window?.webkit?.messageHandlers;
const android = window?.Android;

// export const getLanguage = () => {
//   apple?.getLanguage.postMessage('');
//   return android?.getLanguage();
// };

// export const getLocation = () => {
//   apple?.getLocation.postMessage('');
//   // return android?.deviceId();
// };

// export const isGoogle = () => {
//   apple?.isGoogle.postMessage('');
//   android?.isGoogle();
// };

// export const isFacebook = () => {
//   apple?.isFacebook.postMessage('');
//   android?.isFacebook();
// };

// export const isApple = () => {
//   apple?.appleSignIn.postMessage('');
// };

// export const selectedDay = (day: string) => {
//   apple?.selectedDay.postMessage(day);
//   android?.selectedDay(day);
// };

// export const selectedDateTime = (hoursAndMinutes: string) => {
//   apple?.selectedTime.postMessage(hoursAndMinutes);
//   android?.selectedTime(hoursAndMinutes);
// };

// export const getSocialLink = (value: TSocialLink | string) => {
//   apple?.getSocialLink.postMessage(value);
//   android?.getSocialLink(value);
// };

// export const redirectToStripe = (url: string) => {
//   apple?.redirectToStripe.postMessage(url);
//   android?.redirectToStripe(url);
// };

// export const removeBackButton = (bool: boolean) => {
//   apple?.removeBackButton.postMessage(bool);
//   // android?.redirectToStripe(url);
// };

// export const genieRegister = (values: any) => {
//   apple?.genieRegister.postMessage(values);
//   android?.genieRegister(values);
// };

// export const changeMobileLanguage = (lang: string) => {
//   apple?.changeLanguage?.postMessage?.(lang);
//   android?.changeLanguage?.(lang);
// };

// export const sendUserId = (userId: number) => {
//   apple?.userId?.postMessage?.(userId);
//   android?.userId?.(userId);
// };

// export const logoutMobile = () => {
//   apple?.logout?.postMessage?.('');
//   android?.logout?.();
// };

// export const sendTourTitle = (title: string) => {
//   apple?.tourInfo?.postMessage?.(title);
//   android?.tourInfo?.(title);
// };

// export const sendRating = () => {
//   apple?.rating?.postMessage?.('');
//   android?.rating?.();
// };

// export const openMap = (value: MapLocation | string) => {
//   apple?.openMap?.postMessage?.(value);
//   android?.openMap?.(value);
// };

// export const sendUserToken = (token: string) => {
//   apple?.userHistory?.postMessage?.(token);
//   android?.userHistory?.(token);
// };

export const closeWeb = (isBack: boolean) => {
  apple?.closeWeb.postMessage(isBack);
  android?.closeWeb(isBack);
};
