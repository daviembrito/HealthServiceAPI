import { Controller, Get } from '@nestjs/common';
import { GetClient } from 'src/core/use-cases/get-client';

@Controller('client')
export class ClientController {
  constructor(private readonly getClient: GetClient) {}

  @Get()
  async getAllClients() {
    return await this.getClient.executeAll();
  }
}
