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
}
