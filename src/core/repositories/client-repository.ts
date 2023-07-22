import { ClientDTO } from '../dtos/client-dto';

export abstract class ClientRepository {
  abstract findAll(): Promise<ClientDTO[]>;
}
