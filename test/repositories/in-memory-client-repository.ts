import { Client } from 'src/core/entities/client';
import { ClientRepository } from 'src/core/repositories/client-repository';
import ObjectID from 'bson-objectid';
import { InvalidIdException } from '../../src/infra/http/controllers/exceptions/invalid-id';

export class InMemoryClientRepository implements ClientRepository {
  public clients: Client[] = [];

  async findAll(): Promise<Client[]> {
    return this.clients;
  }

  async findById(clientId: string): Promise<Client> | null {
    if (!ObjectID.isValid(clientId)) throw new InvalidIdException();

    const client = this.clients.find((item) => clientId === item.getId());

    if (!client) return null;

    return client;
  }

  async create(client: Client) {
    this.clients.push(client);
  }
}
