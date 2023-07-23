import { Injectable } from '@nestjs/common';
import { ClientDTO } from '../dtos/client-dto';
import { ClientRepository } from '../repositories/client-repository';

@Injectable()
export class ListClients {
  private clientRepository: ClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute(): Promise<ClientDTO[]> {
    return Promise.resolve(await this.clientRepository.findAll());
  }
}
