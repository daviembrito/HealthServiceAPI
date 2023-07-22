import { ClientDTO } from '../dtos/client-dto';
import { HealthProblem } from './health-problem';

export class Client {
  private id: string;
  private name: string;
  private birthDate: Date;
  private gender: string;
  private healthProblems: HealthProblem[];
  private createdAt: Date;
  private updatedAt: Date;

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

  public static fromClientDTO(dto: ClientDTO): Client {
    const newInstance = new Client(
      dto.id,
      dto.name,
      dto.birthDate,
      dto.gender,
      dto.healthProblems,
      dto.createdAt,
      dto.updatedAt,
    );
    return newInstance;
  }

  public score(): number {
    const sumOfDegrees = this.sumOfHealthProblems();
    const exp = Math.exp(-(-2.8 + sumOfDegrees));

    return (1 / (1 + exp)) * 100;
  }

  private sumOfHealthProblems(): number {
    let sum = 0;
    for (const { degree } of this.healthProblems) {
      sum += degree;
    }

    return sum;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getBirthDate(): Date {
    return this.birthDate;
  }

  public setBirthDate(birthDate: Date): void {
    this.birthDate = birthDate;
  }

  public getGender(): string {
    return this.gender;
  }

  public setGender(gender: string): void {
    this.gender = gender;
  }

  public getHealthProblems(): HealthProblem[] {
    return this.healthProblems;
  }

  public setHealthProblems(healthProblems: HealthProblem[]): void {
    this.healthProblems = healthProblems;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}
