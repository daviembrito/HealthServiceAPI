import ObjectID from 'bson-objectid';
import { InMemoryClientRepository } from '../../../test/repositories/in-memory-client-repository';
import { Client } from '../entities/client';
import { UpdateClient } from './update-client';

describe('Test for UpdateClient use case', () => {
  let client1;
  let client1Properties;
  let client1Id;
  let clientRepository;
  let updateClient;

  beforeAll(async () => {
    clientRepository = new InMemoryClientRepository();
    updateClient = new UpdateClient(clientRepository);

    client1Id = ObjectID().toHexString();
    client1Properties = {
      id: client1Id,
      name: 'John',
      birthDate: new Date('1950-5-3'),
      gender: 'M',
      healthProblems: [{ name: 'diabetes', degree: 5 }],
      createdAt: new Date('2015-12-01'),
      updatedAt: new Date('2015-12-01'),
    };
    client1 = new Client(client1Properties);
    await clientRepository.save(client1);

    const mockDate = new Date('2023-1-1');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate as any);
  });

  afterAll(() => {
    (global.Date as any).mockRestore();
  });

  it('should update the client', async () => {
    const clientUpdates = {
      name: 'John Nhoj',
      birthDate: undefined,
      gender: undefined,
      healthProblems: [
        { name: 'diabetes', degree: 5 },
        { name: 'asthma', degree: 3 },
      ],
    };

    await updateClient.execute(client1Id, clientUpdates);

    const clientCopy = new Client(client1Properties);
    clientCopy.updatePropertiesFrom(new Client(clientUpdates));
    clientCopy.setCreatedAt(client1Properties.createdAt);

    const clientFound = await clientRepository.findById(client1Id);

    expect(clientFound).toEqual(clientCopy);
  });
});
