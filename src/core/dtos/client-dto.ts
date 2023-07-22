import { HealthProblem } from '../entities/health-problem';

export class ClientDTO {
  id: string;
  name: string;
  birthDate: Date;
  gender: string;
  healthProblems: HealthProblem[];
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    name: string,
    birthDate: Date,
    gender: string,
    healthProblems: HealthProblem[],
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
    this.healthProblems = healthProblems;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
