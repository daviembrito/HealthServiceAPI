import { Controller, Get } from '@nestjs/common';
import { ListClients } from 'src/core/use-cases/list-clients';

@Controller('client')
export class ClientController {
  constructor(private readonly listClients: ListClients) {}

  @Get()
  async getAllClients() {
    return await this.listClients.execute();
  }
}
