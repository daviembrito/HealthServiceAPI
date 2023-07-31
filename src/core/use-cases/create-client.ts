import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../repositories/client-repository';
import { Client } from '../entities/client';
import { HealthProblem } from '../entities/health-problem';

interface CreateClientRequest {
  name: string;
  birthDate: string;
  gender: string;
  healthProblems: HealthProblem[];
}

@Injectable()
export class CreateClient {
  constructor(private readonly clientRepository: ClientRepository) {}

  async execute(request: CreateClientRequest): Promise<void> {
    const {
      name,
      birthDate: birthDateString,
      gender,
      healthProblems,
    } = request;
    const birthDate = new Date(birthDateString);

    const client = new Client({ name, birthDate, gender, healthProblems });

    this.clientRepository.save(client);
  }
}
