import { Client } from 'src/core/entities/client';
import { ClientRepository } from 'src/core/repositories/client-repository';

export class InMemoryClientRepository implements ClientRepository {
  public clients: Client[] = [];

  async findAll(): Promise<Client[]> {
    return this.clients;
  }

  async create(client: Client) {
    this.clients.push(client);
  }
}
