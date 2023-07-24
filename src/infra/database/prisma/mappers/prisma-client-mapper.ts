import { Client as RawClient } from '@prisma/client';
import { Client } from 'src/core/entities/client';

export class PrismaClientMapper {
  static toDomain(rawClient: RawClient): Client {
    return new Client({
      id: rawClient.id,
      name: rawClient.name,
      birthDate: rawClient.birthDate,
      gender: rawClient.gender,
      healthProblems: rawClient.healthProblems,
      createdAt: rawClient.createdAt,
      updatedAt: rawClient.updatedAt,
    });
  }
}
