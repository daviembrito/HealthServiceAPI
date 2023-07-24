import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../repositories/client-repository';
import { Client } from '../entities/client';

@Injectable()
export class ListClients {
  private clientRepository: ClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute(): Promise<Client[]> {
    return Promise.resolve(await this.clientRepository.findAll());
  }
}
