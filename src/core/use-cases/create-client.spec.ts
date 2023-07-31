import { InMemoryClientRepository } from '../../../test/repositories/in-memory-client-repository';
import { CreateClient } from './create-client';

describe('Test for CreateClient use case', () => {
  let clientRepository;
  let createClient;
  let client;
  beforeAll(async () => {
    clientRepository = new InMemoryClientRepository();
    createClient = new CreateClient(clientRepository);

    await clientRepository.save(client);
  });

  it('should save a new Client on the database', async () => {
    const newClient = {
      name: 'John',
      birthDateString: '2000-02-10',
      gender: 'M',
      healthProblems: [
        {
          name: 'diabetes',
          degree: 3,
        },
      ],
    };

    await createClient.execute(newClient);

    const client = await clientRepository.findAll();

    expect(client).toBeTruthy();
  });
});
