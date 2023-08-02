import {
  IsOptional,
  IsString,
  IsDateString,
  IsIn,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { HealthProblem } from 'src/core/entities/health-problem';

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
  @ValidateNested({ each: true })
  @IsOptional()
  healthProblems: HealthProblem[];
}
