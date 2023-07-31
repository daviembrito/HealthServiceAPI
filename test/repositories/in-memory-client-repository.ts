import { Client } from 'src/core/entities/client';
import { ClientRepository } from 'src/core/repositories/client-repository';
import ObjectID from 'bson-objectid';
import { ClientNotFoundException } from '../../src/infra/exceptions/client-not-found';

export class InMemoryClientRepository implements ClientRepository {
  public clients: Client[] = [];

  async findAll(): Promise<Client[]> {
    return this.clients;
  }

  async findById(clientId: string): Promise<Client> | null {
    if (!ObjectID.isValid(clientId)) throw new ClientNotFoundException();

    const client = this.clients.find((item) => clientId === item.getId());

    if (!client) throw new ClientNotFoundException();

    return client;
  }

  async save(client: Client) {
    this.clients.push(client);
  }
}
