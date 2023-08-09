import { InMemoryClientRepository } from '@test/repositories/in-memory-client-repository';
import { ListClients } from './list-clients';
import { Client } from '../entities/client';

describe('Test for ListClients use case', () => {
  it('should return all clients', async () => {
    const clientRepository = new InMemoryClientRepository();
    const listClients = new ListClients(clientRepository);

    const client1 = new Client({
      id: 'abcef',
      name: 'John',
      birthDate: new Date('1950-5-3'),
      gender: 'M',
      healthProblems: [{ name: 'diabetes', degree: 5 }],
    });
    await clientRepository.save(client1);

    const client2 = new Client({
      id: 'abcef123',
      name: 'Taylor',
      birthDate: new Date('1980-10-5'),
      gender: 'F',
      healthProblems: [{ name: 'hypertension', degree: 6 }],
    });
    await clientRepository.save(client2);

    const clients = await listClients.execute();

    expect(clients).toEqual(
      expect.arrayContaining([
        expect.objectContaining(client1),
        expect.objectContaining(client2),
      ]),
    );
  });
});
