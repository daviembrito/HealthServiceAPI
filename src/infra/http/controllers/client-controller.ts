import { Controller, Get, Post, Param, UseFilters, Body } from '@nestjs/common';
import { GetClient } from 'src/core/use-cases/get-client';
import { ListClients } from 'src/core/use-cases/list-clients';
import { ClientNotFoundExceptionFilter } from '../filters/client-not-found-filter';
import ObjectID from 'bson-objectid';
import { CreateClientBody } from './dtos/create-client-body';
import { CreateClient } from 'src/core/use-cases/create-client';
import { ClientNotFoundException } from 'src/infra/exceptions/client-not-found';

@Controller('client')
export class ClientController {
  constructor(
    private readonly listClients: ListClients,
    private readonly getClient: GetClient,
    private readonly createClient: CreateClient,
  ) {}

  @Get()
  async getAllClients() {
    return await this.listClients.execute();
  }

  @Get(':id')
  @UseFilters(new ClientNotFoundExceptionFilter())
  async getClientById(@Param('id') id: string) {
    if (!ObjectID.isValid(id)) throw new ClientNotFoundException();

    const client = await this.getClient.execute(id);

    return client;
  }

  @Post()
  async create(@Body() body: CreateClientBody) {
    const { name, birthDate, gender, healthProblems } = body;

    this.createClient.execute({
      name,
      birthDate,
      gender,
      healthProblems,
    });
  }
}
