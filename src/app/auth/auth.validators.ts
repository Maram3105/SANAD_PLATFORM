import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordStrengthValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = String(control.value ?? '');

  if (!value) {
    return null;
  }

  const errors: ValidationErrors = {};

  if (value.length < 8) {
    errors['minLength'] = true;
  }

  if (!/[A-Z]/.test(value)) {
    errors['uppercase'] = true;
  }

  if (!/[0-9]/.test(value)) {
    errors['number'] = true;
  }

  return Object.keys(errors).length ? errors : null;
};

export const passwordMatchValidator = (
  passwordKey: string,
  confirmKey: string
): ValidatorFn => {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordKey)?.value;
    const confirm = group.get(confirmKey)?.value;

    if (!password || !confirm) {
      return null;
    }

    return password === confirm ? null : { passwordMismatch: true };
  };
};
