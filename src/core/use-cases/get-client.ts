import { Injectable } from '@nestjs/common';
import { ClientDTO } from '../dtos/client-dto';
import { ClientRepository } from '../repositories/client-repository';

@Injectable()
export class GetClient {
  private clientRepository: ClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  async executeAll(): Promise<ClientDTO[]> {
    return Promise.resolve(await this.clientRepository.findAll());
  }
}
