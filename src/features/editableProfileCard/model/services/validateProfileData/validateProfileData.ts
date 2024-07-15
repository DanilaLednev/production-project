import { ValidateProfileError } from '../../consts/consts';

import { Profile } from '@/entities/Profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { first, lastname, age, country } = profile;

  const error: ValidateProfileError[] = [];

  if (!first || !lastname) {
    error.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    error.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    error.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return error;
};
