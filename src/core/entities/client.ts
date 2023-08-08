import { Replace } from 'src/helpers/replace';
import { HealthProblem } from './health-problem';

export interface ClientProperties {
  id?: string;
  name: string;
  birthDate: Date;
  gender: string;
  healthProblems: HealthProblem[];
  score?: number;
  createdAt: Date;
  updatedAt: Date;
}

export class Client {
  private properties: ClientProperties;

  constructor(
    properties: Replace<
      ClientProperties,
      { createdAt?: Date; updatedAt?: Date }
    >,
  ) {
    this.properties = {
      ...properties,
      createdAt: properties.createdAt ?? new Date(),
      updatedAt: properties.updatedAt ?? new Date(),
    };
    this.updateScore();
  }

  private updateScore() {
    const sumOfDegrees = this.sumOfHealthProblemsDegrees();
    const exp = Math.exp(-(-2.8 + sumOfDegrees));

    this.properties.score = (1 / (1 + exp)) * 100;
  }

  private sumOfHealthProblemsDegrees(): number {
    let sum = 0;
    for (const { degree } of this.properties.healthProblems) {
      sum += degree;
    }

    return sum;
  }

  public updatePropertiesFrom(source: Client) {
    Object.keys(source.properties).forEach((key) => {
      if (source.properties[key] !== undefined) {
        this.properties[key] = source.properties[key];
      }
    });
  }

  public getScore(): number {
    return this.properties.score;
  }

  public getId(): string {
    return this.properties.id;
  }

  public setId(id: string): void {
    this.properties.id = id;
  }

  public getName(): string {
    return this.properties.name;
  }

  public setName(name: string): void {
    this.properties.name = name;
  }

  public getBirthDate(): Date {
    return this.properties.birthDate;
  }

  public setBirthDate(birthDate: Date): void {
    this.properties.birthDate = birthDate;
  }

  public getGender(): string {
    return this.properties.gender;
  }

  public setGender(gender: string): void {
    this.properties.gender = gender;
  }

  public getHealthProblems(): HealthProblem[] {
    return this.properties.healthProblems;
  }

  public setHealthProblems(healthProblems: HealthProblem[]): void {
    this.properties.healthProblems = healthProblems;
    this.updateScore();
  }

  public getCreatedAt(): Date {
    return this.properties.createdAt;
  }

  public setCreatedAt(createdAt: Date): void {
    this.properties.createdAt = createdAt;
  }

  public getUpdatedAt(): Date {
    return this.properties.updatedAt;
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.properties.updatedAt = updatedAt;
  }
}
