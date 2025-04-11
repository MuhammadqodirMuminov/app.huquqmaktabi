import { TUser } from '@/types/auth';

export const getUserBalance = (user: TUser | null) =>
  user?.billingAccount?.balance ? Number(user.billingAccount.balance) / 100 : 0;

export const formatUserName = (user: TUser): string => {
  const { firstName, lastName, login } = user;
  let userName;

  if (firstName && lastName) {
    userName = `${firstName[0]}.${lastName[0]}`;
  } else if (firstName) {
    userName = firstName[0];
  } else if (lastName) {
    userName = lastName[0];
  } else {
    userName = login[0].toUpperCase();
  }

  return userName;
};
