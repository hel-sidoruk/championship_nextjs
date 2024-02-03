export interface Errors {
  nameError: string;
  birthdateError: string;
  divisionError: string;
  weightError: string;
  beltError: string;
  teamError: string;
  cityError: string;
  phoneError: string;
  emailError: string;
  trainerError: string;
}

export interface Values {
  name: string;
  birthdate: string;
  division: string;
  weight: number;
  belt: string;
  team: string;
  city: string;
  phone: string;
  email: string;
  trainer: string;
}

export interface ParticipantType extends Values {
  id: string;
}
