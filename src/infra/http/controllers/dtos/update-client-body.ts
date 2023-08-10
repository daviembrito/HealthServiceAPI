import {
  IsOptional,
  IsString,
  IsDateString,
  IsIn,
  IsArray,
  Validate,
} from 'class-validator';
import { HealthProblem } from '@core/entities/health-problem';
import { HealthProblemValidator } from './validators/health-problem-validator';

export class UpdateClientBody {
  @IsString()
  @IsOptional()
  name: string;

  @IsDateString()
  @IsOptional()
  birthDate: string;

  @IsIn(['M', 'F'])
  @IsOptional()
  gender: string;

  @IsArray()
  @Validate(HealthProblemValidator)
  @IsOptional()
  healthProblems: HealthProblem[];
}
