import { Client } from '../entities/client';

export abstract class ClientRepository {
  abstract findAll(): Promise<Client[]>;
}
