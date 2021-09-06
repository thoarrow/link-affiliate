export const UserEmailInputPolicies = {
  INPUT_NAME: 'email',
  VALID_PATTERN:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const UserPasswordInputPolicies = {
  INPUT_NAME: 'password',
  VALID_PATTERN:
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])[0-9a-zA-Z\W]{8,20}$/,
  MIN_LENGTH: 8,
  MAX_LENGTH: 20,
};

export const UserPasswordConfirmInputPolicies = {
  INPUT_NAME: 'passwordConfirm',
};
