import { Injectable } from '@nestjs/common';
import { ClientRepository } from 'src/core/repositories/client-repository';
import { PrismaService } from '../services/prisma-service';
import { ClientDTO } from 'src/core/dtos/client-dto';

@Injectable()
export class PrismaClientRepository implements ClientRepository {
  constructor(private readonly prismaService: PrismaService) {
    this.prismaService = prismaService;
  }

  async findAll(): Promise<ClientDTO[]> {
    const clients = await this.prismaService.client.findMany();
    return clients;
  }
}
