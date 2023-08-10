import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'healthProblemValidator', async: false })
export class HealthProblemValidator implements ValidatorConstraintInterface {
  validate(obj: object) {
    return obj.hasOwnProperty('name') && obj.hasOwnProperty('degree'); // for async validations you must return a Promise<boolean> here
  }

  defaultMessage() {
    return 'Missing healthProblem fields (name, degree)';
  }
}
