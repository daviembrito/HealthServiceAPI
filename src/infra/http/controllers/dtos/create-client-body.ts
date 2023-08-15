import {
  IsNotEmpty,
  IsDateString,
  IsIn,
  IsArray,
  Validate,
} from 'class-validator';
import { HealthProblem } from '@core/entities/health-problem';
import { HealthProblemValidator } from './validators/health-problem-validator';

export class CreateClientBody {
  @IsNotEmpty()
  name: string;

  @IsDateString()
  birthDate: string;

  @IsIn(['M', 'F'])
  gender: string;

  @Validate(HealthProblemValidator, { each: true })
  @IsArray()
  healthProblems: HealthProblem[];
}
