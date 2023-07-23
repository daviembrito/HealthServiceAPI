import { Client } from './client';

describe('Test for Client entity', () => {
  let client;
  beforeAll(() => {
    client = new Client(
      'a8Ahy1j',
      'Davi',
      new Date('2023-1-5'),
      'M',
      [
        { name: 'diabetes', degree: 2 },
        { name: 'asthma', degree: 5 },
      ],
      new Date('2021-3-4'),
      new Date('2021-3-4'),
    );
  });

  it('should be able to create a client', () => {
    expect(client).toBeTruthy();
  });

  it('should be able to calculate the right score', () => {
    expect(client.score()).toBeCloseTo(98.52);
  });
});
