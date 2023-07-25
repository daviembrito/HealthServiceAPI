import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { GetClient } from 'src/core/use-cases/get-client';
import { ListClients } from 'src/core/use-cases/list-clients';
import { ClientNotFoundExceptionFilter } from '../filters/client-not-found-filter';
import { InvalidIdException } from './exceptions/invalid-id';
import { InvalidIdExceptionFilter } from '../filters/invalid-id-filter';

@Controller('client')
export class ClientController {
  constructor(
    private readonly listClients: ListClients,
    private readonly getClient: GetClient,
  ) {}

  @Get()
  async getAllClients() {
    return await this.listClients.execute();
  }

  @Get(':id')
  @UseFilters(
    new ClientNotFoundExceptionFilter(),
    new InvalidIdExceptionFilter(),
  )
  async getClientById(@Param('id') id: string) {
    let client;
    try {
      client = await this.getClient.execute(id);
    } catch {
      throw new InvalidIdException();
    }

    return client;
  }
}
