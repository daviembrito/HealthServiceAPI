import {
  IsNotEmpty,
  IsDateString,
  IsIn,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { HealthProblem } from '@core/entities/health-problem';

export class CreateClientBody {
  @IsNotEmpty()
  name: string;

  @IsDateString()
  birthDate: string;

  @IsIn(['M', 'F'])
  gender: string;

  @IsArray()
  @ValidateNested({ each: true })
  healthProblems: HealthProblem[];
}
