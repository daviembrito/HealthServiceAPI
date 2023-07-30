import { Injectable } from '@nestjs/common';
import { ClientRepository } from 'src/core/repositories/client-repository';
import { PrismaService } from '../services/prisma-service';
import { Client } from 'src/core/entities/client';
import { PrismaClientMapper } from '../mappers/prisma-client-mapper';

@Injectable()
export class PrismaClientRepository implements ClientRepository {
  constructor(private readonly prismaService: PrismaService) {
    this.prismaService = prismaService;
  }

  async findAll(): Promise<Client[]> {
    const clients = await this.prismaService.client.findMany();
    return clients.map(PrismaClientMapper.toDomain);
  }

  async findById(id: string): Promise<Client> | null {
    const client = await this.prismaService.client.findUnique({
      where: { id: id },
    });

    if (!client) {
      return null;
    }

    return PrismaClientMapper.toDomain(client);
  }

  async save(client: Client): Promise<void> {
    const rawClient = PrismaClientMapper.toPrisma(client);

    await this.prismaService.client.create({ data: rawClient });
  }
}
