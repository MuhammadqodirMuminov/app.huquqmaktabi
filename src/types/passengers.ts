export type PassengerType = 'MALE' | 'FEMALE' | 'CHILD';

export type IPassenger = {
  firstName: string;
  lastName: string;
  citizenship: string;
  birthDate: string;
  passportSeries: string;
  passportNumber: string;
  dateOfIssue: string;
  validityPeriod: string;
  guestType: PassengerType;
};

export type IPassengersStore = {
  passengers: IPassenger[];

  addPassenger: (passenger: IPassenger) => void;
  removePassenger: (index: number) => void;
  editPassenger: (index: number, passenger: IPassenger) => void;
};
