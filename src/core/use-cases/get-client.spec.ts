import { InMemoryClientRepository } from '../../../test/repositories/in-memory-client-repository';
import { GetClient } from './get-client';
import { Client } from '../entities/client';
import { ClientNotFoundException } from './exceptions/client-not-found';
import { InvalidIdException } from '../../infra/http/controllers/exceptions/invalid-id';
import ObjectID from 'bson-objectid';

describe('Test for GetClient use case', () => {
  let client1, client2;
  let clientRepository;
  let getClient;
  beforeAll(async () => {
    clientRepository = new InMemoryClientRepository();
    getClient = new GetClient(clientRepository);

    client1 = new Client({
      id: ObjectID().toHexString(),
      name: 'John',
      birthDate: new Date('1950-5-3'),
      gender: 'M',
      healthProblems: [{ name: 'diabetes', degree: 5 }],
    });

    client2 = new Client({
      id: ObjectID().toHexString(),
      name: 'Taylor',
      birthDate: new Date('1980-10-5'),
      gender: 'F',
      healthProblems: [{ name: 'hypertension', degree: 6 }],
    });

    await clientRepository.create(client1);
    await clientRepository.create(client2);
  });

  it('should return the correct client', async () => {
    const client = await getClient.execute(client2.getId());

    expect(client).toEqual(client2);
  });

  it('should throw ClientNotFoundException', async () => {
    try {
      await getClient.execute('54495ad94c934721ede76d90');
      fail('Expected an error to be thrown, but none was thrown');
    } catch (error) {
      expect(error).toBeInstanceOf(ClientNotFoundException);
    }
  });

  it('should throw InvalidIdException', async () => {
    try {
      await getClient.execute('some_invalid_id');
      fail('Expected an error to be thrown, but none was thrown');
    } catch (error) {
      expect(error).toBeInstanceOf(InvalidIdException);
    }
  });
});
