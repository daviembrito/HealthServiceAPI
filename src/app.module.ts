import { Module } from '@nestjs/common';
import { PrismaService } from './infra/database/prisma/services/prisma-service';
import { ClientController } from './infra/http/controllers/client-controller';
import { PrismaClientRepository } from './infra/database/prisma/repositories/prisma-client-repository';
import { ListClients } from './core/use-cases/list-clients';
import { ClientRepository } from './core/repositories/client-repository';
import { GetClient } from './core/use-cases/get-client';

@Module({
  imports: [],
  controllers: [ClientController],
  providers: [
    PrismaService,
    {
      provide: ClientRepository,
      useClass: PrismaClientRepository,
    },
    ListClients,
    GetClient,
  ],
})
export class AppModule {}
